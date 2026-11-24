import { useState } from 'react'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('Home')

  const pages = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav>
        <h2>Adhitya.</h2>

        <div className="nav-links">
          {pages.map((page) => (
            <button
              key={page}
              className={activePage === page ? 'active' : ''}
              onClick={() => setActivePage(page)}
            >
              {page}
            </button>
          ))}
        </div>
      </nav>

      {/* Page Content */}
      <main className="slide">

        {activePage === 'Home' && (
          <section className="page">
            <h1>Hello, I'm Adhitya 👋</h1>
            <img
 src=" /public/adhityaprofile.jpeg"
  alt="Adhitya Profile"
  
/>
            <h2>Web Developer & Creative Learner</h2>
            <p>Welcome to my personal portfolio.</p>
            <button onClick={() => setActivePage('About')}>
              Explore More
            </button>
          </section>
        )}
{activePage === 'About' && (
  <section className="page">
    <h1>About Me</h1>
    <p>
      Hello! I'm Adhitya, a B.Com Computer Applications student.
    </p>
    <p>
      I am interested in programming, technology and creativity.
    </p>
    <h2>My Career Goal</h2>
    <p>
      My goal is to become a skilled developer and create
      innovative software and games.
    </p>
  </section>
)}
{activePage === 'Skills' && (
  <section className="page">
    <h1>My Skills</h1>
    <p>My technical skills and learning areas.</p>

    <h2>Programming & Web Development</h2>

    <div className="skills-container">
      {[
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'PHP',
        'MySQL',
        'C'
      ].map((skill) => (
        <div className="skill-card" key={skill}>
          {skill}
        </div>
      ))}
    </div>

    <h2>Additional Knowledge</h2>

    <div className="skills-container">
      {[
        'Tally with GST',
        'Artificial Intelligence',
        'Finance',
        'Full Stack Development'
      ].map((skill) => (
        <div className="skill-card" key={skill}>
          {skill}
        </div>
      ))}
    </div>

    <h2>My Interests</h2>

    <div className="skills-container">
      <div className="skill-card">Game Development</div>
      <div className="skill-card">Creative Design</div>
      <div className="skill-card">Technology</div>
    </div>
  </section>
)}
        

        {activePage === 'Projects' && (
          <section className="page">
            <h1>My Projects</h1>

            <div className="project-card">
              <h3>Personal Portfolio</h3>
              <p>A personal website built using React, HTML and CSS.</p>
              <a
                href="https://github.com/adhityasaravanan-gif"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
            </div>

            <div className="project-card">
              <h3>Gaming Studio Idea</h3>
              <p>Exploring creative ideas for future gaming projects.</p>
            </div>
          </section>
        )}

        {activePage === 'Contact' && (
          <section className="page">
            <h1>Contact Me</h1>
            <p>Feel free to connect with me!</p>

            <div className="contact-container">
              <a href="mailto:your-email@gmail.com">Email</a>
              <a
                href="https://github.com/adhityasaravanan-gif"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/s-adhitya-saravanan-1a3084431"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </section>
        )}

      </main>

      <footer>
        <p>© 2026 Adhitya. All Rights Reserved.</p>
      </footer>

    </div>
  )
}

export default App