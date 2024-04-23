import mongoose from "mongoose";

const vendorsSchema = new mongoose.Schema(
  {
    vendor_email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    business_name: {
      type: String,
      required: true,
    },
    // auth_id: {
    //   type: String,
    // },
  },
  {
    timestamps: true,
  }
);
const vendorModel = mongoose.model("vendorAccounts", vendorsSchema);
export default vendorModel;
