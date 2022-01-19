const express = require('express');

const exphbs = require('express-handlebars');

const dotenv = require('dotenv');

// const bodyParser = require('body-parser')

const methodOverride = require('method-override');
// Khoi dong app
const connectDB = require('./config/db');

// Nhap khau router
const posts = require('./routes/posts');

const app = express();

// Khoi dong middleware

app.engine('handlebars', exphbs());

app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

app.use(express.json());

// Kn csdl

connectDB();
// Mang routers vào sd
app.get('/', (req, res) => res.render('index'));

app.get('/about', (req, res) => res.render('about'));

app.use('/posts', posts);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Khoi dong tai port ${PORT}`));
