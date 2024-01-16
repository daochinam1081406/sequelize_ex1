import express from "express";
import {
  likeRestaurant,
  getLikedRestaurantsByUser,
  getUsersWhoLikedRestaurant,
} from "../controllers/LikeRestaurantControllers.js";

const router = express.Router();

router.post("/like", likeRestaurant);

router.get("/user/:user_id/likes", getLikedRestaurantsByUser);

router.get("/restaurant/:res_id/likes", getUsersWhoLikedRestaurant);

export default router;
