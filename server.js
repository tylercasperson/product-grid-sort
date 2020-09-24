const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./models');
const productsRoute = require('./routes/products');
const path = require('path');

// sets up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// use cors
app.use(cors());

// routes
app.use(productsRoute);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

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
