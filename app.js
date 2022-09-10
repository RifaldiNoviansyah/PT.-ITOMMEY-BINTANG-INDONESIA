require('module-alias/register');
require('dotenv').config();

const express = require('express');
const path = require('path');
const db = require('@helpers/database.js');
const apiRoute = require('./routes/api/apiRouteIndex');
const app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: false, limit: '50mb'}));
app.use(express.static(path.join(__dirname, 'file')));
app.use('/', apiRoute);
app.get('*', (req, res) => res.status(200).send(
    {message: 'Welcome to API Test PT ITOMMEY BINTANG INDONESIA'}));


db.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
