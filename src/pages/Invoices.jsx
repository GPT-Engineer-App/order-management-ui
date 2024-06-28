import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const response = await axios.get('/api/invoices/');
      setInvoices(response.data);
    } catch (error) {
      console.error('Error fetching invoices:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/invoices/?search=${search}`);
      setInvoices(response.data);
    } catch (error) {
      console.error('Error searching invoices:', error);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 p-8">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl">Invoice Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <div className="flex flex-col w-full">
                <Label htmlFor="invoice-id">Invoice ID</Label>
                <Input id="invoice-id" placeholder="Enter Invoice ID" value={search} onChange={(e) => setSearch(e.target.value)} />
              </div>
              <div className="flex flex-col w-full">
                <Label htmlFor="customer-name">Customer Name</Label>
                <Input id="customer-name" placeholder="Enter Customer Name" />
              </div>
            </div>
            <Button className="self-end" onClick={handleSearch}>Search</Button>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl">Invoice List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Customer Name</TableHead>
                <TableHead>Invoice Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>{invoice.id}</TableCell>
                  <TableCell>{invoice.customer_name}</TableCell>
                  <TableCell>{invoice.invoice_date}</TableCell>
                  <TableCell>{invoice.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Invoices;