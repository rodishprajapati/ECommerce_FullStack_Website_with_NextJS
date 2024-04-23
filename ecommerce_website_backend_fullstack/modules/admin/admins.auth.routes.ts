import { Router } from "express";
import AdminSignup from "./controllers/adminSignup";

const AdminAuthRoute = Router();

//routing
AdminAuthRoute.post("/signup", AdminSignup);
export default AdminAuthRoute;
