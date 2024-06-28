import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Total Orders', value: 100 },
  { name: 'Total Invoices', value: 50 },
  { name: 'Pending Orders', value: 20 },
  { name: 'Pending Invoices', value: 10 },
];

const lineData = [
  { name: 'Jan', orders: 30, invoices: 20 },
  { name: 'Feb', orders: 20, invoices: 30 },
  { name: 'Mar', orders: 50, invoices: 40 },
  { name: 'Apr', orders: 70, invoices: 60 },
  { name: 'May', orders: 90, invoices: 80 },
];

const pieData = [
  { name: 'Completed Orders', value: 80 },
  { name: 'Pending Orders', value: 20 },
];

const COLORS = ['#0088FE', '#FFBB28'];

const Dashboard = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 p-8 bg-gradient-to-r from-purple-200 via-pink-200 to-red-200">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl">Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl">Report Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="orders" stroke="#8884d8" />
                <Line type="monotone" dataKey="invoices" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;