import { useEffect, useState } from 'react';
import axios from 'axios';
import { genKey } from '@/helpers/calculations';
import DeleteDog from './DeleteDog';

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

  const deleteDog = (id) => {
    axios.delete(`http://localhost:8000/api/dogs/${id}`).then((res) => console.log(res));
  };

  const renderDogs = () => {
    return dogData.map((dog) => {
      return (
        <tr key={genKey}>
          <td>{dog.name}</td>
          <td>{dog.breed}</td>
          <td>
            <DeleteDog deleteDog={() => deleteDog(dog._id)} />
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <table id="customers">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Breed</th>
            <th>Delete?</th>
          </tr>
          {renderDogs()}
        </tbody>
      </table>
    </>
  );
}
