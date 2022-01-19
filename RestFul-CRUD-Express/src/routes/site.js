const express = require("express");
const router = express.Router();
const siteController = require("../controller/SiteController");
router.get('/', siteController.home);
// router.get('*', siteController.pagenotfound);


module.exports = router;