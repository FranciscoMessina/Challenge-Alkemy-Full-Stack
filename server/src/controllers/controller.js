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
		const operations = await db.Operation.findAll({
			limit: 10,
			order: [["createdAt", "DESC"]],
		});

		const balance = await db.Operation.findAll({
			attributes: ["amount"],
		}).then(values =>
			values.reduce((acc, value) => {
				return acc + value.toJSON().amount;
			}, 0)
		);

		res.json({
			type: "Get Operations",
			balance,
			data: operations,
		});
	},
	editOperation: (req, res) => {
		res.json({
			type: "Edit Operation",
		});
	},
	deleteOperation: async (req, res) => {
		const { id } = req.body;

		const op = await db.Operation.destroy({ where: { id } });

		res.json({
			id,
			op,
		});
	},
};
