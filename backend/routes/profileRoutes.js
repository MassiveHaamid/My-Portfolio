const express = require('express');
const profileController = require('../controllers/profileController');

const router = express.Router();

router.route('/profile').get(profileController.getProfilePage);

module.exports = router;