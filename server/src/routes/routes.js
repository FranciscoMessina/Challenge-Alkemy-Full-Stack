const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router
	.route("/operations")
	.post(controller.addOperation)
	.get(controller.getOperations)
	.put(controller.editOperation)
	.delete(controller.deleteOperation);

module.exports = router;
