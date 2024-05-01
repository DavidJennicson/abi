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

export function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    // Construct the request body
    const requestBody = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      mobile: mobile,
      address: address,
     
    };
  
    // Convert the requestBody object to a JSON string
    const requestBodyJSON = JSON.stringify(requestBody);
  
    // Make a POST request to the server
    fetch('http://127.0.0.1:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: requestBodyJSON  // Pass the JSON string as the body
    })
    .then(response => {
      if (response.ok) {
        console.log('User created successfully');
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

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleMobileChange = (e) => {
    console.log(e.target.value)
    setMobile(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
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
              <Label htmlFor="first-name">First name</Label>
              <Input
                id="first-name"
                placeholder="Max"
                value={firstName}
                onChange={handleFirstNameChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input
                id="last-name"
                placeholder="Robinson"
                value={lastName}
                onChange={handleLastNameChange}
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
