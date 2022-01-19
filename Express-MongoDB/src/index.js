const express = require("express");

const morgan = require("morgan");

const route = require('./routes');

const db = require('./config/db');

const methodOverride = require('method-override');

db.connect();

var {
  engine
} = require("express-handlebars");

const path = require("path");

const app = express();

const port = 5000;

app.use(express.static(path.join(__dirname, "public")));
app.engine("hbs", engine({
  extname: ".hbs",
  helpers:{
    sum: (a, b) => a + b,
  }
}));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, 'resources', 'views'));

app.use(morgan("combined"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'));

route(app);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});