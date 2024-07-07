import { Request, Response } from "express";
import productsModel from "../../../models/products.model";

const getRandomProducts = async (req: Request, res: Response) => {
  const { count, top } = req.query;

  let topInjector = {};

  if (top) {
    topInjector = { is_top_product: true };
  }

  const data = await productsModel.aggregate([
    {
      $match: topInjector,
    },

    {
      $sample: {
        size: parseInt((count ?? 3).toString()),
      },
    },
  ]);

  res.status(200).json({
    status: "success",
    data,
  });
};

export default getRandomProducts;
