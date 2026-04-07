const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const dummyCartItems = [
        { title: 'Hamburguesa Smash', image: '/assets/productos/hamburguesasmash.png', price: 1500, quantity: 2 },
        { title: 'Pizza Napolitana', image: '/assets/productos/pizzanapo.png', price: 2000, quantity: 1 }
    ];
    const dummyTotal = dummyCartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    res.render('pages/cart/cart-page', { cartItems: dummyCartItems, cartTotal: dummyTotal });
});

module.exports = router;