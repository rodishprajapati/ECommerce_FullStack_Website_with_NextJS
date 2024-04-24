import "express-async-errors";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
require("dotenv").config();
import errorHandlers from "./handlers/errorHandlers";
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.mongo_connect!, {})
  .then(() => {
    console.log("mongoose connected successfully");
  })
  .catch((e: any) => {
    console.log("Mongoose connection failed ");
    console.log(e);
  });

import "./model";
import VendorsAuthRoute from "./modules/vendors/auth/vendors.auth.routes";
import AdminAuthRoute from "./modules/admin/admins.auth.routes";
import UserRouter from "./modules/users/user.routes";
import VendorProductsRoute from "./modules/vendors/products/vendors.products.routes";
import WebsiteProductsRouter from "./modules/website/website.products.routes";
import UserAuthRouter from "./modules/users/user.auth.routes";

//routes

//Vendor Auth Route
app.use("/api/v1/vendors/auth", VendorsAuthRoute);
//Vendor product Route
app.use("/api/v1/vendors/products", VendorProductsRoute);
//user Auth Route
app.use("/api/v1/users/auth", UserAuthRouter);

//User route
app.use("/api/v1/users", UserRouter);

//website
app.use("/api/v1/website/products", WebsiteProductsRouter);
// app.use("/api/v1/admin/auth", AdminAuthRoute);

app.use(errorHandlers);
app.listen(8000, () => {
  console.log("server started successfully!");
});
