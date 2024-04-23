import { Request, Response } from "express";
import cartsModel from "../../../../models/carts.model";
import ordersModel from "../../../../models/orders.model";
import mongoose from "mongoose";

const cancelOrder = async (req: Request, res: Response) => {
  const { order_id } = req.params;

  const getOrder = await ordersModel.findOne({
    user_id: req.user.user_id,
    _id: order_id,
  });

  if (!getOrder) throw "This order does not exist!";

  if (getOrder.status != "order_placed")
    throw "This order cannot be cancelled. Please contact vendor.";

  await ordersModel.updateOne(
    {
      user_id: req.user.user_id,
      _id: order_id,
    },
    {
      status: "cancelled",
    }
  );

  res.status(200).json({
    status: "cart",
    message: "Order cancelled successfully!",
  });
};

export default cancelOrder;
