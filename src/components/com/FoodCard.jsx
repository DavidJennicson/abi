import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Ratings } from './Ratings'; // Assuming you have a Ratings component
import { Button } from '../ui/button';

const FoodCard = ({ food }) => {
  return (
    <Card className="p-1">
      <img src={food.image} alt={name} className="h-60 w-full rounded-md" /> {/* Image comes first */}
      <CardHeader>
        <CardTitle>{food.name}</CardTitle>
        <CardDescription>{food.restaurant}</CardDescription>
      </CardHeader>
      <CardContent>
        <p >{`Price: $${food.price}`}</p>
        <Ratings rating={food.rating} />
      </CardContent>
      <CardFooter >
        <Button className="w-full" >Add to Cart</Button>
        
        {/* You can add any additional footer content here */}
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
