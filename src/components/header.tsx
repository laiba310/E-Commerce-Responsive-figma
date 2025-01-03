'use client';

import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import NavItems from './navitems';
import MobileNav from './MobileNav';

const Header = () => {
    return (
        <>
            {/* Promo Bar */}
            <div className="bg-black w-full h-[48px] flex items-center justify-between px-4 text-white">
                <p className="text-sm">
                    Sign up and get 20% off your first order.
                </p>
                <a href="/" className="text-white underline text-sm">Shop Now</a>
            </div>

            <div className='flex justify-between mr[6rem] mt-[1rem] '>
              
            {/* Mobile Navigation */}
            <div className="md:hidden">
                <MobileNav />
            </div>
            <Link href="/"> <h1 className="font-bold text-2xl  md:text-3xl mt-2 lg:text-4xl md:ml-[6rem] ">SHOP.CO </h1></Link>
           
            {/* Main Navigation */}
            <nav className="hidden md:flex justify-between items-center px-4 py-4">
                <NavItems />
                </nav>
                {/* Search Bar */}

              <div className='flex gap-2  mr[3rem] '>
                <div className="flex items-center  rounded-[100px] px-2 ml-[2rem]">
  <button className="">
    <img src="Frame (7).png" alt="Component 2.png" />
  </button>
 
</div>

                {/* Wishlist and Cart */}
                <div className="flex items-center gap-3">
                    <a href="/cart">
                        <img src="Frame (8).png" alt="Wishlist" />
                    </a>
                    <button>
                        <img src="Frame (9).png" alt="Cart" />
                    </button>
                </div>
              </div>
              </div>
            {/* Divider */}
            <div className="h-[1px] w-full bg-gray-300 mt-3"></div>  
        </>
    );
}

export default Header;
