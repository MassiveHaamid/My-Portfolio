import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      demo: "https://zen-csd-fe.vercel.app/",
    },
    {
      title: "Project 2",
      demo: "https://shopcrd.onrender.com/#",
    },
    {
      title: "Project 3",
      demo: "https://massivehaamid.github.io/day12-exec/",
    },
  ];

  return (
    <>
      <article
        className="common-inner animated clearfix bounceInDown"
        id="projects"
        style={{ display: "block", position: "relative", visibility: "visible" }}
      >
        <div className="profile-cont">
          <div className="profile-top">
            <h2>My <span>Projects</span></h2>
          </div><br />
          <div>
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <h3>{project.title}</h3>
                <p>
                  <a className="green" href={project.demo} target="_blank" rel="noopener noreferrer">View Demo</a>
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
