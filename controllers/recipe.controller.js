const Recipe = require('../models/Recipe.model');

const handleErrors = (err) => {
  let errors = {};
  errors.message = err.message;
  return errors;
}

/**
 * get all the recipes
 */
module.exports.getRecipes = async (req, red) => {
  try {
    const recipeList = await Recipe.find();
    return res.status(200).json({recipeList});
  } catch(err) {
    const errors = handleErrors(err);
    return res.status(400).json({errors});
  }
};

/**
 * get a recipe from a recipeId
 * params: recipeId
 */
module.exports.getRecipe = async (req, res) => {
  const { recipeId } = req.params;
  try {
    const recipe = await Recipe.findById({_id: recipeId});
    return res.status(200).json({recipe});
  } catch(err) {
    const errors = handleErrors(err);
    return res.status(400).json({errors});
  }
};

/**
 * Insert a new recipe
 * body: recipe: 
 *  name: String, 
 *  totalPrice: {unit: Number, cents: Number}, 
 *  foods: [{foodId: ObjectId, quantity: String}]
 */
module.exports.insertRecipe = async (req, res) => {
  const { name, totalPrice, foods } = req.body;
  try {
    const newRecipe = await Recipe.create({
      name, totalPrice, foods
    });
    return res.status(201).json({newRecipe});
  } catch(err) {
    const errors = handleErrors(err);
    return res.status(400).json({errors});
  }
};

/**
 * update a recipe from recipeId
 * recipe: 
 *  name: String, 
 *  totalPrice: {unit: Number, cents: Number}, 
 *  foods: [{foodId: ObjectId, quantity: String}]
 */
module.exports.updateRecipe = async (req, res) => {
  const { recipeId } = req.params;
  const { name, totalPrice, foods } = req.body;

  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate({recipeId}, {name, totalPrice, foods});
    return res.status(201).json({ updatedRecipe });
  } catch(err) {
    const errors = handleErrors(err);
    return res.status(400).json({errors});
  }
};

/**
 * delete a recipe from recipeId
 * params: recipeId
 */
module.exports.deleteRecipe = async (req, res) => {
  const { recipeId } = req.params;

  try {
    const deletedRecipe = await Recipe.findByIdAndDelete({recipeId});
    return res.status(200).json({ deletedRecipe });
  } catch(err) {
    const errors = handleErrors(err);
    return res.status(400).json({ errors });
  }
}
