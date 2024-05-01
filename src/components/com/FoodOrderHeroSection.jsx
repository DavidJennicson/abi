import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import cover from '../../assets/cover.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Component from "./Component";

// Image Carousel component
function ImageCarouselOnRight() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="w-full">
                <CardContent className="flex aspect-square items-center justify-center">
                 <img className="w-full h-full" src="https://www.caterninja.com/frontend/web/images/app_img/no-image.jpg" alt="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

// Food Order Hero Section component
export default function FoodOrderHeroSection() {
  return (
    <>
    <Component/>
      {/* Hero */}
      <div className="container py-24 lg:py-32">
        {/* Grid */}
        <div className="grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          {/* Text content */}
          <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Crave. Order. Enjoy.
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Explore a world of flavors at your fingertips.
            </p>
            <div className="mt-5 lg:mt-8 flex flex-col sm:items-center gap-2 sm:flex-row sm:gap-3">
              <div className="w-full max-w-lg lg:w-auto">
                <Label className="sr-only">Search</Label>
                <Input placeholder="Enter your location" type="text" />
              </div>
              <Button className="w-min">Find Food</Button>
            </div>
            {/* Partners */}
            <div className="mt-6 lg:mt-12">
              <span className="text-xs font-medium uppercase">Partners:</span>
              <div className="mt-4 flex gap-x-8">
                {/* Partner logos go here */}
              </div>
            </div>
          </div>
          {/* Image Carousel */}
          <div>
          <img className="w-full h-full" src={cover} alt="" />
          </div>
        </div>
      </div>

    </>
  );
}
