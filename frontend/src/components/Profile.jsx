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
        <div className="profile-page">
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
                Looking for a skilled MERN Stack Developer to bring your web
                ideas to life? I'm Hamid, with a B.sc, in Computer Science and
                over 3 years of experience. I specialize in MongoDB, Express,
                React, and Nodejs delivering full-stack solutions with intuitive
                designs and secure systems. I completed a full-stack course
                through GUVI at the IITM Research Park. Let's collaborate to
                create high-quality, responsive web applications that turn your
                vision into reality!
              </p>
              <p>
                Developed responsive web applications using the MERN stack,
                resulting in enhanced user engagement and satisfaction through
                visually appealing interfaces. Implemented performance
                optimization techniques that significantly improved application
                loading times and overall user experience. Executed mobile-first
                design strategies to ensure seamless functionality across
                devices, broadening user accessibility and reach. Completed a
                full stack development course at GUVI is an IIT-Madras and 
                IIM-Ahmedabad incubated company based in Chennai, India. which
                further honed my expertise and allowed me to deliver
                high-quality full-stack solutions. Provided ongoing maintenance
                and support for web applications, leading to increased
                reliability and sustained long-term client satisfaction.
              </p>
            </div>
            <br />
            <div className="col-md-6">
              <div className="prof-personal-details">
                <br />
                <h4>Personal Details</h4>
                <div style={{ background: "#373737" }}>
                  <p className="light">
                    <b>Name :</b> Mohammed Haamid
                  </p>
                  <p className="dark">
                    <b>Birthday :</b> March, 1992
                  </p>
                  <p className="light">
                    <b>City :</b> Coimbatore, TN
                  </p>
                  <p className="dark">
                    <b>Email :</b> xxx-xxx-xxx@gmail.com
                  </p>
                  <p className="light">
                    <b>Phone :</b> +91 xxx-xxx-xxx
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <a
            href="https://www.leetcv.com/mock-resume"
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
