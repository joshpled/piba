import Dogs from '@/pages/Dogs';
import FormBase from '@/pages/FormBase';
import Home from '@/pages/Home';

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
    path: '/forms/*',
    component: <FormBase />,
  },
];
