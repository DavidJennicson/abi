  import { Button } from "@/components/ui/button"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import React, { useState } from 'react';
  export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
      // Construct the request body
      const requestBody = {
        email: email,
        password: password,
      };
    
      // Convert the requestBody object to a JSON string
      const requestBodyJSON = JSON.stringify(requestBody);
    
      // Make a POST request to the server
      fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: requestBodyJSON  // Pass the JSON string as the body
      })
      .then(response => {
        if (response.ok) {
          // Parse response JSON
          return response.json();
        } else {
          console.error('Failed to login');
          // Add further logic for failed login if needed
        }
      })
      .then(data => {
        // Log token, user ID, and role
        console.log('Token:', data.token);
        console.log('User ID:', data.id);
     
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.id);
        // Add further logic for successful login if needed
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
    return (
      <div className="flex items-center justify-center h-screen">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email"  value={email}
                  onChange={handleEmailChange} placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password"  type="password" value={password}
                  onChange={handlePasswordChange} required />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full"  onClick={handleSubmit}>Sign in</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }
