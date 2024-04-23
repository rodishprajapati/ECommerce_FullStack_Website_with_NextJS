import { Router } from "express";
import UserAuth from "../../handlers/userAuth";
import UserProfile from "./controllers/userProfile/getUserProfile";
import addToCart from "./controllers/cart/addToCart";
import checkOut from "./controllers/cart/checkOut";
import cancelOrder from "./controllers/cart/cancelOrder";
import removeItemFromCart from "./controllers/cart/removeItemFromCart";
import getCartItems from "./controllers/cart/getCartItems";
import getOrders from "./controllers/cart/getOrders";

const UserRoute = Router();

UserRoute.use(UserAuth);

UserRoute.get("/profile", UserProfile);

//cart router
UserRoute.post("/addToCart", addToCart);
UserRoute.delete("/removeFromCart/:cart_id", removeItemFromCart);
UserRoute.get("/cart", getCartItems);

//order related router
UserRoute.get("/orders", getOrders);
UserRoute.post("/checkout", checkOut);
UserRoute.delete("/cancel/:order_id", cancelOrder);

export default UserRoute;
