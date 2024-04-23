import { Request, Response } from "express";
import cartsModel from "../../../../models/carts.model";
import ordersModel from "../../../../models/orders.model";
import mongoose from "mongoose";

const checkOut = async (req: Request, res: Response) => {
  // Default >> Cash on delivery..

  const productsInCart = await cartsModel.find({
    user_id: req.user.user_id,
  });

  if (productsInCart.length < 1) throw "Nothing in your cart.";

  let itemsForOrder: any = [];

  productsInCart.map((singleItem: any) => {
    itemsForOrder.push({
      product_id: singleItem.product_id,
      user_id: singleItem.user_id,
      quantity: singleItem.quantity,
      price: singleItem.price,
    });
  });

  const session = await mongoose.startSession();
  await session.withTransaction(async (session) => {
    await ordersModel.insertMany(itemsForOrder, { session });

    await cartsModel.deleteMany(
      {
        user_id: req.user.user_id,
      },
      {
        session,
      }
    );
  });

  res.status(200).json({
    status: "cart",
    message: "Order placed successfully!",
  });
};

export default checkOut;
