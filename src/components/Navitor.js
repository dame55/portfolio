import React, { Component } from "react";
import './Navitor.css';
import { Link } from 'react-router-dom';

function Navitor() {
  return (
    <div className="Navitor">
      
<nav>
    <a className="logo" href=''>
<h1>D<span>ame</span></h1>
</a>
<ul className="navi">

<li>
   <Link to="/">Home</Link>
</li>
<li>
    <Link to="/About">About</Link>
</li>
<li>
  <Link to="/Skills">Skills</Link>
</li>
<li>
   <Link to="/Contact">Contact</Link>
</li>



</ul>

</nav>
      
    </div>
  );
}

export default Navitor;