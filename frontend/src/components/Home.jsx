import React from "react";

const Home = () => {
  return (
    <article
      className="home-page animated bounceInDown"
      id="home"
      style={{ display: "block", paddingBottom: "40px" }}
    >
      <div className="home-page">
        <div className="profile-top">
          {/* Add the image inside a circle */}
          <div className="profile-image-container">
            <img
              src="/Pro Mode Active.png"
              alt="Haamid"
              className="profile-image"
            />
          </div>
          <br />
          <br />
          <h1>
            <span>Hello, I'M</span>
            <br />
            <div className="title-my-name">Haamid</div>
            <br />
          </h1>
          <h2>Frontend and Backend Developer</h2>
          <hr />
        </div>
        <p className="medium">
          <i>
            Looking for a skilled MERN Stack Developer to bring your web ideas
            to life? I'm Hamid, with a B.sc, in Computer Science and over 3
            years of experience. I specialize in MongoDB, Express, React, and
            Nodejs delivering full-stack solutions with intuitive designs and
            secure systems. I completed a full-stack course through GUVI at the
            IITM Research Park. Let's collaborate to create high-quality,
            responsive web applications that turn your vision into reality!
          </i>
        </p>
      </div>
    </article>
  );
};

export default Home;
