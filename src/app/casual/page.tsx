import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

const products = [
  {
    image: "Frame 33 (2).png",
    title: "Gradient Graphic T-shirt",
    price: "$145",
    oldPrice: "",
    discount: "",
    slug: "gradient-graphic-t-shirt", // Add a unique slug for the product
  },
  {
    image: "Frame 34 (2).png",
    title: "Polo with Tipping Details",
    price: "$180",
    oldPrice: "",
    discount: "",
    slug: "polo-with-tipping-details",
  },
  {
    image: "Frame 38 (2).png",
    title: "Black Striped T-shirt",
    price: "$120",
    oldPrice: "$160",
    discount: "-40%",
    slug: "black-striped-t-shirt",
  },
  {
    image: "Frame 71.png",
    title: "SKINNY FIT JEANS",
    price: "$240",
    oldPrice: "$160",
    discount: "-20%",
    slug: "skinny-fit-jeans",
  },
  {
    image: "Frame 72.png",
    title: "CHECKERED SHIRT",
    price: "$180",
    oldPrice: "",
    discount: "",
    slug: "checkered-shirt",
  },
  {
    image: "Frame 73.png",
    title: "SLEEVE STRIPED T-SHIRT",
    price: "$130",
    oldPrice: "$160",
    discount: "-30%",
    slug: "sleeve-striped-tshirt",
  },
  {
    image: "Frame 32 (3).png",
    title: "VERTICAL STRIPED SHIRT",
    price: "$212",
    oldPrice: "$232",
    discount: "-30%",
    slug: "vertical-striped-shirt",
  },
  {
    image: "Frame 70.png",
    title: "COURAGE GRAPHIC T-SHIRT",
    price: "$145",
    oldPrice: "",
    discount: "",
    slug: "courage-graphic-t-shirt",
  },
  {
    image: "Frame 73.png",
    title: "LOOSE FIT BERMUDA SHORTS",
    price: "$80",
    oldPrice: "",
    discount: "",
    slug: "loose-fit-bermuda-shorts",
  },
];

const Casual = () => {
  return (
    <>
      <Header />
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="mt-8 text-4xl font-extrabold">Casual</h1>
          </div>
          <div className="flex mt-3 gap-2">
            <p className="text-end text-sm text-gray-500">
              Showing 1-{products.length} of {products.length} Products
            </p>
            <select>
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Section */}
        <div className="px-4">
          {/* Flex container for cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Link key={index} href={`/product/${product.slug}`} passHref>
                <div className="flex flex-col rounded-lg p-4 transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                  <h3 className="mt-4 font-bold text-gray-800">{product.title}</h3>
                  <div className="mt-2 flex gap-2 text-black font-semibold">
                    {product.price}{" "}
                    {product.oldPrice && (
                      <span className="line-through text-gray-500">{product.oldPrice}</span>
                    )}
                    {product.discount && (
                      <div className="bg-red-400 w-[58px] h-[28px] rounded-[25px] text-center">
                        {product.discount}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          <button className="border px-3 py-2 rounded-md">Previous</button>
          <button className="border px-3 py-2 rounded-md">1</button>
          <button className="border px-3 py-2 rounded-md">2</button>
          <button className="border px-3 py-2 rounded-md">3</button>
          <span>...</span>
          <button className="border px-3 py-2 rounded-md">8</button>
          <button className="border px-3 py-2 rounded-md">9</button>
          <button className="border px-3 py-2 rounded-md">10</button>
          <button className="border px-3 py-2 rounded-md">Next</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Casual;
