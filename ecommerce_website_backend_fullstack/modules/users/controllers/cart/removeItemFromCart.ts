import { Response, Request } from "express";
import validator from "validator";
import cartsModel from "../../../../models/carts.model";

const removeItemFromCart = async (req: Request, res: Response) => {
  const { cart_id } = req.body;
  console.log(" ");
  console.log(req.body);
  //general validations
  if (!cart_id) throw "cart id required";
  if (!validator.isMongoId(cart_id)) throw "invalid cart id provided";

  const getCart = await cartsModel.findOne({
    _id: cart_id,
  });
  if (!getCart) throw "this item is already removed from cart";

  const unitPrice = getCart.price / getCart.quantity;

  const updatedValue = await cartsModel.findOneAndUpdate(
    {
      _id: cart_id,
      user_id: req.user.user_id,
    },
    {
      $inc: {
        quantity: -1,
        price: unitPrice * -1,
      },
    },
    {
      new: true,
    }
  );

  if (!updatedValue) throw "Error: 233424";

  if (updatedValue.quantity <= 0) {
    await cartsModel.deleteOne({
      _id: cart_id,
      user_id: req.user.user_id,
    });
  }

  res.status(200).json({
    status: "success",
    message: "Done!",
  });
};
export default removeItemFromCart;
