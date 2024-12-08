import { Minus, Plus, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; // Importing Link component
import { Button } from '@/components/ui/button';

// This would typically come from a database or API
const product = {
  name: 'Gradient Graphic T-shirt',
  price: 145,
  rating: 3.5,
  description:
    'This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
  colors: [
    { name: 'Olive', value: '#556B2F' },
    { name: 'Teal', value: '#2F4F4F' },
    { name: 'Navy', value: '#000080' },
  ],
  sizes: ['Small', 'Medium', 'Large', 'X-Large'],
  images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
};

export default function ProductPage() {
  return (
    <main>
      {/* Product Section */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[120px_1fr_1fr]">
        {/* Thumbnails */}
        <div className="order-1 flex flex-row gap-4 lg:flex-col">
          {product.images.map((image, index) => (
            <button
              key={index}
              className="relative aspect-square w-full overflow-hidden rounded-lg border bg-gray-50"
            >
              <Image
                alt={`${product.name} thumbnail ${index + 1}`}
                className="object-cover"
                fill
                src={image}
              />
            </button>
          ))}
        </div>

        {/* Main Image */}
        <div className="order-2 relative aspect-square w-full overflow-hidden rounded-lg bg-gray-50">
          {/* Link added to the first product */}
          <Link href={`/product/gradient-graphic-t-shirt`}>
            <a>
              <Image
                alt={product.name}
                className="object-cover"
                fill
                src={product.images[0]}
              />
            </a>
          </Link>
          <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-lg">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 3h6v6" />
              <path d="M10 14L21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </button>
        </div>

        {/* Product Details */}
        <div className="order-3 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h1 className="text-4xl font-bold uppercase">{product.name}</h1>
              <span className="rounded border px-2 py-1 text-xs uppercase">
                Demo
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-primary text-primary'
                        : 'fill-muted text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">{product.rating}/5</span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-3xl font-bold">${product.price}</p>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
