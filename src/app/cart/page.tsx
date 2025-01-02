"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from 'next/image';
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [promoCode, setPromoCode] = useState("");

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const handleQuantityChange = (id: number, increment: boolean) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: increment
                ? item.quantity + 1
                : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = 0; // Adjust based on promo code logic
  const deliveryFee = 0; // Free delivery as per image
  const total = subtotal - discount + deliveryFee;

  return (
    <>
      <Header />
      {/* Breadcrumb */}
      <div className="flex gap-2 py-4 px-4 md:py-7 md:px-9 text-sm md:text-md text-gray-500">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span>/</span>
        <span>Cart</span>
      </div>

      <main className="px-4 py-8">
      <div className=" w-full p-3.5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10">
  {cart.map((item) => (
    <div key={item.id} className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 border-b pb-4">
      <div className="flex items-start gap-4 w-full">
        <img
          src={item.image}
          alt={item.name}
          className="bg-[#F0EEED] rounded-lg w-full min-w-[100px] max-w-[100px] sm:max-w-[124px] aspect-square overflow-hidden"
        />

        <div className="flex-1">
          <h3 className="flex items-center justify-between font-medium text-lg">{item.name}</h3>
          <p className="text-gray-500 text-sm">Color: {item.color}</p>
          <p className="text-gray-500 text-sm">Size: {item.size}</p>
          <div className="text-gray-700 font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full md:w-auto md:flex-1 mt-4 md:mt-0">
        <div className="flex items-center border px-4 py-2 rounded-full bg-gray-50">
          <Button
            onClick={() => handleQuantityChange(item.id, false)}
            className="bg-transparent px-2 py-1 text-gray-700 hover:bg-gray-100 transition"
          >
            -
          </Button>
          <span className="px-3">{item.quantity}</span>
          <Button
            onClick={() => handleQuantityChange(item.id, true)}
            className="bg-transparent px-2 py-1 text-gray-700 hover:bg-gray-100 transition"
          >
            +
          </Button>
        </div>
        <Button
          onClick={() => handleRemoveItem(item.id)}
          className="bg-transparent text-red-500 hover:text-red-600 hover:underline px-2 py-1 ml-4"
        >
        <Trash2 className="h-[4rem] w-14" />
        </Button>
      </div>
    </div>
  ))}
</div>

    {/* Order Summary */}
    <div className="w-full md:w-1/3 mt-8 md:mt-0 bg-white shadow-sm rounded-lg p-4">
      <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span>-${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="mt-4">
          <Input
            placeholder="Add promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="w-full"
          />
          <Button className="w-full mt-2 bg-black text-white py-3 rounded-full">
            Apply
          </Button>
        </div>
        <Button className="w-full bg-black text-white py-3 rounded-full mt-4">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  
</main>

      <Footer />
    </>
  );
}
