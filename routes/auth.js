const { Router } = require("express");
const authController = require("../controllers/auth");
const router = Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

module.exports = router;
