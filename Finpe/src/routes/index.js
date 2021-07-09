const express = require("express");
const SiteController = require("../controllers/SiteController");
const router = express.Router();

/* GET home page. */
router.get("/", SiteController.home);

// router.get("/login", SiteController.login);

router.get("/main", SiteController.main);

// routes.get("/users", SiteController.index);

// routes.get("/users/:id", SiteController.show);

// routes.post("/users", SiteController.store);

// routes.put("/users/:id", SiteController.update);

// routes.delete("/users/:id", SiteController.destroy);

module.exports = router;
