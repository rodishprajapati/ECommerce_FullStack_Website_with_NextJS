import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import "../utils/globalTailwind.css";
import { Footer } from "../pageComponent/Footer";
import { NavBar } from "../pageComponent/NavBar";

const ProductsPage = async () => {
  const response = await axios.get(
    "http://localhost:8000/api/v1/website/products"
  );
  return (
    <>
      <NavBar />
      <div className="text-xl font-semibold bg-zinc-600 h-[7vh] p-[10px]">
        All Products
      </div>
      <div className="mt-[15px] grid grid-cols    md:grid-cols-3 lg:grid-cols-5 gap-6 ">
        {response.data.data.map((el: any) => (
          <Link key={el._id} href={`/product/${el._id}`}>
            <div className="border border-zinc-500 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105 h-[100%]">
              <Image
                src={el.product_image}
                alt="product_image"
                className="  w-auto bg-zinc-300"
                layout="responsive"
                width={500}
                height={500}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {el.product_name}
                </h3>
                <p className="text-gray-700">{el.product_description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-green-500 font-semibold">
                    Rs.{el.product_price}
                  </span>

                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};
export default ProductsPage;
