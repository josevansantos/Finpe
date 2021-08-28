const express = require('express');
const router = express.Router();
const controller = require('../controllers/Login');

router.post('/', controller.login);
router.post('/register', controller.register);
router.get('/token', controller.validaToken);

module.exports = router;
