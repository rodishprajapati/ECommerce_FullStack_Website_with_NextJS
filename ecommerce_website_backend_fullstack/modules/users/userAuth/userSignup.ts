import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../../../models/users.model";

const UserSignUp = async (req: Request, res: Response) => {
  const { user_email, user_name, user_password, user_confirm_password } =
    req.body;

  console.log(req.body);
  //General Validations
  if (!user_email) throw "Email Required!";
  if (!user_name) throw "Username Required!";
  if (!user_password) throw "Password Required!";
  if (!user_confirm_password) throw "Confirm Password Required!";

  //validate if user email already exist or not in database
  const existingUser = await userModel.findOne({
    user_email,
  });
  if (existingUser) throw "User Email Already Exist";

  //if everything is fine

  // bcrypt password
  let encryptedUserPassword = await bcrypt.hash(user_password, 8);

  //create database
  const createdUser = await userModel.create({
    user_email,
    user_password: encryptedUserPassword.toString(),
    user_name,
  });

  const jwtPayload = {
    user_id: createdUser._id,
  };

  const accessToken = jwt.sign(jwtPayload, process.env!.jwt_user_secret!, {
    expiresIn: "90days",
  });

  res.status(200).json({
    status: "success",
    message: "User Created Successfully!!",
    accessToken,
  });
};
export default UserSignUp;
