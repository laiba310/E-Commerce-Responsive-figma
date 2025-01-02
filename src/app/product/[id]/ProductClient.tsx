"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ToggleLinks from "@/app/ProductDetails/page";

interface Data {
  id: number;
  title: string;
  img: string;
  price: string;
  oldPrice: string;
  discount?: string;
}

export default function ProductClient({ data }: { data: Data }) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1); // State for quantity

  const colors = ["green", "blue", "black"];
  const sizes = ["Small", "Medium", "Large", "X-Large"];

  // Function to handle Add to Cart
  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select a color and size before adding to the cart.");
      return;
    }

    const newItem = {
      id: data.id,
      name: data.title,
      price: parseFloat(data.price.replace("$", "")), // Assuming price is in format $xx.xx
      color: selectedColor,
      size: selectedSize,
      image: data.img,
      quantity: quantity, // Use the updated quantity
    };

    // Add item to cart and store in localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    existingCart.push(newItem);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    alert("Item added to the cart!");
  };

  // Increment and Decrement functions for quantity
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <main className="max-w-8xl mx-auto md:p-4">
      <div className="mt-4 mb-6">
        <a
          href="/casual"
          className="inline-block text-center justify-center px-6 py-3 text-white bg-gray-700 hover:bg-gray-800 rounded-full shadow-md font-medium text-base"
        >
          Go Back
        </a>
      </div>
      <div className="bg-white rounded-lg p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex justify-center">
            <Image
              src={data.img}
              alt={data.title}
              width={400}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h1 className="text-xl lg:text-3xl font-bold text-gray-800">
              {data.title}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-lg font-semibold text-black">{data.price}</span>
              {data.oldPrice && (
                <span className="text-base line-through text-gray-500">
                  {data.oldPrice}
                </span>
              )}
              {data.discount && (
                <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                  {data.discount}
                </span>
              )}
            </div>
            <p className="text-gray-600 mt-4">
              This graphic t-shirt is perfect for any occasion. Crafted from a soft and
              breathable fabric, it offers superior comfort and style.
            </p>
            <div className="mt-6">
              <h3 className="text-gray-700 font-medium mb-2">Select Colors</h3>
              <div className="flex gap-4">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? "border-black" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                  ></button>
                ))}
              </div>
              {selectedColor && (
                <p className="text-sm text-gray-600 mt-2">
                  Selected Color: {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}
                </p>
              )}
            </div>
            <div className="mt-6">
              <h3 className="text-gray-700 font-medium mb-2">Choose Size</h3>
              <div className="flex flex-wrap gap-4">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {selectedSize && (
                <p className="text-sm text-gray-600 mt-2">
                  Selected Size: {selectedSize}
                </p>
              )}
            </div>
            <div className="flex items-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={decrementQuantity}
                  className="px-4 py-2 bg-gray-200 rounded"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="px-4 py-2 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
              <Button
                className="px-6 py-3 rounded-full"
                onClick={handleAddToCart} // Add to Cart button handler
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ToggleLinks />
    </main>
  );
}
