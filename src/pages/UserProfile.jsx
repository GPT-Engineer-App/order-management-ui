import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UserProfile = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 p-8">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl">User Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <p>Username: johndoe</p>
            <p>Email: johndoe@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 5678 User St, User City, US 67890</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;