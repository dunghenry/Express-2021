const express = require("express");
const router = express.Router();

const newController = require('../app/controllers/NewsController');

router.get('/:slug', newController.show);
router.get('/', newController.index);

module.exports = router;