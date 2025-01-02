 import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { carData } from '../../data/content';
import { CardDemo } from "@/components/card";


const Casual = () => {
  return (
    <>
      <Header />
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="mt-2 md:mt-8 text-4xl font-extrabold">Casual</h1>
          </div>
          <div className="flex flex-wrap mt-3 mr-[5rem]">
            <p className="text-end text-sm text-gray-500">
              Showing 1-{carData.length} of {carData.length} Products
            </p>
            <select>
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
        <CardDemo />
      
        {/* Pagination */}
        <div className="flex items-center justify-center gap-0 md:gap-3">
          <button className="border px-3 py-2 rounded-md">Previous</button>
          <button className="border px-3 py-2 rounded-md">1</button>
          <button className="border px-3 py-2 rounded-md">2</button>
          <span>...</span>
          <button className="border px-3 py-2 rounded-md">10</button>
          <button className="border px-3 py-2 rounded-md">Next</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Casual;
