import Dogs from '@/pages/Dogs';
import Home from '@/pages/Home';
import NewDogForm from '@/components/Forms/NewDogForm';

export const routesDefinitions = [
  {
    path: '/',
    component: <Home />,
  },
  {
    path: '/dogs',
    component: <Dogs />,
  },
  {
    path: '/forms',
    component: <NewDogForm />,
  },
];
