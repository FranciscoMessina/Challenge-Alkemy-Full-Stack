module.exports = {
	addOperation: (req, res) => {
		const { concept, amount, date, type } = req.body;

		res.json({
			type: "Add Operation",
		});
	},
	getOperations: (req, res) => {
		res.json({
			type: "Get Operations",
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
	registerUser: (req, res) => {
		res.json({
			type: "Register User",
		});
	},
	loginUser: (req, res) => {
		res.json({
			type: "Login User",
		});
	},
};
