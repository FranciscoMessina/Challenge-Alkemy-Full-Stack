const cors = require("cors");
const express = require("express");
const app = express();

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
