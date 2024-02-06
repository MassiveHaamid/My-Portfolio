const express = require("express");
const router = express.Router();

const getProfilePage = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to the Profile Page!',
    data: {
      name: 'Haamid',
      role: 'Back-end and Front-end Developer',
      email: 'reshma9298h@gmail.com',
      phone: '+34 630 24 52 53',
      birthday: 'March, 1992',
      city: 'Coimbatore, TN',
      about: 'I am a full-stack developer with expertise in JavaScript, Python, Go and frameworks like React, Express, Node.js, MongoDB and Django. I have experience building scalable backend systems, developing APIs, and working with front-end technologies like React, and VanillaJS. I have experience in blockchain and smart contract development with Solidity (ERC20 and ERC721). I am a technology and science enthusiast who actively seeks to expand my knowledge and skills through hands-on web development projects in my free time. I am also the co-founder of several successful ventures, including micuento.com, a mobile and social reading platform, devect.com, a software as a service platform, and Luracoin (luracoin.com), a cryptocurrency. Currently, I am dedicating my free time to further develop Luracoin.',
    }
  });
};

module.exports = {
  getProfilePage,
};
