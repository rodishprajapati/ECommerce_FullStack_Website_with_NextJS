import { Response, Request } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../../../models/users.model";

const UserLogIn = async (req: Request, res: Response) => {
  //Get email and password
  const { user_email, user_password } = req.body;

  //validation
  if (!user_email) throw "User Email required ";
  if (!user_password) throw "User Password required ";

  //Validate from Database if user exist or not

  const getUser = await userModel
    .findOne({
      user_email,
    })
    .select("+user_password");

  if (!getUser) throw "user doesn't exist";

  //compare bycrypt password

  let compareUserPassword = await bcrypt.compare(
    user_password,
    getUser.user_password
  );
  if (!compareUserPassword) throw "Invalid Password";

  const jwtPayload = {
    user_id: getUser._id,
  };

  const accessToken = jwt.sign(jwtPayload, process.env!.jwt_user_secret!, {
    expiresIn: "90days",
  });
  res.status(200).json({
    status: "success",
    message: "logged in successfully",
    accessToken,
  });
};
export default UserLogIn;
