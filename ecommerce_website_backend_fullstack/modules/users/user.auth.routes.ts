import { Router } from "express";
import UserSignUp from "./userAuth/userSignup";
import UserLogIn from "./userAuth/userLogin";

const UserAuthRouter = Router();
UserAuthRouter.post("/signup", UserSignUp);
UserAuthRouter.post("/login", UserLogIn);

export default UserAuthRouter;
