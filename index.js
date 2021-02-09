import express from 'express';
// import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// import router as userRouter from './routes/users.js'; no need to alias explicitly here
import userRouter from './routes/users.js';
import photoRouter from './routes/photos.js';

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;

app.use(cors()); // cors middleware to allow cross origin requests (from the front end?)
app.use(express.json()); // server will send and receive json

app.get('/', (req, res) => {
	res.send("Welcome to Photo Fave Server!");
});

const uri = process.env.ATLAS_URI;

// flags to avoid deprecation warnings https://mongoosejs.com/docs/deprecations.html
// might want to put connect in a try/catch
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
mongoose.connection.once('open', () => {
	console.log("MongoDB database connection is open");
});

app.use('/users', userRouter);
app.use('/photos', photoRouter);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
