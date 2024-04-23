import { Request, Response } from "express";
import ordersModel from "../../../../models/orders.model";

const getOrders = async (req: Request, res: Response) => {
  const data = await ordersModel
    .find({
      user_id: req.user.user_id,
    })
    .populate("product_id");

  res.status(200).json({
    status: "cart",
    data: data,
  });
};

export default getOrders;
