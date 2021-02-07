const { Router } = require('express');
const router = Router();

const {
  getRecipes,
  getRecipe,
  insertRecipe,
  updateRecipe,
  deleteRecipe
} = require('../controllers/recipe.controller');

const BASE_NAME = "recipes";

router.get(`/${BASE_NAME}`, getRecipes);
router.get(`/${BASE_NAME}/:recipeId`, getRecipe);
router.post(`/${BASE_NAME}`, insertRecipe);
router.put(`/${BASE_NAME}/:recipeId`, updateRecipe);
router.delete(`/${BASE_NAME}/:recipeId`, deleteRecipe);


module.exports = router;