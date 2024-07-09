"use client";

import { Form, Input, Button } from "antd";
import { message } from "antd";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { axiosInstance } from "../utils/axiosInstance";

const Login = () => {
  const navigation = useRouter();

  const onFinish = async (values: any) => {
    let response: any;
    try {
      const response = await axiosInstance.post(`/users/auth/login`, values);

      localStorage.setItem("accessToken", response.data.accessToken);
      navigation.push("/products");
      message.success("Logged in successfully!");
    } catch (e: any) {
      if (e && e.response && e.response.data && e.response.data.message) {
        message.error(e.response.data.message);
      } else {
        message.error("Connection failed. Try again!");
      }
    }
  };

  return (
    <>
      <section className="container mx-auto mt-10">
        <div className="2xl:mx-28  lg:mx-4 mx-2 gird flex items-center justify-center h-[80vh]">
          <div className="flex items-center justify-center">
            <div className="shadow-xl px-4 py-10 rounded-md md:w-[500px] w-[100vw] bg-zinc-200">
              <div className="flex justify-center">
                <Image
                  src={"/lugaPasal.jpg"}
                  alt=""
                  className=" w-[100px] mb-10"
                  width={1000}
                  height={1000}
                />
              </div>
              <Form
                name="basic"
                size="small"
                layout="vertical"
                className="w-full "
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  required
                  name="email"
                  label={<div className="font-bold">Email</div>}
                  rules={[
                    {
                      required: true,
                      message: "Email is required.",
                    },
                    {
                      pattern:
                        /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email format.",
                    },
                  ]}
                  className="w-full"
                >
                  <Input
                    type="email"
                    className="border border-gray-300 rounded-md w-full py-2 px-4"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  label={<div className="font-bold">Password</div>}
                  rules={[
                    {
                      required: true,
                      message: "Password is required.",
                    },
                  ]}
                  className="w-full"
                >
                  <Input.Password className="border border-gray-300 rounded-md w-full py-2 px-4" />
                </Form.Item>

                <Form.Item>
                  <button
                    type="submit"
                    className="bg-green-500 text-white  font-semibold px-4 py-2 rounded-md w-full "
                  >
                    Login
                  </button>
                </Form.Item>
              </Form>
              <div className="mb-6 flex justify-center items-center">
                <Link className="" href={"/forgot-pw"}>
                  Forgot password?
                </Link>
              </div>
              <div className="text-center flex flex-col">
                New to Hamro Luga? &nbsp;
                <Link
                  href={"/register"}
                  className="cursor-pointer font-bold underline underline-offset-4"
                >
                  Create new account!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
