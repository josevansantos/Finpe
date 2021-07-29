const express = require('express');
const router = express.Router();
const transaction = require('../controllers/transactions');

router.get('/', transaction.index);
router.get('/', transaction.show);
router.post('/', transaction.store);
router.post('/', transaction.update);
router.delete('/', transaction.destroy);

module.exports = router;
