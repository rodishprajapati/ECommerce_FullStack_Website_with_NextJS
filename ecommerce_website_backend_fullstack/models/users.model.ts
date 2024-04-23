import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    user_email: {
      type: String,
      required: true,
    },
    user_name: {
      type: String,
      required: true,
    },
    user_password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const userModel = mongoose.model("Users", usersSchema);
export default userModel;
