const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./models');
const productsRoute = require('./routes/products');

// sets up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// use cors
app.use(cors());

// routes
app.use(productsRoute);

// Warning handler
process.on('warning', (warning) => {
  console.log(warning.stack);
});

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log(
      `Product grid sort ==> API server now listening on PORT ${PORT}!`
    );
  });
});
