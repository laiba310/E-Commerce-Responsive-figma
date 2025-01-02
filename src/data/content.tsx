interface Data {
  id:number,
  title:string,

  img:string,
price:string,
oldPrice:string
discount?:string 

}

export const carData: Data[] = [
  {
    id: 1,
    img: "/Frame 33 (2).png", // Updated
    title: "Gradient Graphic T-shirt",
    price: "$145",
    oldPrice: "",
    discount: "",
  },
  {
    id: 2,
    img: "/Frame 34 (2).png", // Updated
    title: "Polo with Tipping Details",
    price: "$180",
    oldPrice: "",
    discount: "",
  },
  {
    id: 3,
    img: "/Frame 38 (2).png", // Updated
    title: "Black Striped T-shirt",
    price: "$120",
    oldPrice: "$160",
    discount: "-40%",
  },
  {
    id: 4,
    img: "/Frame 71.png", // Updated
    title: "SKINNY FIT JEANS",
    price: "$240",
    oldPrice: "$160",
    discount: "-20%",
  },
  {
    id: 5,
    img: "/Frame 72.png", // Updated
    title: "CHECKERED SHIRT",
    price: "$180",
    oldPrice: "",
    discount: "",
  },
  {
    id: 6,
    img: "/Frame 73.png", // Updated
    title: "SLEEVE STRIPED T-SHIRT",
    price: "$130",
    oldPrice: "$160",
    discount: "-30%",
  },
  {
    id: 7,
    img: "/Frame 32 (3).png", // Updated
    title: "VERTICAL STRIPED SHIRT",
    price: "$212",
    oldPrice: "$232",
    discount: "-30%",
  },
  {
    id: 9,
    img: "/Frame 70.png", // Updated
    title: "COURAGE GRAPHIC T-SHIRT",
    price: "$145",
    oldPrice: "",
    discount: "",
  },
  {
    id: 10,
    img: "/Frame 73.png", // Updated
    title: "LOOSE FIT BERMUDA SHORTS",
    price: "$80",
    oldPrice: "",
    discount: "",
  },
];export const relatedProductData: Data[] = [
  {
    id: 11,
    img: "/Frame 73.png", // Updated
    title: "SLEEVE STRIPED T-SHIRT",
    price: "$130",
    oldPrice: "$160",
    discount: "-30%",
  },
  {
    id: 12,
    img: "/Frame 32 (3).png", // Updated
    title: "VERTICAL STRIPED SHIRT",
    price: "$212",
    oldPrice: "$232",
    discount: "-30%",
  },
  {
    id: 13,
    img: "/Frame 70.png", // Updated
    title: "COURAGE GRAPHIC T-SHIRT",
    price: "$145",
    oldPrice: "",
    discount: "",
  },
  {
    id: 14,
    img: "/Frame 73.png", // Updated
    title: "LOOSE FIT BERMUDA SHORTS",
    price: "$80",
    oldPrice: "",
    discount: "",
  },
];
