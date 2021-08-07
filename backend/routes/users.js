const express = require('express');
const router = express.Router();
const user = require('../controllers/Users');
const { eAdmin } = require('./login');

router.get('/', eAdmin, user.index);
router.get('/:id', eAdmin, user.show);
router.post('/', eAdmin, user.store);
router.put('/:id', eAdmin, user.update);
router.delete('/:id', eAdmin, user.destroy);

module.exports = router;
