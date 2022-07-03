import React, { Component, Fragment } from 'react';
import DatePicker from 'react-datepicker';
import { nanoid } from 'nanoid';
import { toCapitalizeEach, toCamelCase } from '@/helpers/textTransformations';

export default class FormBuilderClass extends Component {
  constructor(props) {
    super(props);
    const { formObj, apiMethod } = props;
    const { button, formFields, state } = formObj;
    this.state = { ...state, fullForm: [], formFields, button };
  }

  createInputs({ field, type, required }) {
    const fieldName = toCamelCase(field);
    return <input type={type} name={field} value={this.state[fieldName]} onChange={(e) => this.handleChange(e)} required={required} />;
  }

  createSelectionInputs({ field, type, options }) {
    const fieldName = toCamelCase(field);
    return (
      <select type={type} name={field} value={this.state[fieldName]} onChange={this.handleChange}>
        {options.map((option) => {
          return (
            <option value={option} key={nanoid()}>
              {option}
            </option>
          );
        })}
      </select>
    );
  }

  createForm(formFields) {
    return formFields.map((field) => {
      if (field.type === 'text' || field.type === 'number') {
        return (
          <Fragment key={nanoid()}>
            <label htmlFor={field.field}>{toCapitalizeEach(field.field)}: </label>
            {this.createInputs(field)}
            <br />
          </Fragment>
        );
      }
      if (field.type === 'select') {
        return (
          <Fragment key={nanoid()}>
            <label htmlFor={field.field}>{toCapitalizeEach(field.field)}: </label>
            {this.createSelectionInputs(field)}
            <br />
          </Fragment>
        );
      }
      if (field.type === 'DatePicker') {
        const fieldName = toCamelCase(field);

        return (
          <Fragment key={nanoid()}>
            <label htmlFor={field.field}>{toCapitalizeEach(field.field)}: </label>
            <DatePicker name={field.field} selected={this.state[fieldName]} onChange={this.handleDateChange} />
            <br />
          </Fragment>
        );
      }
      if (field.type === 'textarea') {
        const fieldName = toCamelCase(field);

        return (
          <Fragment key={nanoid()}>
            <label htmlFor={field.field}>{toCapitalizeEach(field.field)}: </label>
            <textarea rows="4" cols="50" name={field.field} value={this.state[fieldName]} onChange={this.handleChange} /> <br />
          </Fragment>
        );
      }
    });
  }
  //POST Create New Dog
  handleSubmit(e) {
    e.preventDefault();
    this.apiMethod(this.state).then(() => navigate('/'));
  }

  //Form Changes
  handleChange(e) {
    console.log(e.target.value);
    this.state[e.target.name] = e.target.value;
  }

  //Form Date Changes
  handleDateChange(date, e) {
    e.preventDefault();
    this.state['dateOfBirth'] = date;
  }

  componentDidMount() {
    this.setState((prevState) => {
      return { ...prevState, fullForm: this.createForm(this.state.formFields) };
    });
  }
  render() {
    return (
      <form onSubmit={(e) => handleSubmit(e)} id="form">
        {this.state.fullForm}
        <button type={this.state.button.type}>{this.state.button.text}</button>
      </form>
    );
  }
}
