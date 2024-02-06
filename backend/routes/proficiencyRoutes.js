const express = require('express');
const proficiencyController = require('../controllers/proficiencyController');

const router = express.Router();

router.route('/proficiency').get(proficiencyController.getProficiencyPage);

module.exports = router;