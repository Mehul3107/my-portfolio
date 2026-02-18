import React from "react";

function Projects() {
  return (
    <section id="projects" className="section light">
      <h2>Projects</h2>

      <div className="projects-container">
        <div className="card">
          <h3>Job Portal Application</h3>
          <p>
            Built using React and Spring Boot with MySQL database.
          </p>
        </div>

        <div className="card">
          <h3>E-commerce Website</h3>
          <p>
            Responsive shopping website with product filtering features.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
