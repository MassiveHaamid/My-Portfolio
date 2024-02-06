const express = require("express");
const router = express.Router();

const getContactPage = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to the Contact Page!',
    data: {
      name: 'Haamid',
      role: 'Back-end and Front-end Developer',
      email: 'reshma9298h@gmail.com',
      phone: '+34 630 24 52 53'
    }
  });
};

module.exports = {
  getContactPage,
};