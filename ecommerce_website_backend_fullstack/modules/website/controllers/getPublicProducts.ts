import { Request, Response } from "express";
import productsModel from "../../../models/products.model";

const getPublicProducts = async (req: Request, res: Response) => {
  const { pagination_limit } = req.query;

  delete req.query.pagination_limit;

  const data = await productsModel
    .find(req.query)
    .limit(parseInt((pagination_limit ?? 5).toString()));

  res.status(200).json({
    status: "success",
    data,
  });
};

export default getPublicProducts;
