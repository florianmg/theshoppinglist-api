const Food = require('../models/Food.model');

const handleErrors = (err) => {
  let errors = {};
  errors.message = err.message;
  return errors;
}

/**
 * Insert a new food
 * body: name: string - price: {unit: Number, cents: Number}
 */
module.exports.insertFood = async (req, res) => {
  const {name, price} = req.body;
  try {
    const newFood = await Food.create({
      name,
      price
    });
    return res.status(201).json({newFood});
  } catch (err) {
    const errors = handleErrors(err);
    return res.status(400).json({errors});
  }
}

/**
 * Get a list of all foods
 */
module.exports.getFoods = async (req, res) => {
  try {
    const foodList = await Food.find();
    return res.status(201).json({foodList});
  } catch (err) {
    const errors = handleErrors(err);
    return res.status(400).json({errors});
  }
}

/**
 * Get a food item from his id
 * params: foodId
 */
module.exports.getFood = async (req, res) => {
  const { foodId } = req.params;
  try {
    const food = await Food.findById({foodId});
    return res.status(201).json({food});
  } catch (err) {
    const errors = handleErrors(err);
    return res.status(400).json({errors});
  }
}

/**
 * Get a foodList from a category ID
 */
module.exports.getFoodsByCategory = async (req, res) => {
  // TODO
}

/**
 * Delete a food item from his category
 * params: foodId
 */
module.exports.deleteFood = async (req, res) => {
  const { foodId } = req.params;
  try {
    const deletedFood = await Food.findOneAndDelete({_id: foodId});
    return res.status(200).json({deletedFood});
  } catch(err) {
    const errors = handleErrors(err);
    return res.status(400).json({errors});
  }

}

/**
 * Update food
 * params: foodId
 * body: name: string - price: {unit: Number, cents: Number}
 */
module.exports.updateFood = async (req, res) => {
  const { foodId } = req.params;
  const { name, price } = req.body;

  try {
    const updatedFood = findOneAndUpdate({_id: foodId}, {name, price});
    return res.status(201).json({updatedFood});
  } catch(err) {
    const errors = handleErrors(err);
    return res.status(400).json({errors});
  }
}