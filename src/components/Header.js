import React from "react";
import noPicture from "./assets/noPicture.png"

export default function Header() {
    return (
      <header>
        <div className="container header__container">
          <h4>Hello I'm</h4>
          <h1>Kevin Lang</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <img src={noPicture} alt="nopicture"></img>

        </div>
      </header>
    );
  }