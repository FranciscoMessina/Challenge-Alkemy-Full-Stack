module.exports = (sequelize, DataTypes) => {
	let alias = "UserOperation";
	let cols = {
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	};
	let config = {
		tableName: "users_operations",
	};
	const User = sequelize.define(alias, cols, config);

	return User;
};
