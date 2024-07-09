import Image from "next/image";
import Link from "next/link";

interface IProductsDisplayComponentProps {
  product: any;
}

const ProductsDisplayComponent = ({
  product,
}: IProductsDisplayComponentProps) => {
  return (
    <div className="bg-gray-50 shadow-md rounded-lg">
      <Link href={`/product/${product._id}`}>
        <div
          className="overflow-hidden rounded-t-lg mb-6 h-[500px] bg-cover  w-full bg-top bg-no-repeat"
          style={{
            backgroundImage: `url(${product.product_image})`,
          }}
        ></div>

        <div className=" px-4 pb-6 text-center ">
          <h1 className="text-xl font-bold mb-2 line-clamp-1 ">
            {product.product_name}
          </h1>
          <p className="font-medium">Rs. {product.product_price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductsDisplayComponent;
