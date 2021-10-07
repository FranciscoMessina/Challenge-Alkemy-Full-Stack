const cors = require("cors");
const express = require("express");
const app = express();
const models = require("./database/models");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

const routes = require("./routes/routes");
app.use("/api", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Servidor corriendo en el puerto ${port}`);
});

// Esto crea la tabla en la base de datos. Con la informacion en ./database/models/Operation.js

// models.sequelize.sync().then(
// 	app.listen(port, () => {
// 		console.log(`Servidor corriendo en el puerto ${port}`);
// 	})
// );
