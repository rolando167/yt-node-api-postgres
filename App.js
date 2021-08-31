const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT;

//Routes
app.use('/api/v1', require('./src/routes'))


app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT} 👍`);
});