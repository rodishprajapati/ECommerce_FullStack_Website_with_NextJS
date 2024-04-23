import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const UserAuth = (req: Request, res: Response, next: NextFunction) => {
  //check authorization
  if (!req.headers.authorization) throw "Authorization error!";
  console.log(req.headers.authorization);

  //If Authorization found, split bearer string from the tpken to get jwt string
  const accessToken = req.headers.authorization.split(" ")[1];

  if (!accessToken) throw " Auth error, NO AccessToken found!!";

  //verify jwt

  try {
    const jwtVerify = jwt.verify(accessToken, process.env!.jwt_user_secret!);
    req.user = jwtVerify;
  } catch (error) {
    throw "Authorization error! JWT not matched!!";
  }
  next();
};
export default UserAuth;
