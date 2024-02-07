import React from "react";

const Projects = () => {
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

  return (
    <>
    <article
    className="common-inner animated clearfix bounceInDown"
    id="projects"
    style={{ display: "block", position: "relative", visibility: "visible" }}
    >
    <div class="profile-cont">
    <div class="profile-top">
    <h2>My <span>Projects</span></h2>
    </div><br />
    <div>
    {projects.map((project, index) => (
    <div key={index}>
    <h3>{project.title}</h3>
    <p>
    <a className="green" href={project.sourceCode}>Source Code</a> |{" "}
    <a className="green" href={project.demo}>Demo</a>
    </p>
    </div>
    ))}
    </div>
    </div>
    </article>
    </>
  );
};

export default Projects;
