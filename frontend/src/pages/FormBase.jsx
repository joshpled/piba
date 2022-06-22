//base
import { Routes, Route } from 'react-router-dom';

//local
import { newDogForm } from '../information/forms';
import { newDog } from '@/db/apiMethods';
//components
import FormBuilder from '@/components/Forms/FormBuilder';
import FormIndex from '@/components/Forms/FormIndex';

export default function FormBase() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormIndex />} />
        <Route path="/new_dog" element={<FormBuilder formObj={newDogForm} apiMethod={newDog} />} />
      </Routes>
    </>
  );
}
