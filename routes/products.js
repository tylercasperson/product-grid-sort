const express = require('express');
const router = express.Router();
const db = require('../models');
const { Op, QueryTypes } = require('sequelize');

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

router.delete('/api/product/deleteAll', async (req, res) => {
  try {
    const removeAll = db.sequelize.query('DELETE FROM products;', {
      type: QueryTypes.DELETE,
    });
    res.json(removeAll);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.post('/api/product/reset', async (req, res) => {
  try {
    const originalData = await db.sequelize.query(
      "INSERT INTO products (title,description,price,quantity,imageURL,createdAt,updatedAt) VALUES ('cabinet','Hickory cabinet, pull down desk, 3 drawer, 5 shelve sections','100.00','30','https://cdn.pixabay.com/photo/2019/02/19/09/08/cabinet-4006406_1280.png','2020-09-21 00:00:00','2020-09-21 00:00:00'),('tall cabinet','Tall cabinet, light hickory, 1 drawer, 3 shelve sections','120.00','10','https://cdn.pixabay.com/photo/2014/07/03/19/15/tall-cabinet-383165_1280.jpg','2020-09-21 00:00:00','2020-09-21 00:00:00'),('typewritter','Manual typewriter restored from 1970','300.00','1','https://cdn.pixabay.com/photo/2016/01/13/16/29/typewriter-1138293_1280.png','2020-09-21 00:00:00','2020-09-21 00:00:00'),('almonds','Cup of almonds to snack on','5.00','100','https://cdn.pixabay.com/photo/2015/05/15/14/47/almonds-768699_1280.jpg','2020-09-21 00:00:00','2020-09-21 00:00:00'),('wooden camera','Camera carved from pine wood','50.00','5','https://cdn.pixabay.com/photo/2016/09/28/10/18/camera-1700110_1280.jpg','2020-09-21 00:00:00','2020-09-21 00:00:00');",
      { type: QueryTypes.INSERT }
    );
    res.json(originalData);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
