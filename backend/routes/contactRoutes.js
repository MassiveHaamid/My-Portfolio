const express = require('express');
const contactController = require('../controllers/contactController');

const router = express.Router();

router.route('/contact').get(contactController.getContactPage);

module.exports = router;
