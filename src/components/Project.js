import React from "react";

export default function Project() {
    return ( 
        <section class="subsection-alternative" id="Projects">
        <h2> Projects</h2>
        <div className="project-container">
           <div className="project-box">
              <h3> Project One</h3>
              <p className="subtext"> Recipe</p>
              <hr/>
              <p className="subtext"><button> <a href="https://github.com/kevinl206/Recipe_Design_Project.git"> Click Here</a></button></p>
              </div>
      
           <div className="project-box">
              <h3> Project Two</h3>
              <p className="subtext"> Library</p>
              <hr/>
              <p className="subtext"><button><a href="https://github.com/kevinl206/gp2-library.git"> Click Here </a></button></p>
              <h3>Heroku</h3>
           </div>
              <div className="project-box">
              <h3> Project Three</h3>
              <p className="subtext"> Puppy Luv</p>
              <hr/>
              <p className="subtext"> <button> <a href="https://github.com/kevinl206/puppy-love.git"> Click Here </a></button></p>
              </div>
              </div>
      </section>
    )};