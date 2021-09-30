const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router
	.route("/")
	.post(controller.addOperation)
	.get(controller.getOperations)
	.put(controller.editOperation)
	.delete(controller.deleteOperation);

router.post("/register", controller.registerUser);
router.post("/login", controller.loginUser);

module.exports = router;
