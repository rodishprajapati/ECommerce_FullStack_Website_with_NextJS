import { Request, Response } from "express";
import vendorModel from "../../../../models/vendors.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const vendorsSignup = async (req: Request, res: Response) => {
  //getting data from body
  const { vendor_email, password, confirm_password, business_name } = req.body;

  //general validations
  if (!vendor_email) throw "vendor_email is required!";
  if (!password) throw "Password is required";
  if (password != confirm_password)
    throw "Password and confirm password donot match!";
  if (!business_name) throw "Business name is required!";
  if (business_name.length < 3)
    throw "Name must be at least 3 characters long!";

  //database validations

  const existingVendor = await vendorModel.findOne({
    vendor_email,
  });

  if (existingVendor)
    throw "this vendor_email already exist!please try another!";

  // when everything is valid
  let encryptedPassword = await bcrypt.hash(password, 8);

  const createdVendor = await vendorModel.create({
    vendor_email,
    business_name,
    password: encryptedPassword.toString(),
  });

  const jwtPayload = {
    vendor_id: createdVendor._id,
  };
  const accessToken = jwt.sign(jwtPayload, process.env!.jwt_secret!, {
    expiresIn: "90 days",
  });
  res.status(200).json({
    status: "success",
    message: "Account created successfully!",
    accessToken,
  });
};
export default vendorsSignup;
