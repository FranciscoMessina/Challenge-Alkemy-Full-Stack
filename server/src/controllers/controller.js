const db = require("../database/models/index");
const argon = require("argon2");

module.exports = {
	addOperation: async (req, res) => {
		const { concept, amount, date, type } = req.body;

		const operation = await db.Operation.create({
			concept,
			amount,
			date,
			type,
		});

		const user = await db.User.findOne({ where: { id: 1 } });

		operation.setUser(user);

		res.json({
			type: "Add Operation",
			content: operation,
		});
	},
	getOperations: async (req, res) => {
		const info = await db.User.findOne({ where: { id: req.session.userId } });

		const ops = await info.getOperations();

		res.json({
			type: "Get Operations",
			info,
			ops,
		});
	},
	editOperation: (req, res) => {
		res.json({
			tpye: "Edit Operation",
		});
	},
	deleteOperation: (req, res) => {
		res.json({
			type: "Delete Operation",
		});
	},
	registerUser: async (req, res) => {
		const { email, password } = req.body;

		try {
			const hashedPassword = await argon.hash(password);

			const user = await db.User.create({
				email: email,
				password: hashedPassword,
			});

			res.json({
				type: "Register User",
				id: user.id,
			});
		} catch (err) {
			console.log(err);
		}
	},
	loginUser: async (req, res) => {
		const { email, password } = req.body;

		const user = await db.User.findOne({ where: { email } });

		const match = await argon.verify(user.password, password);

		if (match) {
			req.session.userId = user.id;
			console.log(req.session.userId);

			res.json({
				type: "Login",
				user: true,
			});
		} else {
			res.json({
				type: "Login",
				user: false,
			});
		}
	},
	checkAuth: async (req, res) => {
		if (!req.session.userId)
			return res.json({
				user: false,
			});

		const user = await db.User.findOne({ where: { id: req.session.userId } });
		if (user) {
			return res.json({
				user: true,
				email: user.email,
			});
		}
	},
};
