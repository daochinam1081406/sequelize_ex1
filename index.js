// index.js
import express from "express";
import rootRoutes from "./src/routes/rootRoutes.js";

const app = express();

// Middleware to parse JSON in request body
app.use(express.json());

// Root route to check if the server is running
app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});

// Include the root routes
app.use(rootRoutes);

// Setup port for the server
const port = 8081;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
