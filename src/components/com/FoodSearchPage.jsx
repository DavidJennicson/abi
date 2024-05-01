import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import foodData from './foodData.json';
import FoodCard from './FoodCard';

export default function FoodSearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [foods, setFoods] = useState([]);
  const [originalFoods, setOriginalFoods] = useState([]);

  useEffect(() => {
    // Set initial foods state
    setFoods(foodData);
    setOriginalFoods(foodData);
  }, []);
  const handleSearch = () => {
    
    // Filter originalFoods based on searchQuery in food name or restaurant
    const filteredFoods = originalFoods.filter(food =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.restaurant.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFoods(filteredFoods);
  };
  

  return (
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
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
        {/* End Food Cards */}
      </div>
    </div>
  );
}
