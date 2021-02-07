const { Router } = require('express');
const router = Router();

const { 
  getFoods, 
  insertFood, 
  deleteFood, 
  updateFood 
} = require('../controllers/food.controller');

const BASE_NAME = "food";

router.get(`/${BASE_NAME}`, getFoods);
router.post(`/${BASE_NAME}`, insertFood);
router.put(`/${BASE_NAME}`, updateFood);
router.delete(`/${BASE_NAME}`, deleteFood);

module.exports = router;