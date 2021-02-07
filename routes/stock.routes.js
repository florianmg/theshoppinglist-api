const { Router } = require('express');
const router = Router();

const BASE_NAME = "stock";

const {
  getStock,
  addToStock,
  deleteFromStock
} = require('../controllers/stock.controller');

router.get(`/${BASE_NAME}`, getStock);
router.post(`/${BASE_NAME}`, addToStock);
router.put(`/${BASE_NAME}/:stockId`, deleteFromStock);

module.exports = router;