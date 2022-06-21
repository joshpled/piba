//system
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//npm packages
import DatePicker from 'react-datepicker';
//local imports
import { toCapitalizeEach, toCamelCase } from '@/helpers/textTransformations';

//New Dog Form Component
export default function FormBuilder({ formObj, apiMethod }) {
  const { button, state, formFields } = formObj;
  // debugger;
  //router navigate
  let navigate = useNavigate();
  //state
  const [formEntries, setFormEntries] = useState(state);
  //POST Create New Dog
  const handleSubmit = (e) => {
    e.preventDefault();
    apiMethod(formEntries).then(() => navigate('/'));
  };
  //Form Changes
  const handleChange = (e) => {
    e.preventDefault();
    setFormEntries({ ...formEntries, [e.target.name]: e.target.value });
  };
  //Form Date Changes
  const handleDateChange = (date, e) => {
    e.preventDefault();
    setFormEntries({ ...formEntries, dateOfBirth: date });
  };

  const createInputs = ({ field, type, required }) => {
    return <input type={type} name={field} value={formEntries[toCamelCase(field)]} onChange={(e) => handleChange(e)} required={required} />;
  };
  const createSelectionInputs = ({ field, type, options }) => {
    return (
      <select type={type} name={field} value={formEntries[toCamelCase(field)]} onChange={(e) => handleChange(e)}>
        {options.map((option) => {
          return <option value={option}>{option}</option>;
        })}
      </select>
    );
  };

  const createForm = (formFields) => {
    return formFields.map((field) => {
      if (field.type === 'text' || field.type === 'number') {
        return (
          <>
            <label htmlFor={field.field}>{toCapitalizeEach(field.field)}: </label>
            {createInputs(field)}
            <br />
          </>
        );
      }
      if (field.type === 'select') {
        return (
          <>
            <label htmlFor={field.field}>{toCapitalizeEach(field.field)}: </label>
            {createSelectionInputs(field)}
            <br />
          </>
        );
      }
      if (field.type === 'DatePicker') {
        return (
          <>
            <label htmlFor={field.field}>{toCapitalizeEach(field.field)}: </label>
            <DatePicker name={field.field} selected={formEntries[toCamelCase(field.field)]} onChange={(date, e) => handleDateChange(date, e)} />
            <br />
          </>
        );
      }
      if (field.type === 'textarea') {
        return (
          <>
            <label htmlFor={field.field}>{toCapitalizeEach(field.field)}: </label>
            <textarea rows="4" cols="50" name={field.field} value={formEntries[toCamelCase(field.field)]} onChange={(e) => handleChange(e)} /> <br />
          </>
        );
      }
    });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} id="form">
        {createForm(formFields)}
        <button type={button.type}>{button.text}</button>
      </form>
    </div>
  );
}
