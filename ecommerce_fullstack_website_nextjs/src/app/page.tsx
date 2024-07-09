import { Footer } from "@/pageComponents/Footer";
import { NavBar } from "@/pageComponents/NavBar";
import ImageSlider from "@/pageComponents/functions/imageSlider";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  const response = await axios.get(
    "http://localhost:8000/api/v1/website/products"
  );
  //console.log(response.data.data);
  return (
    <>
      <NavBar />
      <ImageSlider />
      <Link href={"/products"}>
        <div className="font-bold">All Products</div>
      </Link>
      <div className="grid grid-cols  md:grid-cols-3 lg:grid-cols-5  gap-6">
        {response.data.data.map((el: any) => (
          <Link key={el._id} href={`/product/${el._id}`}>
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105 h-[100%]">
              {/* <div className="h-64 bg-gray-200">
                {/* You can replace the bg-gray-200 with an actual image of the product 
              </div> */}
              <Image
                src={el.product_image}
                alt="product_image"
                className="object-cover w-full h-full"
                layout="responsive"
                width={500}
                height={500}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {el.product_name}
                </h3>
                <h2 className="text-xl font-semibold mb-2 text-green-500">
                  RS. {el.product_price}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};
export default Home;
