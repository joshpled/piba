import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from '@/pages/Home.jsx';
import Dogs from '@/pages/Dogs.jsx';
import FormBase from '@/pages/FormBase.jsx';

function NavRoutes() {
  return (
    <>
      <Router>
        <nav>
          <Link to="/dogs">Dogs</Link> | <Link to="/forms">Forms</Link> | <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/forms/*" element={<FormBase />} />
        </Routes>
      </Router>
    </>
  );
}

export default NavRoutes;
