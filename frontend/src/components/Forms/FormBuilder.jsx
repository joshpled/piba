//system
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//npm packages
import DatePicker from 'react-datepicker';
//local imports

//New Dog Form Component
export default function FormBuilder(formObj, apiMethod) {
  //router navigate
  let navigate = useNavigate();
  //state
  const [formEntries, setFormEntries] = useState(newDogForm.state);
  //POST Create New Dog
  const handleSubmit = (e) => {
    e.preventDefault();
    const dogObj = newDog(formEntries);
    debugger;
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
        <label htmlFor="breed">Breed:</label>
        <input type="text" name="breed" value={formEntries.breed} onChange={(e) => handleChange(e)} /> <br />
        <label htmlFor="color">Color:</label>
        <input type="text" name="color" value={formEntries.color} onChange={(e) => handleChange(e)} /> <br />
        <label htmlFor="pattern">Pattern:</label>
        <input type="text" name="pattern" value={formEntries.pattern} onChange={(e) => handleChange(e)} /> <br />
        <label htmlFor="adoptionFeeGroup">Adoption Fee Group:</label>
        <input type="text" name="adoptionFeeGroup" value={formEntries.adoptionFeeGroup} onChange={(e) => handleChange(e)} /> <br />
        <label htmlFor="description">Description:</label>
        <textarea rows="4" cols="50" name="description" value={formEntries.description} onChange={(e) => handleChange(e)} /> <br />
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
