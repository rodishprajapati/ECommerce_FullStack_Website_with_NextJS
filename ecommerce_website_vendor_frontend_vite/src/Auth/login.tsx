import { Button, Checkbox, Form, FormProps, Input } from "antd";
import axios from "axios";
import React from "react";
import { message } from "antd";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  ///form controller*************

  const onFinish = async (values) => {
    console.log(values);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/vendors/auth/login",
        values
      );
      localStorage.setItem("accessToken", response.data.accessToken);
      navigate("/");
      console.log(localStorage.accessToken);

      console.log("successfully loggedIn");
    } catch (e: any) {
      if (e && e.response && e.response.data && e.response.data.message) {
        message.error(e.response.data.message);
      } else {
        message.error("Connection failed. Try again!");
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //************* */
  return (
    <>
      <div className="flex flex-col  justify-center items-center m-auto h-[100vh] w-[100vw] bg-zinc-800 ">
        <div className="flex-col h-[50vh] w-[30vw]">
          <div className=" bg-zinc-300 flex items-center justify-center">
            Vendor Login{" "}
          </div>
          <div className=" bg-zinc-200 p-5">
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="vendor_email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="default" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
              <div className="flex flex-col justify-center items-center ">
                <div className=" ">
                  <Link to={"/forgotPassword"}>Forgot Password?</Link>
                </div>
                <div className="">
                  <Link to={"/newAccount"}>Create New Account</Link>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
