const express = require("express");
const router = express.Router();

const siteController = require('../controller/SiteController');

router.get('/about', siteController.aboutpage);
router.get('/', siteController.index);
router.get('*', siteController.pagenotfound);

module.exports = router;