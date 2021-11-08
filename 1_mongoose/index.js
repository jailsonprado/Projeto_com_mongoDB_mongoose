const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const conn = require('./db/conn');

// routes
const productsRoutes = require('./routes/productsRoutes');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// read body
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.use(express.static('public'));
// using routes
app.use('/products', productsRoutes);

app.listen(3000);
