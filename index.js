import express from "express";
import rootRoutes from "./src/routes/rootRoutes.js";

// B5: tạo biến app để start BE
const app = express();
// add middleware để express hiểu body nhận về là object (json)
app.use(express.json()); // 1 middleware
app.use(rootRoutes); // 1 middleware

// B6: setup port cho BE -> 8081
app.listen("8081", () => {
  console.log("BE is starting");
});
