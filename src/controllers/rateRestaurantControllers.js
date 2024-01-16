// controllers/RateResControllers.js
import RateRes from "../models/rate_res.js";

// Add a restaurant rating
export const addRestaurantRating = async (req, res) => {
  try {
    const { user_id, res_id, amount } = req.body;

    // Check if the user has already rated the restaurant
    const existingRating = await RateRes.findOne({
      where: { user_id, res_id },
    });

    if (existingRating) {
      // User has already rated, update the existing rating
      existingRating.amount = amount;
      existingRating.date_rate = new Date();
      await existingRating.save();
    } else {
      // User hasn't rated yet, create a new rating
      await RateRes.create({ user_id, res_id, amount, date_rate: new Date() });
    }

    res.status(201).json({ message: "Restaurant rating added successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const getRatingsByRestaurant = async (req, res) => {
  try {
    const { res_id } = req.params;
    const ratings = await RateRes.findAll({ where: { res_id } });
    res.status(200).json(ratings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const getRatingsByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const ratings = await RateRes.findAll({ where: { user_id } });
    res.status(200).json(ratings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};
