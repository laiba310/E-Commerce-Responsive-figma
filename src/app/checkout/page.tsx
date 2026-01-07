"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { useState } from "react";

const ShippingCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    countryCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Shipping Data Submitted:", formData);
    // Perform any API call or further processing here
  };

  return (
    <main>
    <Header />
    <div className="min-h-screen py-12 px-6 md:mt-[7rem]">
      <div className="max-w-5xl mx-auto bg-white shadow-slate-950 shadow-xl rounded-lg p-8">
        <h1 className="text-c4xl font-bold text-[#252B42] text-center mb-8">
          Shipping Rates Calculator
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              name="name"
              placeholder="Name"
              className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-indigo-400"
              required
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              name="phone"
              placeholder="Phone"
              className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-indigo-400"
              required
              type="text"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              name="addressLine1"
              placeholder="Address Line1"
              className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-indigo-400"
              required
              type="text"
              value={formData.addressLine1}
              onChange={handleChange}
            />
             <input
              name="addressLine2"
              placeholder="Address Line1"
              className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-indigo-400"
              required
              type="text"
              value={formData.addressLine1}
              onChange={handleChange}
            />
            <input
              name="city"
              placeholder="City Locality"
              className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-indigo-400"
              required
              type="text"
              value={formData.city}
              onChange={handleChange}
            />
            <input
              name="state"
              placeholder="State Province"
              className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-indigo-400"
              required
              type="text"
              value={formData.state}
              onChange={handleChange}
            />
            <input
              name="postalCode"
              placeholder="Postal Code"
              className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-indigo-400"
              required
              type="text"
              value={formData.postalCode}
              onChange={handleChange}
            />
            <input
              name="countryCode"
              placeholder="Country Code (e.g., US)"
              className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-indigo-400"
              required
              type="text"
              value={formData.countryCode}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded-md shadow-lg hover:bg-gray-700 disabled:bg-gray-600"
          >
            Get Shipping Rates
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </main>
  );
};

export default ShippingCalculator;
