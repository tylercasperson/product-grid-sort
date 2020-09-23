const express = require('express');
const router = express.Router();
const db = require('../models');
const { Op } = require('sequelize');

router.get('/', function (req, res) {
  res.redirect('/api/products');
});

router.get('/api/products', async (req, res) => {
  try {
    const products = await db.products.findAll({});
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/api/products/:column/:sort', async (req, res) => {
  try {
    const products = await db.products.findAll({
      order: [[req.params.column, req.params.sort]],
    });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/api/products/:id', async (req, res) => {
  try {
    const products = await db.products.findAll({
      where: { id: { [Op.eq]: req.params.id } },
    });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.post('/api/products', async (req, res) => {
  try {
    const newProduct = await db.products.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
      imageURL: req.body.imageURL,
    });
    res.json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.put('/api/products/:id', async (req, res) => {
  try {
    const updateProduct = await db.products.update(
      {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        imageURL: req.body.imageURL,
      },
      { where: { id: { [Op.eq]: req.body.id } } }
    );
    res.json(updateProduct);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.delete('/api/products/:id', async (req, res) => {
  try {
    const removeProduct = await db.products.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(removeProduct);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
