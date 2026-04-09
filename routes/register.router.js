const express = require('express');
const router = express.Router();

// Ruta GET: Muestra el formulario de registro
router.get('/', (req, res) => {
    res.render('pages/register/register-page');
});

// Ruta POST: Procesa los datos de registro (fallback de éxito)
router.post('/', (req, res) => {
    console.log('Registro exitoso para:', req.body.email);
    // Simula éxito y redirige al inicio para respetar el flujo de navegación
    res.redirect('/home');
});

module.exports = router;