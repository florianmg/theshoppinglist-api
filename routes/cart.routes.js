const { Router } = require('express');
const router = Router();

const BASE_NAME = "cart";

const {
  getCart,
  addToCart,
  deleteFromCart
} = require('../controllers/cart.controller');

router.get(`/${BASE_NAME}`, getCart);
router.post(`/${BASE_NAME}`, addToCart);
router.put(`/${BASE_NAME}/:cartId`, deleteFromCart);

module.exports = router;