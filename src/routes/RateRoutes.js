import express from "express";
import {
  addRestaurantRating,
  getRatingsByRestaurant,
  getRatingsByUser,
} from "../controllers/RateRestaurantControllers.js";

const router = express.Router();

router.post("/rate", addRestaurantRating);

router.get("/restaurant/:res_id/ratings", getRatingsByRestaurant);

router.get("/user/:user_id/ratings", getRatingsByUser);

export default router;
