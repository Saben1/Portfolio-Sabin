import React from 'react';
import './projects.css';

function Projects() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="container">
        <a
          className="card"
          href="https://saben1.github.io/Challenge-1-refactor-code/"
          target="_blank"
          rel="noopener noreferrer">
          <h3 className="portfolio-text">Project 1 - HTML Refactor</h3>
          <p className="portfolio-text-body">
            Using my knowledge of HTML to refactor existing code</p>
        </a>
    
        <a
          className="card"
          href="https://saben1.github.io/New-Portfolio/"
          target="_blank"
          rel="noopener noreferrer">
          <h3 className="portfolio-text">Project 2 - Password Generator</h3>
          <p className="portfolio-text-body">
            Using my knowledge of JavaScript to create a password generator
          </p>
        </a>
        <a
          className="card"
          href="https://saben1.github.io/quiz/"
          target="_blank"
          rel="noopener noreferrer">
          <h3 className="portfolio-text">Project 3 - Code Quiz</h3>
          <p className="portfolio-text-body">
            Using my knowledge of web APIs to create a code quiz</p>
        </a>
        <a
          className="card"
          href="https://saben1.github.io/Day-planner/"
          target="_blank"
          rel="noopener noreferrer">
          <h3 className="portfolio-text">Project 4 - Work Day Schedule</h3>
          <p className="portfolio-text-body">
            Using my knowledge of third-party APIs to create a work day schedule
          </p>
        </a>
        <a
          className="card"
          href="https://saben1.github.io/Weather-Dashboard/"
          target="_blank"
          rel="noopener noreferrer">
          <h3 className="portfolio-text">Project 5 - Weather Dashboard</h3>
          <p className="portfolio-text-body">
            Using my knowledge of server-side APIs to create a weather dashboard
          </p>
        </a>
        <a
          className="card"
          href="https://saben1.github.io/Weather-Dashboard/"
          target="_blank"
          rel="noopener noreferrer">
          <h3 className="portfolio-text">PRoject-6 Resume Generator</h3>
          <p className="portfolio-text-body">
            Using my knowledge of Graphql, React, Nodejs to create a weather dashboard
          </p>
        </a>
      </div>
    </section>
  );
}

export default Projects;
