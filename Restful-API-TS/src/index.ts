import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
dotenv.config();
import routes from './routes';

const app = express();
const port = process.env.PORT || 8080;
//middlware
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//databas
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connect database successfully!!")
    } catch (error) {
        console.error("Connect database failed!!")
    }
}

connectDB();

// routes
app.use('/api', routes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })
