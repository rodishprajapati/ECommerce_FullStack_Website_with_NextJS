import { Request, Response } from "express";
import userModel from "../../../../models/users.model";

const UserProfile = async (req: Request, res: Response) => {
  const getUserProfile = await userModel.findOne({
    _id: req.user.user_id,
  });
  res.status(200).json({
    status: "success",
    data: getUserProfile,
  });
};
export default UserProfile;
