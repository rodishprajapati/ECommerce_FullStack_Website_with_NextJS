import { Router } from "express";
import addProducts from "./controllers/addProducts";
import getProducts from "./controllers/getProducts";
import editProduct from "./controllers/editProducts";
import deleteProduct from "./controllers/deleteProduct";
import vendorAuth from "../../../handlers/vendorAuth";

const VendorProductsRoute = Router();

//auth router for vendor
VendorProductsRoute.use(vendorAuth);

VendorProductsRoute.get("/", getProducts);
VendorProductsRoute.post("/", addProducts);
VendorProductsRoute.patch("/", editProduct);
VendorProductsRoute.delete("/:product_id", deleteProduct);

export default VendorProductsRoute;
