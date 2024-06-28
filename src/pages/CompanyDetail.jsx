import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CompanyDetail = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 p-8">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl">Company Detail</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <p>Company Name: Example Corp</p>
            <p>Address: 1234 Example St, Example City, EX 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@example.com</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyDetail;