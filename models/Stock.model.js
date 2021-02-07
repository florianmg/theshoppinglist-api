const mongoose = require("mongoose");
const { Schema } = mongoose;

const StockSchema = new Schema({
  recipesList: [{type: mongoose.Schema.Types.ObjectId}]
});

const Stock = mongoose.model("stock", StockSchema);

module.exports = Stock;