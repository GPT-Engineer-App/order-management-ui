import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Order Management</div>
        <div className="space-x-4">
          <Link to="/">
            <Button variant="outline" className="text-white">Home</Button>
          </Link>
          <Link to="/orders">
            <Button variant="outline" className="text-white">Orders</Button>
          </Link>
          <Link to="/invoices">
            <Button variant="outline" className="text-white">Invoices</Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="outline" className="text-white">Dashboard</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;