import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const vendorAuth = (req: Request, res: Response, next: NextFunction) => {
  //check authorization
  if (!req.headers.authorization) throw "Authorization error!";
  console.log(req.headers.authorization);

  //If Authorization found, split bearer string from the tpken to get jwt string
  const accessToken = req.headers.authorization.split(" ")[1];

  if (!accessToken) throw " Auth error, NO AccessToken found!!";

  //verify jwt

  try {
    const jwtVerify = jwt.verify(accessToken, process.env!.jwt_secret!);
    req.vendor = jwtVerify;
  } catch (error) {
    throw "Authorization error! JWT not matched!!";
  }
  next();
};
export default vendorAuth;
