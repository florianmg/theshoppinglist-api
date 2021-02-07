const { Router } = require('express');
const router = Router();

const { 
  getFoods, 
  getFood,
  insertFood, 
  deleteFood, 
  updateFood 
} = require('../controllers/food.controller');

const BASE_NAME = "food";

router.get(`/${BASE_NAME}`, getFoods);
router.get(`/${BASE_NAME}/:foodId`, getFood);
router.post(`/${BASE_NAME}`, insertFood);
router.put(`/${BASE_NAME}/:foodId`, updateFood);
router.delete(`/${BASE_NAME}/:foodId`, deleteFood);

module.exports = router;