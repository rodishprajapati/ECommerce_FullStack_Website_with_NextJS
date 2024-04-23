import { Request, Response } from "express";
import vendorModel from "../../../../models/vendors.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const vendorsLogin = async (req: Request, res: Response) => {
  //getting data from req.body
  const { vendor_email, password } = req.body;

  //general validations
  if (!vendor_email) throw "vendor email Required ";
  if (!password) throw "Password Required";

  const getVendor = await vendorModel
    .findOne({
      vendor_email,
    })
    .select("+password");

  if (!getVendor) throw "Vendor user doesnt exist!! ";

  let comparePassword = await bcrypt.compare(password, getVendor.password);
  if (!comparePassword) throw "Wrong Password";

  const jwtPayload = {
    vendor_id: getVendor._id,
  };

  const accessToken = jwt.sign(jwtPayload, process.env!.jwt_secret!, {
    expiresIn: "90days",
  });

  res.status(200).json({
    status: "success",
    message: "Logged in successfully!",
    accessToken,
  });
};
export default vendorsLogin;
