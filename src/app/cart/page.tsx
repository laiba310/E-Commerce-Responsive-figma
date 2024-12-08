import { Minus, Plus, Trash2 } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Header from '@/components/header'
import Mail from '@/components/mail'
import Footer from '@/components/footer'

export default function CartPage() {
    return (
      <>
        <Header />
  
        <main className="flex-1 px-4 py-8 bg-gray-100">
          <div className="mx-auto max-w-7xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Cart</span>
            </div>
  
            {/* Heading */}
            <h1 className="mt-8 text-4xl font-bold">YOUR CART</h1>
  
            {/* Main Grid */}
            <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
              {/* Cart Items */}
              <div className="space-y-6">
                {[
                  {
                    name: "Gradient Graphic T-shirt",
                    price: 145,
                    size: "Large",
                    color: "White",
                    image:  "/image 8.png",
                  },
                  {
                    name: "Checkered Shirt",
                    price: 180,
                    size: "Medium",
                    color: "Red",
                    image:"/Frame 33 (3).png"
                  },
                  {
                    name: "Skinny Fit Jeans",
                    price: 240,
                    size: "Large",
                    color: "Blue",
                    image: "/Frame 33 (4).png",
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start justify-between gap-6 rounded-lg border bg-white p-4 shadow-sm"
                  >
                    <div className="flex gap-4">
                      <Image
                        alt={item.name}
                        className="h-24 w-24 rounded-md object-cover"
                        height={96}
                        src={item.image}
                        width={96}
                      />
                      <div className="space-y-1">
                        <h3 className="text-lg font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-500">Size: {item.size}</p>
                        <p className="text-sm text-gray-500">Color: {item.color}</p>
                        <p className="text-lg font-semibold">${item.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="icon" variant="outline">
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">1</span>
                      <Button size="icon" variant="outline">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
  
              {/* Order Summary */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold">Order Summary</h2>
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">$565</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Discount (-20%)</span>
                    <span className="font-medium text-red-600">-$113</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-medium">$15</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>$467</span>
                  </div>
                </div>
                <div className="mt-6 flex gap-2">
                  <Input className="flex-1" placeholder="Add promo code" />
                  <Button variant="outline" className='bg-black text-white'>Apply</Button>
                </div>
                <Button className="mt-4 w-full bg-black text-white" size="lg">
                  Go to Checkout
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Mail />
 <Footer />

      </>
    );
  }
  
     