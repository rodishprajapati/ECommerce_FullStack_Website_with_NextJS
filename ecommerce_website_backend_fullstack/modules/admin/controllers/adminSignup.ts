import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import adminAccountsModel from "../../../models/adminAccounts";

const AdminSignup = async (req: Request, res: Response) => {
  //getting data from body
  const { email, password, confirm_password } = req.body;

  //general validations
  if (!email) throw "Email is required!";
  if (!password) throw "Password is required";
  if (password != confirm_password)
    throw "Password and confirm password donot match!";
  throw "Name must be at least 3 characters long!";

  // const existingAdmin=await adminAccountsModel.findOne({
  //   email,
  // })
  //database validations

  const existingAdmin = await adminAccountsModel.findOne({
    email,
  });

  if (existingAdmin) throw "this email already exist!please try another!";

  // when everything is valid
  let encryptedPassword = await bcrypt.hash(password, 8);

  const createdUser = await adminAccountsModel.create({
    email,
    password: encryptedPassword.toString(),
  });

  const jwtPayload = {
    vendor_id: createdUser._id,
  };
  const accessToken = jwt.sign(jwtPayload, process.env!.jwt_secret!, {
    expiresIn: "90days",
  });
  res.status(200).json({
    status: "success",
    message: "Account created successfully!",
    accessToken,
  });
};
export default AdminSignup;
