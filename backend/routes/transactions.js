const express = require('express');
const router = express.Router();
const transaction = require('../controllers/Transactions');
const { validaToken } = require('../middleware/login');

router.get('/', validaToken, transaction.index);
router.get('/:id', validaToken, transaction.show);
router.post('/', validaToken, transaction.store);
router.put('/:id', validaToken, transaction.update);
router.delete('/:id', validaToken, transaction.destroy);

module.exports = router;
