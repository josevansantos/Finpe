const express = require('express');
const router = express.Router();
const transaction = require('../controllers/Transactions');
const { eAdmin } = require('./login');

router.get('/', eAdmin, transaction.index);
router.get('/:id', eAdmin, transaction.show);
router.post('/', eAdmin, transaction.store);
router.put('/:id', eAdmin, transaction.update);
router.delete('/:id', eAdmin, transaction.destroy);

module.exports = router;
