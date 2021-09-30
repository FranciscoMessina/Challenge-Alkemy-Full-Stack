module.exports = (sequelize, DataTypes) => {
	let alias = "User";
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
		tableName: "users",
	};
	const User = sequelize.define(alias, cols, config);

	return User;
};
