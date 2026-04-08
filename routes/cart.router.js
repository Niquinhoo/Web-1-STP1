const express = require('express');
const router = express.Router();

const { productos } = require('../data/db');

router.get('/', (req, res) => {
    // Importamos productos de la DB y les agregamos cantidad
    const cartItems = [
        { ...productos[0], quantity: 2 }, // Burger Smash XL (1200) * 2 = 2400
        { ...productos[1], quantity: 1 }  // Pizza Napolitana (1500) * 1 = 1500
    ];
    
    const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    
    res.render('pages/cart/cart-page', { cartItems, cartTotal });
});

module.exports = router;