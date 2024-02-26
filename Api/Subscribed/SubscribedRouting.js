const SubscribedController = require("./SubscribedController");
const router = require("express").Router();
router.post("/subscribed",SubscribedController.create);
router.post("/verify",SubscribedController.verify);
module.exports = router;