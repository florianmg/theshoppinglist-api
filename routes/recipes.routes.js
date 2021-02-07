const { Router } = require('express');
const router = Router();

const BASE_NAME = "recipes";

router.get(`/${BASE_NAME}`, (req, res) => console.log('recipe get'))

module.exports = router;