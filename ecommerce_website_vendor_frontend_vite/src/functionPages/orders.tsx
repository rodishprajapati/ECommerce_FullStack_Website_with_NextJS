import { Button, Drawer, Form, Input, Table, Tag, message } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const getToken = localStorage.getItem("accessToken");
      const response = await axios.get(
        "http://localhost:8000/api/v1/vendors/orders",
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );

      setOrders(response.data.data);
    } catch (e) {}
  };

  useEffect(() => {
    getOrders();
  }, []);

  const columns = [
    {
      title: "Product",
      dataIndex: "product_id",
      key: "product_id",
      render: (product_id: any, dataSource: any) => (
        <>
          <div className="flex gap-2 items-center">
            <div className="h-[30px] w-[30px] rounded-full bg-gray-200 items-center flex justify-center font-bold overflow-hidden">
              <div className="h-[30px] w-[30px] bg-cover flex items-center justify-center ">
                {product_id.product_image ? (
                  <img
                    src={`${product_id.product_image}`}
                    className="h-[30px] w-[30px]"
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              {" "}
              <a className="font-bold">{product_id.product_name}</a>
            </div>
          </div>
        </>
      ),
    },

    {
      title: "Customer",
      dataIndex: "user_id",
      key: "user_id",
      render: (user_id: any, dataSource: any) => (
        <>
          <div className="flex gap-2 items-center">
            <div>
              {" "}
              <a className="font-bold">{user_id.name}</a> <br />
              <a className="font-bold">{user_id.location}</a> <br />
              <a className="font-bold">{user_id.email}</a> <br />
            </div>
          </div>
        </>
      ),
    },

    {
      title: "Price",
      dataIndex: "price",
      key: "product_price",
    },

    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: any, dataSource: any) => {
        let TagComponent = <Tag>{status}</Tag>;
        if (status === "order_placed") {
          TagComponent = <Tag color="red">Order placed</Tag>;
        }

        return <>{TagComponent}</>;
      },
    },
  ];

  return (
    <>
      <div className="mt-2 flex justify-between mr-2">
        <div></div>
      </div>

      <Table
        pagination={{ pageSize: 5 }}
        dataSource={orders}
        columns={columns}
      />
    </>
  );
};
export default Orders;
