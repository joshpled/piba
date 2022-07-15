//system
import { useMemo } from 'react';
//npm packages
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
//redux/state imports
import { useGetDogsQuery, useDeleteDogMutation } from '@/store/apiSlice';
//local imports
//components
import DeleteDog from './DeleteDog';

//Dogs Table Component
export default function DogsTable() {
  //API Redux Calls
  const { data: dogs, isLoading, isSuccess, isError, error } = useGetDogsQuery();
  const [removeDog, results] = useDeleteDogMutation();
  //toasts
  const success = () => toast('Deleted!');

  //GET Dogs from Database
  const dogData = useMemo(() => {
    return dogs;
  }, [dogs]);
  //DELETE Dogs from Database
  const deleteDog = (id) => {
    return removeDog(id).then(() => success());
  };
  //Table Content
  const displayContent = () => {
    if (dogData) {
      return dogData.map((dog) => {
        return (
          <tr key={nanoid()}>
            <td>{dog.name}</td>
            <td>{dog.breed}</td>
            <td>
              <DeleteDog deleteDog={() => deleteDog(dog.name, dog._id)} />
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <>
      {isLoading && <h1>LOADING</h1>}
      <table id="customers">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Breed</th>
            <th>Delete?</th>
          </tr>
          {displayContent()}
        </tbody>
      </table>
      <ToastContainer />
    </>
  );
}
