const express = require('express');
const router = express.Router();
const user = require('../controllers/Users');
const { validaToken } = require('../middleware/login');

router.get('/', validaToken, user.index);
router.get('/:id', validaToken, user.show);
router.post('/', user.store);
router.put('/:id', validaToken, user.update);
router.delete('/:id', validaToken, user.destroy);

module.exports = router;
