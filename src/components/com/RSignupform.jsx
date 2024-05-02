import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from 'react-router-dom';
export function RSignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resName, setresName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  const handleSubmit = () => {
    // Construct the request body
    const requestBody = {
      email: email,
      password: password,
     name:resName,
      mobile: mobile,
      address: address,
    };
  
    // Convert the requestBody object to a JSON string
    const requestBodyJSON = JSON.stringify(requestBody);
  
    // Make a POST request to the server
    fetch('http://127.0.0.1:5000/restaurant/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: requestBodyJSON  // Pass the JSON string as the body
    })
    .then(response => {
      if (response.ok) {
        console.log('Restaurant created successfully');
        navigate('/resdash');
        // Add further logic for successful form submission if needed
      } else {
        console.error('Failed to create user');
        // Add further logic for failed form submission if needed
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // Add further error handling logic if needed
    });
  };
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleresNameChange = (e) => {
    setresName(e.target.value);
  };

  const handleMobileChange = (e) => {
    
    setMobile(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl"> Restaurant Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="res-name">  Restaurant name</Label>
              <Input
                id="name"
                placeholder="Name"
                value={resName}
                onChange={handleresNameChange}
                required
              />
            </div>
           
        
            <div className="grid gap-2">
              <Label htmlFor="mobile">Mobile number</Label>
              <Input
                id="mobile"
                type="tel"
                placeholder="123-456-7890"
                value={mobile}
                onChange={handleMobileChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="123 Main St"
                value={address}
                onChange={handleAddressChange}
                required
              />
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <Button onClick={handleSubmit}>Create an account</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
