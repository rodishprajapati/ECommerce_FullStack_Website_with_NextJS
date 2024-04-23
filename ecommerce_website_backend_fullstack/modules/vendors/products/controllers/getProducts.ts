import { Request, Response } from "express";
import productsModel from "../../../../models/products.model";

const getProducts = async (req: Request, res: Response) => {
  const data = await productsModel.find({
    vendor_id: req.vendor.vendor_id,
  });

  res.status(200).json({
    status: "success",
    data,
  });
};

export default getProducts;
