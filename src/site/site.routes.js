const express = require("express");
const SiteController = require("./SiteController");
const router = express.Router();

/* GET home page. */
router.get("/", SiteController.home);

router.get("/login", SiteController.login);

router.get("/main", SiteController.main);

module.exports = router;
