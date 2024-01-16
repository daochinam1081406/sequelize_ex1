import express from "express";
import { addOrder } from "../controllers/OrdersControllers.js";

const router = express.Router();

router.post("/orders", addOrder);

export default router;
