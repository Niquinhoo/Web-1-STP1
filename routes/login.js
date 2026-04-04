const express = require('express');
const router = express.Router();

// Ruta GET: Renderiza la página de Login
router.get('/', (req, res) => {
    res.render('pages/login/login-page');
});

// Ruta POST: Maneja el inicio de sesión cuando se envía el formulario
router.post('/', (req, res) => {
    console.log('Intento de Login:', req.body.email);
    // Tras el login, redirige al inicio (o a donde prefieras)
    res.redirect('/');
});

module.exports = router;