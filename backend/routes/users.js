const express = require('express');
const router = express.Router();
const user = require('../controllers/users');

/* GET users listing. */
router.get('/', user.index);
router.get('/', user.show);
router.post('/', user.store);
router.post('/', user.update);
router.delete('/', user.destroy);

module.exports = router;
