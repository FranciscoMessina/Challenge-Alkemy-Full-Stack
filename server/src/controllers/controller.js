const { Operation, User } = require("../database/models/index");
const argon = require("argon2");

module.exports = {
	addOperation: async (req, res) => {
		const { concept, amount, date, type } = req.body;
		const { id } = req.session.user;

		const operation = await Operation.create({
			concept,
			amount,
			date,
			type,
		});

		const user = await User.findOne({ where: { id } });

		await operation.setUser(user);

		res.json({
			type: "Add Operation",
			content: operation,
		});
	},
	getOperations: async (req, res) => {
		if (req.session.user) {
			const { id } = req.session.user;
			const user = await User.findOne({ where: { id } });

			const ops = await user.getOperations({
				limit: 10,
				order: [["date", "DESC"]],
			});

			const balance = await user
				.getOperations({
					attributes: ["amount"],
				})
				.then(values =>
					values.reduce((acc, value) => {
						return acc + value.toJSON().amount;
					}, 0)
				);

			return res.json({
				type: "Get Operations",
				data: ops,
				balance,
			});
		}

		// console.log(Object.keys(User.prototype));
		// console.log(Object.keys(Operation.prototype));

		return res.json({
			status: "error",
			message: "NOT_LOGGED_IN",
		});
	},
	editOperation: async (req, res) => {
		const { id, concept, amount, date } = req.body;

		const operation = await Operation.update(
			{ concept, amount, date },
			{ where: { id } }
		);

		res.json({
			type: "Edit Operation",
			operation,
		});
	},
	deleteOperation: async (req, res) => {
		const { id } = req.body;

		const op = await Operation.destroy({ where: { id } });

		res.json({
			id,
			op,
		});
	},
	register: async (req, res) => {
		const { email, password } = req.body;

		const existingUser = await User.findOne({ where: { email } });

		if (existingUser) {
			return res.json({
				status: "failed",
				message: "email already in use",
			});
		}

		const hashedPassword = await argon.hash(password);

		const user = await User.create({ email, password: hashedPassword });

		user.setDataValue("password", null);

		if (user) {
			req.session.user = user;
		}

		res.json({
			user,
		});
	},
	login: async (req, res) => {
		const { email, password } = req.body;

		const user = await User.findOne({ where: { email } });

		if (user) {
			const passwordMatch = await argon.verify(user.password, password);

			user.setDataValue("password", null);

			if (passwordMatch) {
				req.session.user = user;

				return res.json({
					status: "logged",
					user,
				});
			}
		}

		return res.json({
			status: "failed",
			message: "wrong password",
		});
	},
	checkAuth: async (req, res) => {
		const userSession = req.session.user;

		if (userSession) {
			res.json({
				logged: true,
				user: userSession,
			});
		} else {
			res.json({
				logged: false,
			});
		}
	},
	logout: async (req, res) => {
		req.session.destroy();
		res.json({
			logged: false,
		});
	},
};
