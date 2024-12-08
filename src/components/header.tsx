"use client";

import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  


const Header = () => {
    return (
        <>

<div className="bg-black w-80% h-[48px] flex flex-wrap lg:items-center px-4">
  <p className="text-white text-sm lg:ml-[30rem]">
  Sign up and get 20% off to your first order.
  </p>
  <a href="/" className="text-white underline text-sm ml-0">Shop Now</a>

 
    <p className="text-white lg:ml-[19rem] hidden" >
        x
    </p>
  </div>
<nav className='flex flex-wrap ml-8 mt-8 '>
    <h1 className='font-extrabold  font-integral text-4xl ml-[6rem] mr-[2rem] '>SHOP.CO</h1>
<div className='flex flex-wrap gap-4 mt-2'>
<Link href="/" className="no-underline text-black hover:text-blue-500">
<DropdownMenu>
  <DropdownMenuTrigger className='flex'>shop
    <img src="Frame (4).png" alt=""  className='mt-1 ml-1 cursor-pointer '/>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Collection</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem> <Link href="/contact" className="text-black hover:text-blue-500">
    Man T-shirt
  </Link></DropdownMenuItem>
    <DropdownMenuItem><Link href="/casual" className="text-black hover:text-blue-500">
 casual
  </Link></DropdownMenuItem>
    <DropdownMenuItem><Link href="/casual" className="text-black hover:text-blue-500">
    Latest Fashion
  </Link></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
  </Link>


  <Link href="/casual" className="text-black hover:text-blue-500">
  On Sale
  </Link>
  <Link href="/cart" className="text-black hover:text-blue-500">
New Arrivals
</Link>

  
  <Link href="/Login" className="text-black hover:text-blue-500">
  Brands
  </Link> </div>
  <div className="flex items-center bg-gray-100 border border-gray-300 rounded-[100px] px-2 ml-[2rem]">
  <button className="">
    <img src="Frame (7).png" alt="Component 2.png" />
  </button>
  <input
    type="text"
    placeholder="What are you looking for?"
    className=" palce  sm:hidden flex-1 bg-transparent w-[577px] h-[38px] text-gray-600 placeholder-gray-500 outline-none xsm:hidden md:block lg:block"
  />
</div>


 <a href="/cart" className="mr-3 mt-2 ml-3">
  <img src="Frame (8).png" alt="Wishlist" />
</a>

  <button className="">
<img src="Frame (9).png" alt="Cart1 with buy (1).png" />
  </button>

</nav>

<div className='h-[1px] w-[100%] bg-gray-300 mt-3'></div>


        </>
    );
}

export default Header;