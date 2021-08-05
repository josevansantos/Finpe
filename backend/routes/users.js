const express = require('express');
const router = express.Router();
const user = require('../controllers/Users');

router.get('/', user.index);
router.get('/:id', user.show);
router.post('/', user.store);
router.post('/:id', user.update);
router.delete('/:id', user.destroy);

module.exports = router;
