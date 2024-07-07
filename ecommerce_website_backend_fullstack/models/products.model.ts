import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    vendor_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    product_name: {
      type: String,
      required: true,
    },

    product_price: {
      type: Number,
      required: true,
    },

    product_image: {
      type: String,
    },

    product_detail: {
      type: String,
    },
    product_rating: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
const productsModel = mongoose.model("Products", productsSchema);
export default productsModel;
