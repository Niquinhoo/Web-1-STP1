const express = require('express');
const router = express.Router();
const { productos, publicidades, categorias } = require('../data/db');

router.get('/', (req, res) => {
    res.render('pages/home/home-page', { productos, publicidades, categorias });
});

module.exports = router;