const express = require('express');
const router = express.Router();
const { RegisterUser, authUser } = require('../controllers/userController');
router.route('/').post(RegisterUser);

router.route('/login').post(authUser);

module.exports = router;
