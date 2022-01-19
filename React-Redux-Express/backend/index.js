const express = require('express');

const cors = require('cors');

const corsOptions ={
  origin:'*', 
  // credentials:true,
  optionSuccessStatus:200
}


const mongoose = require('mongoose');

const morgan = require("morgan");

const API = require('./routes/api.js');

require('dotenv').config();

const route = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: false}));

app.use(express.json());

app.use(cors(corsOptions));

API(app);

const port = process.env.PORT || 6000;

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

app.use(express.static('public'));

app.use(morgan("combined"));

app.set('view engine', 'ejs');


route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})