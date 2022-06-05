import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import DogsTable from './pages/DogsTable.jsx';

function NavRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<DogsTable />} />
      </Routes>
    </Router>
  );
}

export default NavRoutes;
