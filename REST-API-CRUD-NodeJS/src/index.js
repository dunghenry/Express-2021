const express = require('express');

const path = require('path');
const methodOverride = require('method-override')
const API = require('./routes/api.js');

const expressLayouts = require('express-ejs-layouts');

const morgan = require('morgan');

const mongoose = require('mongoose');

const route = require('./routes');

require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'));

API(app);

app.use(express.static('src/public'));

app.use(expressLayouts);

const connectDB = async () =>{
  try {
    await mongoose.connect(process.env.MONGODB_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Connect database successfully!!")
  } catch (error) {
    console.error("Connect database failed!!")
  }
}

connectDB();

app.set("views", path.join(__dirname, 'views'));

app.set('layout', './layouts');

app.set('view engine', 'ejs');

app.use(morgan('combined'));

const port = process.env.PORT || 3000;



//Use routes
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})