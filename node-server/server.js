import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the Express Starter API!");
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
