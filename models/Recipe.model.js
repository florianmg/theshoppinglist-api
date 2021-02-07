const mongoose = require("mongoose");
const { Schema } = mongoose;

const RecipeSchema = new Schema({
  name: {type: String, required: true},
  totalPrice: {
    unit: {type: Number, required: true},
    cents: {type: Number, required: false}
  },
  foods: [
    {
      foodId: {type: mongoose.Schema.Types.ObjectId},
      quantity: {type: String}
    }
  ]
});

const Recipe = mongoose.model("recipe", RecipeSchema);

module.exports = Recipe;