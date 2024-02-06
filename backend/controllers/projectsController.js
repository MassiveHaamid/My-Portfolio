const express = require("express");
const router = express.Router();

const getProjectsPage = (req, res) => {
  const projects = [
    {
      title: "Project 1",
      sourceCode: "https://github.com/project1",
      demo: "https://demo.project1",
    },
    {
      title: "Project 2",
      sourceCode: "https://github.com/project2",
      demo: "https://demo.project2",
    },
    {
      title: "Project 3",
      sourceCode: "https://github.com/project3",
      demo: "https://demo.project3",
    },
  ];

  res.json(projects);
};

module.exports = {
  getProjectsPage,
};
