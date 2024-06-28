import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 p-8">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl">Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Total Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>100</p>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Total Invoices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>50</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex space-x-4">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Pending Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>20</p>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Pending Invoices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>10</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;