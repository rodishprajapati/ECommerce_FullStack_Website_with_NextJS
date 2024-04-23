import { Request, Response } from "express";
import validator from "validator";
import productsModel from "../../../../models/products.model";

const addProducts = async (req: Request, res: Response) => {
  const { product_name, product_image, product_details, product_price } =
    req.body;

  if (!product_name) throw "product name required!";
  if (!product_price) throw "product price required!";
  if (!validator.isAlphanumeric(product_price.toString()))
    throw "price is invalid!";
  if (product_price < 1) throw "Product price must be at least Rs.1";
  await productsModel.create({
    vendor_id: req.vendor.vendor_id,
    product_name,
    product_price,
    product_details,
    product_image,
  });

  res.status(200).json({
    status: "good",
  });
};
export default addProducts;
