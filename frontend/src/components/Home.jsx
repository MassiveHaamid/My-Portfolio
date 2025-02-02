import React from "react";

const Home = () => {
  return (
    <article
      className="home-page animated bounceInDown"
      id="home"
      style={{ display: "block", paddingBottom: "40px" }}
    >
      <div className="row1">
        <div className="col-md-6 home-details">
          {/* Add the image inside a circle */}
          <div className="profile-image-container">
            <img
              src="../assets/Pro Mode Active.png;"
              alt="Haamid"
              className="profile-image"
            />
          </div>
          <h1>
            <span>Hello, I AM</span>
            <br />
            <div className="title-my-name">Haamid</div>
          </h1>
          <h2>Frontend and Backend Developer</h2>
          <hr />
          <p className="medium">
            <i>
              I am a full-stack engineer with expertise in Python, JavaScript,
              Go and frameworks like Django, FastAPI, Express, and Gin-Gonic. I
              have experience building scalable backend systems, developing
              APIs, and working with front-end technologies like Vue.js, React,
              Next.js, and VanillaJS. I have experience in blockchain and smart
              contract development with Solidity (ERC20 and ERC721). Working at
              Cocunat.com
            </i>
          </p>
        </div>
      </div>
    </article>
  );
};

export default Home;
