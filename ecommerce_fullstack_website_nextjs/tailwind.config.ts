import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  //new corrected one
  // content: [
  //   "./src/pages//*.{js,ts,jsx,tsx,mdx}",
  //   "./src/components//*.{js,ts,jsx,tsx,mdx}",
  //   "./src/app//*.{js,ts,jsx,tsx,mdx}",
  //   "./src/app//*.{js,ts,jsx,tsx,mdx}",
  //   "./src//*.{js,ts,jsx,tsx,mdx}",
  //   "./src///*.{js,ts,jsx,tsx,mdx}",
  // ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Poppins: "Rokkitt",
      },
      colors: {
        PrimaryBlack: "#3B3B3D",
      },
    },
  },
  plugins: [],

  safelist: [
    "bg-red-500",
    "text-3xl",
    "lg:text-4xl h-[20px] flex-col gap-3 p-[20px] w-[70vw] mt-[0.5px]ml-[10vw] h-[4vh] mt-[20px] ml-[auto]",
    "font-medium max-w-500 mt-4 lg:text-center text-center text-white ml-[auto]",
    "gap-[auto]",
    "bg-green-500 flex flex-col  text-white  text-lg gap-3 w-[20px] p-1 m-0 w-[auto] mr-[auto] mt-1",

    "font-medium font-semibold",
    // navBar
    "flex flex-row bg-green-500 h-[10vh]",
    "flex items-center justify-center font-extrabold text-white text-2xl px-4",
    "flex items-center ml-auto text-white text-lg px-4",
    "flex flex-row gap-4 items-center p-[2px]",
    "bg-green-500 flex flex-row text-white text-lg gap-3 p-1 m-0 w-[auto]  ml-[20vw]",
  ],
};
export default config;
