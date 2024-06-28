import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 p-8">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome to Order Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <Link to="/orders">
              <Button className="self-end">Go to Orders</Button>
            </Link>
            <Link to="/invoices">
              <Button className="self-end">Go to Invoices</Button>
            </Link>
            <Link to="/dashboard">
              <Button className="self-end">Go to Dashboard</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;