const express = require('express');

const morgan = require('morgan');

const configViewEngine = require('./configs/viewEngine.js');

const API = require('./routes/api.js');

const route = require('./routes');

require('dotenv').config();

const app = express();

//Use morgane(loger)
app.use(morgan('combined'));

const port = process.env.PORT || 4200;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Config view engine
configViewEngine(app);

//Use routers
route(app);

API(app);

app.use((req, res)=>{
  return res.render('404.ejs');
})

//Listen port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})