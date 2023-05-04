import React from "react";
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
    <nav>
      <ul>
        <li><Link to ="/">About</Link></li>
        <li><Link to = "/portfolio">Portfolio</Link></li>
        <li><Link to ="/resume">Resume</Link></li>
        <li><Link to = "/contact">Contact</Link></li>
      </ul>
    </nav>
  );
  }
  
    