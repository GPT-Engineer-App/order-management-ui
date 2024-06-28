import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Invoices from './pages/Invoices.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Navbar from './components/Navbar';
import Orders from './pages/Orders.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
}

export default App;