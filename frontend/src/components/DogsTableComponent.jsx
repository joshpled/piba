import { useMemo } from 'react';
import axios from 'axios';

export default function DogsTableComponent() {
  const data = [];

  axios.get('http://localhost:8000/api/dogs').then((x) => console.log(x.data));

  return (
    <table id="customers">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Roxy</td>
          <td>32</td>
        </tr>
      </tbody>
    </table>
  );
}
