import express from "express";
import likeRoutes from "./LikeRoutes.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the root route!");
});

router.use("/likes", likeRoutes);

export default router;
