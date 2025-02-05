import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div>
      <article
        className="common-inner animated clearfix bounceInDown"
        id="contact"
        style={{ display: "block", position: "relative", visibility: "visible" }}
      >
        <div className="contact-page">
          <div className="profile-top">
            {/* Profile Image */}
            <div className="profile-image-container">
              <img
                src="/Pro Mode Active.png" // Ensure it's inside `public/`
                alt="Haamid"
                className="profile-image"
              />
            </div><br /><br />
            <h2>
              Hello, I am <span>Haamid</span>
            </h2>
            <h3>Back-end and Front-end Developer</h3>
          </div>
          <ul className="contact-details-list">
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> 
              <a className="green" href="mailto:reshma9298h@gmail.com">xxx-xxx-xxx@gmail.com</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> 
              <a className="green" href="tel:+34630245253">+91-xxx-xxx-xxx</a>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default Contact;