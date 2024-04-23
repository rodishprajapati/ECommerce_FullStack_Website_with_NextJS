import { Button, Checkbox, Form, FormProps, Input } from "antd";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  ///form controller*************

  const onFinish = async (values) => {
    console.log(values);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/vendors/auth/signup",
        values
      );
      localStorage.setItem("accessToken", response.data.accessToken);
      navigate("/login");
      // console.log(localStorage.accessToken);

      console.log("successfully loggedIn");
    } catch (error) {
      console.log(error);
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
            Vendor SignUp{" "}
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
              <Form.Item
                label="Confirm Password"
                name="confirm_password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password again!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Company Name "
                name="business_name"
                rules={[
                  {
                    required: true,
                    message: "Please input your company name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="default" htmlType="submit">
                  SignUp
                </Button>
                <Button
                  type="default"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Cancel
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
