// pages/ImageSlider.tsx

import { Carousel } from "antd";
import Image from "next/image";
import { CSSProperties } from "react";

const contentStyle: CSSProperties = {
  margin: 0,
  height: "30vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(50, 50, 50, 0.6)", // Dark grey semi-transparent background
  backdropFilter: "blur(10px)",
  borderRadius: "10px", // Optional: Adds rounded corners for a more polished look
};

const ImageSlider: React.FC = () => {
  return (
    <Carousel autoplay autoplaySpeed={5000}>
      <div style={contentStyle}>
        <Image
          src={"/ProductImages/image3.jpg"}
          alt="Image 3"
          width={1000}
          height={500}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div style={contentStyle}>
        <Image
          src={"/ProductImages/image2.jpeg"}
          alt="Image 2"
          width={1000}
          height={500}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div style={contentStyle}>
        <Image
          src={"/ProductImages/image1.jpg"}
          alt="Image 1"
          width={1000}
          height={500}
          style={{ objectFit: "cover" }}
        />
      </div>
    </Carousel>
  );
};

export default ImageSlider;
