
import React from 'react';
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  MoreVertical,
  Truck,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import Component from './Component';
import { Progress } from '../ui/progress';

export default function CombinedComponent() {
  return (
    <>
    <Component/>
    <div className="p-8 grid grid-cols-1 gap-4">
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>Total Orders</CardDescription>
        <CardTitle className="text-4xl">5</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">Recent Orders: 2</div>
        <div className="text-xs text-muted-foreground">Order Status: Arriving</div>
      </CardContent>
      <CardFooter>
        <Progress value={75} aria-label="75% complete" />
      </CardFooter>
    </Card>
    </div>
    <div className="p-8 grid grid-cols-2 gap-6">
      {/* Recent Orders */}
      <Card>
        <CardHeader className="px-7">
          <CardTitle>Orders</CardTitle>
          <CardDescription>Recent orders from your store.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            {/* Table Headers */}
            <TableHeader>
              <TableRow>
                <TableHead>Food Item</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
              </TableRow>
            </TableHeader>
            {/* Table Body */}
            <TableBody>
              {/* Table Rows */}
              <TableRow className="bg-accent">
                <TableCell>
                  {/* Food Item Info */}
                  <div className="font-medium">Pizza</div>
                </TableCell>
                <TableCell>$10</TableCell>
                <TableCell>2</TableCell>
              </TableRow>
              {/* Other rows */}
              {/* ... */}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {/* Order Details */}
      <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            Order Oe31b70H
            <Button
              size="icon"
              variant="outline"
              className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
            >
              <Copy className="h-3 w-3" />
              <span className="sr-only">Copy Order ID</span>
            </Button>
          </CardTitle>
          <CardDescription>Date: November 23, 2023</CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <Truck className="h-3.5 w-3.5" />
            <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
              Track Order
            </span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline" className="h-8 w-8">
                <MoreVertical className="h-3.5 w-3.5" />
                <span className="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Export</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Trash</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-6 text-sm">
        <div className="grid gap-3">
          <div className="font-semibold">Order Details</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">
                Pizza x <span>1</span>
              </span>
              <span>$15.00</span>
            </li>
            {/* You can add more items if needed */}
          </ul>
          <Separator className="my-2" />
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>$15.00</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Tax</span>
              <span>$25.00</span>
            </li>
            <li className="flex items-center justify-between font-semibold">
              <span className="text-muted-foreground">Total</span>
              <span>$329.00</span>
            </li>
            {/* You can add shipping, tax, and total if applicable */}
          </ul>
        </div>
        {/* You can keep the rest of the content as it is */}
      </CardContent>
      <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
          Updated <time dateTime="2023-11-23">November 23, 2023</time>
        </div>
        <Pagination className="ml-auto mr-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <Button size="icon" variant="outline" className="h-6 w-6">
                <ChevronLeft className="h-3.5 w-3.5" />
                <span className="sr-only">Previous Order</span>
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button size="icon" variant="outline" className="h-6 w-6">
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="sr-only">Next Order</span>
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
    </div>
    </>
  );
}
