import { Button, Drawer, Form, Input, Table, Tag, message } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

const Products = () => {
  const messageApi = message;

  const [form] = useForm();

  const [is_add_product_drawer_open, set_is_add_product_drawer_open] =
    useState(false);

  const [products, setProducts] = useState([]);

  const addProduct = async (values: any) => {
    try {
      const getToken = localStorage.getItem("accessToken");
      const response = await axios.post(
        "http://localhost:8000/api/v1/vendors/products",
        values,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      messageApi.success("Product added successfully!");
      set_is_add_product_drawer_open(false);
      form.resetFields();
      getProduct();
    } catch (e) {}
  };

  const getProduct = async () => {
    try {
      const getToken = localStorage.getItem("accessToken");
      const response = await axios.get(
        "http://localhost:8000/api/v1/vendors/products",
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      setProducts(response.data.data);
    } catch (e) {}
  };

  useEffect(() => {
    getProduct();
  }, []);

  const columns = [
    {
      title: "Product name",
      dataIndex: "product_name",
      key: "product_name",
      render: (data: any, dataSource: any) => (
        <>
          <div className="flex gap-2 items-center">
            <div className="h-[30px] w-[30px] rounded-full bg-gray-200 items-center flex justify-center font-bold overflow-hidden">
              <div className="h-[30px] w-[30px] bg-cover flex items-center justify-center ">
                {dataSource.product_image ? (
                  <img
                    src={`${dataSource.product_image}`}
                    className="h-[30px] w-[30px]"
                  />
                ) : (
                  data[0]
                )}
              </div>
            </div>
            <div>
              {" "}
              <a className="font-bold">{data}</a>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Price",
      dataIndex: "product_price",
      key: "product_price",
    },

    {
      title: "Description",
      dataIndex: "product_description",
      key: "product_description",
    },
  ];

  return (
    <>
      <div className="mt-2 flex justify-between mr-2">
        <div></div>

        <button
          className="bg-gray-800 text-white p-3 rounded-xl"
          onClick={() => {
            set_is_add_product_drawer_open(true);
          }}
        >
          + Add Product
        </button>
      </div>

      <Table
        pagination={{ pageSize: 5 }}
        dataSource={products}
        columns={columns}
      />

      <Drawer
        maskClosable={false}
        title="Basic Drawer"
        onClose={() => {
          set_is_add_product_drawer_open(false);
        }}
        open={is_add_product_drawer_open}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={addProduct}
          autoComplete="off"
        >
          <Form.Item
            label="Product name"
            name="product_name"
            rules={[{ required: true, message: "Please enter product name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Price"
            name="product_price"
            rules={[{ required: true, message: "Price is required!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Image URL"
            name="product_image"
            rules={[{ required: false, message: "Price is required!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="product_description"
            rules={[{}]}
          >
            <TextArea />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="default" htmlType="submit" className="font-bold">
              Add Product
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};
export default Products;
