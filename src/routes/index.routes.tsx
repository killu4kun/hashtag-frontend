import AdminControl from '@/pages/Admin';
import Login from '@/pages/Login';
import { BrowserRouter, Route, Routes as Router } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminControl />} />
      </Router>
    </BrowserRouter>
  );
}

export default Routes;
