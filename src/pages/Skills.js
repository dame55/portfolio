import React from "react";
import Navitor from "../components/Navitor";
import './Styles.css';

function Skills() {
  return (
    <div className="skills">
      
<Navitor/>
<div className="skill">
      <h1>My Skill</h1>
      <li><h3>Javascript</h3></li>

      <div className="bar"><span className="javascript"></span></div>
     
<li><h3>Java</h3></li>

<div className="bar"><span className="java"></span></div>
<li><h3>Mobile Apps</h3></li>

<div className="bar"><span className="mobile"></span></div>
<li><h3>HTML & CSS</h3></li>

<div className="bar"><span className="html"></span></div>
<li><h3>C++</h3></li>

<div className="bar"><span className="c"></span></div>
    </div>
    </div>
  );
}

export default Skills;