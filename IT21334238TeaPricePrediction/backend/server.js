const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const teaRoute = require("./routers/tea.router");
const teapriceRoute = require("./routers/teaprice.router");

const app = express();
const PORT = process.env.PORT;

const URI = process.env.MONGODB;

mongoose
  .connect(URI, { dbName: "mydatabase" })
  .then(() => console.log("✅ Database is connected"))
  .catch((err) => console.error("❌ Database connection error:", err));

app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));


app.use("/api/tea", teaRoute);
app.use("/api/teaprice", teapriceRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
