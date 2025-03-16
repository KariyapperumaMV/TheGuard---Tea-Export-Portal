const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const teaRoute = require("./routers/tea.router");

const app = express();
const PORT = process.env.PORT || 5000;

const URI =
  "mongodb+srv://avishkwork:avishkwork@quality-management.yl5tgwf.mongodb.net/?retryWrites=true&w=majority&appName=Quality-Management";

mongoose
  .connect(URI, { dbName: "mydatabase" })
  .then(() => console.log("Database is connected"))
  .catch((err) => console.error("Database connection error:", err));

app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));


app.use("/api/tea", teaRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
