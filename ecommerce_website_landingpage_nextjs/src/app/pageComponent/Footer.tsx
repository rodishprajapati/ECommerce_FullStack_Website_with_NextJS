import { FaFacebook, FaInstagram, FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <section id="footer">
      <footer className="bg-green-500 mt-[20px]">
        <div className="flex gap-4 h-40rem justify-between p-[20px] w-[70vw] ml-[auto] mr-[auto]">
          <div className="flex flex-col gap-[auto] ">
            <h1 className=" font-bold">Help</h1>
            <h2>Shipping & Return Policy</h2>
            <h2>Help Center</h2>
            <h2>Terms & Conditions</h2>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className=" font-bold">Company</h1>
            <h2>About Us</h2>
            <h2>Contact</h2>
            <h2>Support</h2>
            <h2>News</h2>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className=" font-bold">Shop</h1>
            <h2>Products</h2>
            <h2>OverView</h2>
            <h2>Pricing</h2>
            <h2>References</h2>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className=" font-bold">Connect With Us</h1>
            <div className="flex flex-row gap-3" id="facebook">
              <FaFacebook />
              Facebook
            </div>
            <div className="flex flex-row gap-3" id="facebook">
              <FaInstagram />
              Instagram
            </div>
          </div>
        </div>

        <div className="font-medium max-w-500 mt-4 lg:text-center text-center text-white ml-[auto]">
          Buy What you want, When you want, Where you want.
          <br />
          Always in Fashion.
        </div>

        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 justify-between items-center pt-12">
          <p className="text-white flex items-center">
            <FaRegCopyright className="mr-1" />
            2024 - Hamro Luga Pasal. All rights reserved
          </p>
        </div>
      </footer>
    </section>
  );
};
