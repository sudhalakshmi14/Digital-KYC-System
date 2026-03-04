const express = require('express');
const router = express.Router();
const { createUser, getUser } = require('../controllers/userController');
const auditMiddleware = require('../middlewares/auditMiddleware');

router.post('/', auditMiddleware('create_user'), createUser);
router.get('/:id', auditMiddleware('get_user'), getUser);

module.exports = router;