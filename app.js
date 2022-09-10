const express = require('express');
require('module-alias/register');
require('dotenv').config();

const db = require('@helpers/database.js');

const app = express();
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