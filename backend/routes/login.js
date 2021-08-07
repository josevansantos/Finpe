const express = require('express');
const router = express.Router();
const controller = require('../controllers/Login');
const validaToken = require('../middleware/login');

// router.get('/valida', controller.validaToken);
router.post('/', controller.login);
router.post('/register', controller.register);

module.exports = router;
