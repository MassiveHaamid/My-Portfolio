import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode, faImage } from "@fortawesome/free-solid-svg-icons";

const Proficiency = () => {
  return (
    <>
      <article
        className="common-inner animated clearfix bounceInDown"
        id="contact"
        style={{
          display: "block",
          position: "relative",
          visibility: "visible",
        }}
      >
        <div class="profile-cont">
          <div class="profile-top">
            <h2>
              My <span>Technical Skills</span>
            </h2>
          </div>
          <br />
          <br />
          <ul className="contact-details-list">
            <li>
              <FontAwesomeIcon icon={faReact} size="4x" color="blue" /> React
            </li>
            <li>
              <FontAwesomeIcon icon={faNode} size="4x" color="green" /> Node.js
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} size="4x" /> Express.js
            </li>
            <li>
              <FontAwesomeIcon icon={faDatabase} size="4x" color="orange" />{" "}
              MongoDB
            </li>
            <li>
              <FontAwesomeIcon icon={faHtml5} size="4x" color="red" /> HTML
            </li>
            <li>
              <FontAwesomeIcon icon={faCss3} size="4x" color="purple" /> CSS
            </li>
            <li>
              <FontAwesomeIcon icon={faJs} size="4x" color="yellow" />{" "}
              JavaScript
            </li>
            <li>
              <FontAwesomeIcon icon={faPython} size="4x" color="blue" /> Python
            </li>
            <li>
              <FontAwesomeIcon icon={faImage} size="4x" color="lightblue" />{" "}
              Photoshop
            </li>
          </ul>
        </div>
      </article>
    </>
  );
};

export default Proficiency;
