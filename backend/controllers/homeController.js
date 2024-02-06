const express = require("express");
const router = express.Router();

const getHomePage = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to the Home Page!'
  });
};

module.exports = {
  getHomePage,
};
