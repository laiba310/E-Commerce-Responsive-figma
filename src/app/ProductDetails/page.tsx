"use client";
import { useState } from "react";
import Link from "next/link";
import Rewies from "@/components/rewies";
import FaqItem from "@/app/faq/page"

// ProductSpecifications Component
function ProductSpecifications() {
  const specifications = [
    { label: "Material composition", value: "100% Cotton" },
    { label: "Care instructions", value: "Machine wash warm, tumble dry" },
    { label: "Fit type", value: "Classic Fit" },
    { label: "Pattern", value: "Solid" },
  ];

  return (
    <div className="mt-8 px-4 lg:px-16">
      <h2 className="text-2xl font-bold mb-6">Product Specifications</h2>
      <div className="grid grid-cols-1 gap-y-4 border-t">
        {specifications.map((spec, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-4 border-b last:border-none"
          >
            <div>
              <span className="text-gray-500 font-medium">{spec.label}</span>
            </div>
            <div>
              <span className="text-black font-semibold">{spec.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ProductReview Component
function ProductReview() {
  const review = [
    <Rewies key="review" />,
  ];

  return <div>{review}</div>;
}

// proFaq Component
function ProFaq() {
  const faq = [
    <FaqItem key="faqItem" />,
  ];

  return <div>{faq}</div>;
}

// ToggleLinks Component
export default function ToggleLinks() {
  const [activeLink, setActiveLink] = useState<number>(0); // Default to Product Details tab

  const handleToggle = (index: number) => {
    setActiveLink(activeLink === index ? -1 : index); // -1 to close the tab if clicked again
  };

  const tabs = [
    {
      title: "Product Details",
      content: <ProductSpecifications />, // Show product specs here
    },
    {
      title: "Rating & Reviews",
      content: <ProductReview />, // Add the ProductReview component here
    },
    {
      title: "FAQs",
      content: <ProFaq />, // Use the ProFaq component here
    },
  ];

  return (
    <div className="mt-[3rem] md:text-2xl lg:ml-[10rem] lg:mr-[11rem] md:ml-0 md:mr-0">
      <div className="flex justify-between border-b">
        {tabs.map((item, index) => (
          <div key={index} className="mb-4">
            <Link
              href="#"
              onClick={() => handleToggle(index)} // Toggle tab on click
              className={`text-black hover:text-blue-500 px-4 block ${
                activeLink === index ? "border-b-2 border-black" : ""
              }`}
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 text-gray-600 text-base rounded">
        {/* Render content for active tab */}
        {activeLink !== -1 && tabs[activeLink].content} {/* Only render content if active tab is selected */}
      </div>
    </div>
  );
}
