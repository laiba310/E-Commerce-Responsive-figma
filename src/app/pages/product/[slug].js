import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product Slug: {slug}</p>
      {/* Yahan aap dynamically slug ke basis par product ka data fetch kar sakte hain */}
    </div>
  );
};

export default ProductDetail;
