const { Router } = require('express');
const router = Router();

const BASE_NAME = "food";

router.get(`/${BASE_NAME}`, (req, res) => console.log(`/${BASE_NAME} GET`))

module.exports = router;