const { Router } = require("express");
const router = Router();
const calculationController = require("../controllers/calculation");

router.post("/", calculationController.calculate);
router.get("/", calculationController.calculations);

module.exports = router;
