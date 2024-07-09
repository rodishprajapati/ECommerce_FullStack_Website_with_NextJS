import { Footer } from "@/pageComponents/Footer";
import { NavBar } from "@/pageComponents/NavBar";
import AddToCartComponent from "@/pageComponents/functions/addToCartComponent";
import { Button } from "antd";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const SingleProduct = async ({ params }: any) => {
  console.log(params);
  let response: any;
  try {
    response = await axios.get(
      `http://localhost:8000/api/v1/website/products?_id=${params.id}`
    );
  } catch (e) {
    return <> something went wrong!!</>;
  }
  // console.log(response);
  const product = response.data.data[0];

  return (
    <>
      <NavBar />;
      <div className="container mx-auto mb-[25vh] p-4">
        <h1 className="text-3xl font-semibold mb-4 ">Product Details</h1>
        <hr className="mb-4" />
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2 p-4">
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <Image
                src={product.product_image}
                alt="product_image"
                className="object-cover w-full h-full"
                layout="responsive"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-semibold mb-2">
              {product.product_name}
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Price:
              <span className="text-green-500">
                {" "}
                Rs. {product.product_price}
              </span>
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Details: {product.product_detail}
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Rating: {product.product_rating}
            </p>
            <AddToCartComponent />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SingleProduct;
