// ForgetPasswordRouting.js
const ForgetController = require("./ForgetPasswordController");
const router = require("express").Router();

router.post("/createotp", ForgetController.createotp);
router.post("/verifyotp", ForgetController.verifyotp);

module.exports = router;
