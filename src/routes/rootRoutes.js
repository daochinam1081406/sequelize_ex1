// src/routes/rootRoutes.js
import express from "express";
import likeRoutes from "./LikeRoutes.js";
import ordersRoutes from "./OrdersRoutes.js";
import rateRoutes from "./RateRoutes.js"; // Import the new RateRoutes

const router = express.Router();

// Add your existing routes
router.use("/likes", likeRoutes);
router.use("/orders", ordersRoutes);

// Add the new routes for ratings
router.use("/ratings", rateRoutes);

export default router;
