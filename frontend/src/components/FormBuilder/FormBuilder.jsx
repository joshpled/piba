//system
import { useState, Fragment, useEffect } from 'react';
//npm packages
import DatePicker from 'react-datepicker';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
//local imports
import { toCapitalizeEach, toCamelCase } from '@/helpers/textTransformations';

//New Dog Form Component
export default function FormBuilder({ formObj, apiMethod }) {
  console.log('render Form Builder');
  //state
  const { button, formFields, state } = formObj;
  const [fullForm, setFullForm] = useState(null);

  const [formEntries, setFormEntries] = useState(state);
  console.log('render FormBase');

  //POST Create New Dog
  const handleSubmit = (e) => {
    e.preventDefault();
    apiMethod(formEntries).then(() => navigate('/'));
  };

  //Form Changes
  const handleChange = (e) => {
    setFormEntries((props) => {
      return { ...props, [e.target.name]: e.target.value };
    });
  };

  //Form Date Changes
  const handleDateChange = (date, e) => {
    e.preventDefault();
    setFormEntries({ ...formEntries, dateOfBirth: date });
  };

  useEffect(() => {
    setFullForm(createForm(formFields));
  }, []);

  return (
    <div>
      {/* <Formik
        initialValues={state}
        validate={(values) => {
          const errors = {};
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      > */}
      <form onSubmit={handleSubmit} id="form">
        {fullForm}
        <button type={button.type}>{button.text}</button>
      </form>
      {/* </Formik> */}
    </div>
  );
}
