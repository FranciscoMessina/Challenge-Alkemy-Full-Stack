const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router
	.route("/operations")
	.post(controller.addOperation)
	.get(controller.getOperations)
	.patch(controller.editOperation)
	.delete(controller.deleteOperation);

router.get("/login", controller.checkAuth);
router.post("/login", controller.login);
router.post("/register", controller.register);
router.post("/logout", controller.logout);

module.exports = router;
