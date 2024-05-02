import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import FoodCard from './FoodCard';
import Component from './Component';
import axios from 'axios';
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
import { toast } from "sonner"

export default function FoodSearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [foods, setFoods] = useState([]);
  const [originalFoods, setOriginalFoods] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/product/all');
      setFoods(response.data.products);
      setOriginalFoods(response.data.products); // Save original products for filtering
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const handleAddToCart = async (food) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/cart/add', {
        customerId: localStorage.getItem('userId'), // Replace with actual customer ID
        restaurantId: food.restaurantId, // Assuming each food item has a restaurantId property
        productId: food.id, // Assuming each food item has an id property
        quantity: 1, // Assuming you always add one quantity for now
        // Include any other details from the food object that you need in the cart
        productName: food.productName,
        price: food.price,
       
      });
      toast.success(response.data.message);
    } catch (error) {
      toast.error('Failed to add item to cart');
      console.error('Error adding item to cart:', error);
    }
  };
  
  const handleSearch = () => {
    // Filter originalFoods based on searchQuery in food name or restaurant
    const filteredFoods = originalFoods.filter(food =>
      food.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.restaurantName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFoods(filteredFoods);
  };

  return (
    <>
      <Component />
      <div className="overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="relative mx-auto max-w-4xl grid space-y-2 sm:space-y-10">
            {/* Title */}
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                Find Your Favorite Food
              </h1>
            </div>
            {/* End Title */}
            {/* Search Form */}
            <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
              <div className="mx-auto max-w-2xl sm:flex sm:space-x-3 p-3 border rounded-lg shadow-lg shadow-primary-foreground ">
                <div className="pb-2 sm:pb-0 sm:flex-[1_0_0%]">
                  <Label htmlFor="search">
                    <span className="sr-only">Search for food</span>
                  </Label>
                  <Input
                    type="text"
                    id="search"
                    placeholder="Search for food"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="pt-2 sm:pt-0 grid sm:block sm:flex-[0_0_auto]">
                  <Button onClick={handleSearch} type="submit">Search</Button>
                </div>
              </div>
            </form>
            
            {/* End Search Form */}
          </div>
          {/* Food Cards */}
          <div className="grid grid-cols-4 gap-4 justify-center">
            {foods.map((food) => (
               <Card key={food.id} className="p-1">
               <img src={`data:image/png;base64,${food.image}`} alt={name} className="h-60 w-full rounded-md" /> {/* Image comes first */}
               <CardHeader>
                 <CardTitle>{food.productName}</CardTitle>
                 <CardDescription>{food.restaurantName}</CardDescription>
               </CardHeader>
               <CardContent>
                 <p >{`Price: $${food.price}`}</p>
                 <Ratings rating={5} />
               </CardContent>
               <CardFooter >
                 <Button  className="w-full" >Add to Cart</Button>
                 
                 {/* You can add any additional footer content here */}
               </CardFooter>
             </Card>
            ))}
          </div>
          {/* End Food Cards */}
        </div>
      </div>
    </>
  );
}
