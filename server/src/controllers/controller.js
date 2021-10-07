const db = require("../database/models/index");

module.exports = {
	addOperation: async (req, res) => {
		const { concept, amount, date, type } = req.body;

		const operation = await db.Operation.create({
			concept,
			amount,
			date,
			type,
		});

		res.json({
			type: "Add Operation",
			content: operation,
		});
	},
	getOperations: async (req, res) => {
		const operations = await db.Operation.findAll();

		res.json({
			type: "Get Operations",
			operations,
		});
	},
	editOperation: (req, res) => {
		res.json({
			type: "Edit Operation",
		});
	},
	deleteOperation: (req, res) => {
		res.json({
			type: "Delete Operation",
		});
	},
};
