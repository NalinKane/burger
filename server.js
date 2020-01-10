require("dotenv").config();

const express = require("express");
const handlebars = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
