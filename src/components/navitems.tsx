import Link from 'next/link';
import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const NavItems = () => {
  return (
    <nav className='flex flex-wrap  gap-4'>
      <div className='flex  flex-col md:flex-row items-center ml-[3rem] md:ml-0 md:gap-5 gap-4'>
        <Link href="/" className="no-underline text-black hover:text-blue-500">
          <DropdownMenu>
            <DropdownMenuTrigger className='flex '>
              shop
              <img src="Frame (4).png" alt="Shop Icon" className='mt-1 ml-1 cursor-pointer' />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Collection</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/contact" className="text-black hover:text-blue-500">Man T-shirt</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/casual" className="text-black hover:text-blue-500">Casual</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/casual" className="text-black hover:text-blue-500">Latest Fashion</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Link>

        <Link href="/casual" className="text-black hover:text-blue-500">Brands</Link>
        <Link href="/casual" className="text-black hover:text-blue-500">On Sale</Link>
        <Link href="/casual" className="text-black hover:text-blue-500">New Arrivals</Link>
      </div>
    </nav>
  );
};

export default NavItems;