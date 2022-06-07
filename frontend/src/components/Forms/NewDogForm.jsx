import { useState } from 'react';
import axios from 'axios';
import { baseURL } from '@/globalUrls';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export default function NewDogForm() {
  const [formEntries, setFormEntries] = useState({
    name: '',
    currentLocation: 'Saint Petersburg',
    sex: 'male',
    status: 'Needs Register',
    currentWeightPounds: '',
    size: '',
    dateOfBirth: new Date(),
    // photos: '',
    // videos: '',
    // breed: '',
    // color: '',
    // pattern: '',
    // adoptionFeeGroup: '',
    // description: '',
    // microchips: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(formEntries);
    // axios
    //   .post(baseURL + '/api/dogs', formEntries)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormEntries({ ...formEntries, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date, e) => {
    e.preventDefault();
    setFormEntries({ ...formEntries, dateOfBirth: date });
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} id="form">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={formEntries.name} onChange={(e) => handleChange(e)} required /> <br />
        <label htmlFor="currentLocation">Current Location:</label>
        <input type="text" name="currentLocation" value={formEntries.currentLocation} onChange={(e) => handleChange(e)} required /> <br />
        <label htmlFor="sex">Sex:</label>
        <select value={formEntries.sex} name="sex" onChange={(e) => handleChange(e)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br></br>
        <br></br>
        <label htmlFor="Status">Status:</label>
        <select value={formEntries.status} name="status" onChange={(e) => handleChange(e)}>
          <option value="Needs Register">Needs Register</option>
          <option value="Registered">Registered</option>
          <option value="Needs Medical">Needs Medical</option>
          <option value="Neutered/Spayed">Neutered/Spayed</option>
          <option value="Needs Neutered/Spayed">Needs Neutered/Spayed</option>
          <option value="Ready to Foster">Ready to Foster</option>
          <option value="In Foster">In Foster</option>
          <option value="Ready to Adopt">Ready to Adopt</option>
          <option value="Adopted">Adopted</option>
        </select>
        <br></br>
        <br></br>
        <label htmlFor="currentWeightPounds">Current Weight (lbs):</label>
        <input type="number" name="currentWeightPounds" value={formEntries.currentWeightPounds} onChange={(e) => handleChange(e)} required /> <br />
        <label htmlFor="size">Size:</label>
        <select value={formEntries.size} name="size" onChange={(e) => handleChange(e)}>
          <option value="small">Small (less than 10lbs)</option>
          <option value="medium">Medium (between 11lbs and 30lbs)</option>
          <option value="large">Large (Over 30lbs)</option>
        </select>
        <br />
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <DatePicker name="dateOfBirth" selected={formEntries.dateOfBirth} onChange={(date, e) => handleDateChange(date, e)} />
        <br />
        {/* <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={formEntries.name} onChange={(e) => handleChange(e)} /> <br />
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={formEntries.name} onChange={(e) => handleChange(e)} /> <br />
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={formEntries.name} onChange={(e) => handleChange(e)} /> <br />
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={formEntries.name} onChange={(e) => handleChange(e)} /> <br />
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={formEntries.name} onChange={(e) => handleChange(e)} /> <br />
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={formEntries.name} onChange={(e) => handleChange(e)} /> <br />
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={formEntries.name} onChange={(e) => handleChange(e)} /> <br />
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={formEntries.name} onChange={(e) => handleChange(e)} /> <br />
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={formEntries.name} onChange={(e) => handleChange(e)} /> <br />
        <br /> <br /> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
