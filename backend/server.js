const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT;

connectDB();

const app = express();
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/dogs', require('./routes/dogRoutes'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Running on ${port}`);
  console.log(`SHOULD BE GOOD!`.green.bold);
});
