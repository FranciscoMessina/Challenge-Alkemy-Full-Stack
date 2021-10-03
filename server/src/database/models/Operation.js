module.exports = (sequelize, DataTypes) => {
	let alias = "Operation";
	let cols = {
		concept: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		amount: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	};
	let config = {
		tableName: "operations",
	};
	const Operation = sequelize.define(alias, cols, config);

	Operation.associate = models => {
		Operation.belongsTo(models.User);
	};

	return Operation;
};
