import { useEffect, useState } from 'react';
import axios from 'axios';
import { genKey } from '@/helpers/calculations';

export default function DogsTableComponent() {
  const [dogData, setDogData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/dogs')
      .then(({ data }) => {
        setDogData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const renderDogs = () => {
    return dogData.map((dog) => {
      return (
        <tr key={genKey}>
          <td>{dog.name}</td>
          <td>{dog.breed}</td>
        </tr>
      );
    });
  };

  return (
    <table id="customers">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Breed</th>
        </tr>
        {renderDogs()}
      </tbody>
    </table>
  );
}
