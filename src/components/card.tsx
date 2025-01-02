"use client";

import Image from "next/image";
import Link from "next/link";
import { carData } from "@/data/content";

export function CardDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  w-full max-w-[1000px]  gap-9 p-6 mx-auto ">
      {carData.map((item) => {
        return (
          <div
            key={item.id} // <-- key prop is here
            className="flex flex-col rounded-lg p-4 "
          >
            <div className="relative group">
             
                <Image
                  height={200}
                  width={800}
                  alt="Avatar"
                  src={item.img}
                  className="w-full h-auto rounded-m cursor-pointer transform group-hover:scale-110 transition duration-300"
                />
              
              <div className="text-content mt-4">
              <h3 className="mt-4 font-bold text-gray-800">{item.title}</h3>
              <div className="mt-2 flex gap-2 text-black font-semibold">
                    {item.price}{" "}
                    {item.oldPrice && (
                      <span className="line-through text-gray-500">{item.oldPrice}</span>
                    )}
                    {item.discount && (
                      <div className="bg-red-400 w-[58px] h-[28px] rounded-[25px] text-center">
                        {item.discount}
                      </div>
                    )}
                  </div>
                <Link href={`/product/${item.id}`}>
                  <button className="px-4 py-2 mt-4 bg-gray-200 hover:bg-gray-500 text-gray-700 rounded-lg shadow-sm font-medium text-base transition duration-200 ease-in-out">
                 View Details...............
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
