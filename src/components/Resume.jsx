import React from "react";

function Resume() {
  return (
    <section id="resume" className="section light">
      <h2>Resume</h2>
      <p>You can download my resume below:</p>
      <a href="/resume.pdf" className="btn" download>
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
