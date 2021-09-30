module.exports = (sequelize, dataTypes) => {
	let alias = "Operation";
	let cols = {
		concept: {
			type: dataTypes.STRING,
			allowNull: false,
		},
		amount: {
			type: dataTypes.INTEGER,
			allowNull: false,
		},
		date: {
			type: dataTypes.DATE,
		},
		type: {
			type: dataTypes.STRING,
		},
	};
	let config = {
		tableName: "users",
	};
	const User = sequelize.define(alias, cols, config);

	return User;
};
