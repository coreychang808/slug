'use strict';

const express = require('express');
const cors = require('cors');

// Prepare the express app
const app = express();

const slugRouter = require('./routes/slug-route.js');

// App Level MW
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes
app.use(slugRouter);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};