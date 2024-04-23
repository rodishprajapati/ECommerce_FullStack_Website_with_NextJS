import { Router } from "express";
import getPublicProducts from "./controllers/getPublicProducts";

const WebsiteProductsRouter = Router();

WebsiteProductsRouter.get("/", getPublicProducts);

export default WebsiteProductsRouter;
