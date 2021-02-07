const mongoose = require("mongoose");
const { Schema } = mongoose;

const FoodSchema = new Schema({
  name: {type: String, required: true},
  price: {
    unit: {type: Number, required: true, defaultValue: 0},
    cents: {type: Number, required: true, defaultValue: 0},
  }
});

const Food = mongoose.model("food", FoodSchema);

module.exports = Food;