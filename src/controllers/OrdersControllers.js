// controllers/OrdersControllers.js
import Orders from "../models/orders.js";

export const addOrder = async (req, res) => {
  try {
    const { user_id, food_id, amount, order_code, arr_sub_id } = req.body;

    await Orders.create({ user_id, food_id, amount, order_code, arr_sub_id });

    res.status(201).json({ message: "Order added successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};
