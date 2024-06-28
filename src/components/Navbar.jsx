import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Order Management</div>
        <div className="space-x-4">
          <Link to="/">
            <Button variant="outline" className="text-white bg-blue-500 hover:bg-blue-700">Home</Button>
          </Link>
          <Link to="/orders">
            <Button variant="outline" className="text-white bg-green-500 hover:bg-green-700">Orders</Button>
          </Link>
          <Link to="/invoices">
            <Button variant="outline" className="text-white bg-yellow-500 hover:bg-yellow-700">Invoices</Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="outline" className="text-white bg-purple-500 hover:bg-purple-700">Dashboard</Button>
          </Link>
          <Link to="/company-detail">
            <Button variant="outline" className="text-white bg-pink-500 hover:bg-pink-700">Company Detail</Button>
          </Link>
          <Link to="/user-profile">
            <Button variant="outline" className="text-white bg-red-500 hover:bg-red-700">User Profile</Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" className="text-white bg-gray-500 hover:bg-gray-700">Options</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/help">Help</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/logout">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;