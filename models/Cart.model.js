const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartSchema = new Schema({
  recipesList: [{type: mongoose.Schema.Types.ObjectId}]
});

const Cart = mongoose.model("cart", CartSchema);

module.exports = Cart;