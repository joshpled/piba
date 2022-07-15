//npm imports
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
// import reactRouterToArray from 'react-router-to-array';
//import locals
import { routesDefinitions } from '@/routes/routesDefinitions';

function NavRoutes() {
  const routeMapping = () => {
    return routesDefinitions.map(({ path, component }) => <Route path={path} element={component} key={nanoid()} />);
  };
  // console.log(
  //   reactRouterToArray(
  //     <Router>
  //       <nav>
  //         <Link to="/dogs">Dogs</Link> | <Link to="/forms">Forms</Link> | <Link to="/">Home</Link>
  //       </nav>
  //       <Routes>{routeMapping()}</Routes>
  //     </Router>
  //   )
  // );
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
