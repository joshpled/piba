import { useMemo } from 'react';
import axios from 'axios';

export default function DogsTableComponent() {
  let data = [];

  axios.get('http://localhost:8000/api/dogs').then((x) => console.log(x));

  return (
    <table id="customers">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {data.map((dog) => {
          return (
            <tr>
              <td>dog.name</td>
              <td>dog.age</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
