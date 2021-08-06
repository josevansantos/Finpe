const express = require('express');
const router = express.Router();
const transaction = require('../controllers/Transactions');

router.get('/', transaction.index);
router.get('/:id', transaction.show);
router.post('/', transaction.store);
router.put('/:id', transaction.update);
router.delete('/:id', transaction.destroy);

module.exports = router;
