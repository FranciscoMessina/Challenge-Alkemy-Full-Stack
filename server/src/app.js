const cors = require("cors");
const express = require("express");
const app = express();
const session = require("express-session");
const models = require("./database/models");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
	cors({
		origin: "http://localhost:3001",
		methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE", "PATCH"],
		credentials: true,
	})
);
app.use(cookieParser());

app.use(
	session({
		name: "uid",
		secret: "123456",
		saveUninitialized: false,
		resave: false,
		cookie: {
			maxAge: 1000 * 60 * 5 * 5,
			secure: false,
			httpOnly: true,
			sameSite: "lax",
		},
	})
);

app.use(express.static("public"));

const routes = require("./routes/routes");
app.use("/api", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`API corriendo en el puerto ${port}`);
});

// Esto crea la tabla en la base de datos(./database/config/config.json). Con la informacion en ./database/models/Operation.js

// models.sequelize.sync().then(
// 	app.listen(port, () => {
// 		console.log(`Servidor corriendo en el puerto ${port}`);
// 	})
// );
