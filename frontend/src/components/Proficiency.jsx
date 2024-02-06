import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Proficiency = () => {
  return (
    <div>
      <h2>My Technical Skills</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon={faReact} /> React
        </li>
        <li>
          <FontAwesomeIcon icon={faNode} /> Node.js
        </li>
        <li>
          <FontAwesomeIcon icon={faDatabase} /> MongoDB
        </li>
        <li>
          <FontAwesomeIcon icon={faHtml5} /> HTML
        </li>
        <li>
          <FontAwesomeIcon icon={faCss3} /> CSS
        </li>
        <li>
          <FontAwesomeIcon icon={faJs} /> JavaScript
        </li>
        <li>
          <FontAwesomeIcon icon={faPython} /> Python
        </li>
      </ul>
    </div>
  );
};

export default Proficiency;
