const cors = require("cors");
const express = require("express");
const app = express();
const models = require("./database/models");
const session = require("express-session");

app.use(cors());

app.use(
	session({
		name: "qid",
		saveUninitialized: false,
		secret: "qwertyuiopasdfghjkl",
		resave: false,
		cookie: {
			maxAge: 1000 * 60 * 5,
			httpOnly: true,
			secure: false,
			sameSite: "lax",
		},
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

const routes = require("./routes/routes");
app.use("/api", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Servidor corriendo en el puerto ${port}`);
});
