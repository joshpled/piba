import Home from './pages/Home.jsx';
import { Routes, Route, Switch } from 'react-router-dom';
function NavRoutes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />;
    </Switch>
  );
}

export default NavRoutes;
