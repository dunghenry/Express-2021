const express = require("express");

const path = require("path");

const methodOverride = require('method-override');

require("dotenv").config();

const morgan = require("morgan");

const indexRouter = require("./routes");
const authorRouter = require("./routes/authors.js");
const bookRouter = require("./routes/books.js");

const expressLayouts = require("express-ejs-layouts");

const app = express();

app.use(methodOverride('_method'));

app.use(express.json());

app.use(express.urlencoded({limit: '10mb', extended: false }));

app.use(morgan("combined"));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.set("layout", "layouts/layout");

app.use(expressLayouts);

app.use(express.static("public"));

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect database successfully!!");
  } catch (error) {
    console.error("Connect database failed!!");
  }
};

connectDB();

const port = process.env.PORT || 5000;

app.use("/authors", authorRouter);
app.use('/books', bookRouter);
app.use("/", indexRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
