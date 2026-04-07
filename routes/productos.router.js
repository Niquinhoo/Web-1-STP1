const express = require('express');
const router = express.Router();
const { productos, categorias } = require('../data/db');

router.get('/', (req, res) => {
    res.redirect('/');
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const producto = productos.find(p => p.id === id);

    if (producto) {
        const relatedProducts = productos.filter(p => p.category === producto.category && p.id !== id);
        res.render('pages/product/product-detail-page', { producto, relatedProducts, categorias });
    } else {
        // shuffle and slice for suggested products
        const randomProducts = [...productos].sort(() => 0.5 - Math.random()).slice(0, 4);
        res.render('pages/product/product-not-found-page', { randomProducts, categorias });
    }
});

module.exports = router;
