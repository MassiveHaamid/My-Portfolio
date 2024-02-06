const express = require("express");
const router = express.Router();

const getProficiencyPage = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to the Proficiency Page!',
    data: {
      skills: [
        { name: 'React', icon: 'faReact' },
        { name: 'Node.js', icon: 'faNode' },
        { name: 'MongoDB', icon: 'faDatabase' },
        { name: 'HTML', icon: 'faHtml5' },
        { name: 'CSS', icon: 'faCss3' },
        { name: 'JavaScript', icon: 'faJs' },
        { name: 'Python', icon: 'faPython' }
      ]
    }
  });
};

module.exports = {
  getProficiencyPage,
};
