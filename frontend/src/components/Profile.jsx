import React from "react";

const Profile = () => {
  const prstyle = {
    display: "block",
    position: "relative",
    visibility: "visible",
  };

  return (
    <>
      <article
        className="common-inner animated clearfix bounceInDown"
        id="profile"
        style={prstyle}
      >
        <div className="profile-cont">
          <div className="profile-top">
            <br />
            {/* Profile Image */}
            <div className="profile-image-container">
              <img
                src="/Pro Mode Active.png"
                alt="Haamid"
                className="profile-image"
              />
            </div>
            <br />
            <h2>
              Hello, I am <span>Haamid</span>
            </h2>
            <h3>Back-end and Front-end Developer</h3>
          </div>
          <br />
          <div className="row profile-middle-content clearfix">
            <div className="col-md-6">
              <h3>About me</h3>
              <p>
                I am a full-stack developer with expertise in JavaScript,
                Python, Go and frameworks like React, Express, Node.js, MongoDB
                and Django. I have experience building scalable backend systems,
                developing APIs, and working with front-end technologies like
                React, and VanillaJS. I have experience in blockchain and smart
                contract development with Solidity (ERC20 and ERC721).
              </p>
              <p>
                I am a technology and science enthusiast who actively seeks to
                expand my knowledge and skills through hands-on web development
                projects in my free time. I am also the co-founder of several
                successful ventures, including micuento.com, a mobile and social
                reading platform, devect.com, a software as a service platform,
                and Luracoin (luracoin.com), a cryptocurrency. Currently, I am
                dedicating my free time to further develop Luracoin.
              </p>
            </div>
            <br />
            <div className="col-md-6">
              <div className="prof-personal-details">
                <br />
                <h4>Personal Details</h4>
                <div style={{ background: "#373737" }}>
                  <p className="light">
                    <b>Name :</b> Haamid
                  </p>
                  <p className="dark">
                    <b>Birthday :</b> March, 1992
                  </p>
                  <p className="light">
                    <b>City :</b> Coimbatore, TN
                  </p>
                  <p className="dark">
                    <b>Email :</b> reshma9298h@gmail.com
                  </p>
                  <p className="light">
                    <b>Phone :</b> +34 630 24 52 53
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <a
            href="https://www.leetcv.com/r/reshma_h_1327"
            target="_blank"
            className="download-resume"
          >
            <span className="solid">
              Download <b>My CV</b>
            </span>
          </a>
        </div>
      </article>
    </>
  );
};

export default Profile;
