const mongoose = require("mongoose");

const TeaPredictionSchema = new mongoose.Schema(
  {
    periods: { type: Number, required: true }, // Added periods field
    data: [
      {
        region: { type: String, required: true },
        data: [
          {
            date: { type: String, required: true },
            predicted_price: { type: Number, required: true },
            lower_bound: { type: Number, required: true },
            upper_bound: { type: Number, required: true },
          },
        ],
      },
    ],
  },
  { timestamps: true } // Auto-adds createdAt & updatedAt fields
);

module.exports = mongoose.model("TeaPrediction", TeaPredictionSchema);
