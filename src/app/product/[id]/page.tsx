

import ProductClient from "./ProductClient"; 
import { carData } from "@/data/content";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const data = carData[parseInt(id) - 1]; // Simulate fetching data
  
  // Pass fetched data to the Client Component
  return <ProductClient data={data} />;
}
