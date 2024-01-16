import LikeRes from "../models/like_res.js";
export const likeRestaurant = async (req, res) => {
  try {
    const { user_id, res_id } = req.body;

    // Kiểm tra xem res_id và user_id có tồn tại không
    if (!user_id || !res_id) {
      return res.status(400).json({ message: "Invalid user_id or res_id." });
    }

    // Kiểm tra xem có like nào tồn tại hay không
    const existingLike = await LikeRes.findOne({ where: { user_id, res_id } });

    if (existingLike) {
      // User đã like nhà hàng, thực hiện unlike
      await LikeRes.destroy({ where: { user_id, res_id } });
      return res
        .status(200)
        .json({ message: "Restaurant unliked successfully." });
    } else {
      // User chưa like nhà hàng, thực hiện like
      await LikeRes.create({ user_id, res_id, date_like: new Date() });
      return res
        .status(201)
        .json({ message: "Restaurant liked successfully." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

export const getLikedRestaurantsByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const likedRestaurants = await LikeRes.findAll({ where: { user_id } });
    res.status(200).json(likedRestaurants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const getUsersWhoLikedRestaurant = async (req, res) => {
  try {
    const { res_id } = req.params;
    const likedUsers = await LikeRes.findAll({ where: { res_id } });
    res.status(200).json(likedUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};
