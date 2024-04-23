import { Request, Response } from "express";
import validator from "validator";
import cartsModel from "../../../../models/carts.model";
import getProducts from "../../../vendors/products/controllers/getProducts";
import productsModel from "../../../../models/products.model";

const addToCart = async (req: Request, res: Response) => {
  const { product_id, quantity } = req.body;

  if (!product_id) throw "Product Id required!!";
  if (!quantity) throw "Quantity Id required!!";
  if (!validator.isAlphanumeric(quantity.toString()))
    throw "Quatity must be number!! ";
  if (quantity < 1) throw "quantity msut be atleast 1";
  if (!validator.isMongoId(product_id)) throw "Invalid product Id ";

  const getProduct = await productsModel.findOne({
    _id: product_id,
  });

  if (!getProduct) throw "Product is out of stock";

  const productInCart = await cartsModel.findOne({
    user_id: req.user.user_id,
    product_id,
  });

  const price = getProduct.product_price * quantity;

  if (!productInCart) {
    await cartsModel.create({
      user_id: req.user.user_id,
      product_id: product_id,
      quantity,
      price,
    });
  } else {
    await cartsModel.updateOne(
      {
        user_id: req.user.user_id,
        product_id,
      },
      {
        $inc: {
          quantity,
          price,
        },
      }
    );
  }

  res.status(200).json({
    status: "sucess",
    message: "Product added to cart",
  });
};
export default addToCart;
