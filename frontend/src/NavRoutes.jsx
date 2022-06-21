//npm imports
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
//import locals
import { routesDefinitions } from '@/routes/routesDefinitions';

function NavRoutes() {
  const routeMapping = () => {
    return routesDefinitions.map(({ path, component }) => <Route path={path} element={component} key={nanoid()} />);
  };
  return (
    <>
      <Router>
        <nav>
          <Link to="/dogs">Dogs</Link> | <Link to="/forms">Forms</Link> | <Link to="/">Home</Link>
        </nav>
        <Routes>{routeMapping()}</Routes>
      </Router>
    </>
  );
}

export default NavRoutes;
