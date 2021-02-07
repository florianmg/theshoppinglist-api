const Stock = require('../models/Stock.model');

const handleErrors = (err) => {
  let errors = {};
  errors.message = err.message;
  return errors;
}

/**
 * Get a list of current stock
 */
module.exports.getStock = async (req, res) => {
  try {
    const currentStock = await Stock.find();
    return res.status(200).json({currentStock});
  } catch(err) {
    const errors = handleErrors(err);
    return res.status(400).json({errors});
  }
};

/**
 * delete item from stock with stockId
 * params: stockId
 */
module.exports.deleteFromStock = async (req, res) => {
  const {stockId} = req.params;
  try {
    const deletedStock = await Stock.findByIdAndDelete({stockId});
    return res.status(200).json({deletedStock});
  } catch(err) {
    const errors = handleErrors(err);
    return res.status(400).json({errors});
  }
};

/**
 * add a new recipe to stock
 */
module.exports.addToStock = async (req, res) => {
  const {recipeId} = req.body;
  try {
    const newStock = await Stock.create({
      recipeId
    });
    return res.status(200).json({newStock});
  } catch(err) {
    const errors = handleErrors(err);
    return res.status(400).json({errors});
  }
}