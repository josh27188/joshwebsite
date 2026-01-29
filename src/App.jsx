import { useEffect } from 'react'
import './index.css'

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', padding: '20px 10%', display: 'flex', justifyContent: 'space-between', zIndex: 100, backdropFilter: 'blur(10px)', background: 'rgba(5,5,5,0.7)' }}>
        <div style={{ fontFamily: 'var(--font-header)', fontWeight: 'bold', fontSize: '1.2rem' }}>JC<span className="accent-text">.</span></div>
        <div style={{ display: 'flex', gap: '30px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
          <a href="#about">ABOUT</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#education">EDUCATION</a>
          <a href="#skills">SKILLS</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        <h1 className="hero-title reveal">JOSHUA<br /><span className="accent-text">CHAN</span></h1>
        <p className="hero-subtitle reveal" style={{ transitionDelay: '0.2s' }}>Mechanical Engineering Student / Manufacturing Lead</p>
        <div className="reveal" style={{ transitionDelay: '0.4s', marginTop: '40px' }}>
          <a href="mailto:joshuajchan@cpp.edu" className="btn">Get in touch</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="reveal">
        <h2 className="accent-text">About Me</h2>
        <p style={{ maxWidth: '600px', fontSize: '1.2rem', marginTop: '20px', color: 'var(--text-secondary)' }}>
          I am a driven Mechanical Engineering student at Cal Poly Pomona with a strong background in manufacturing and robotics. 
          Currently serving as a Robot Inspector for FIRST Robotics and a Mentor for FRC teams 5124 and 1197.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h2 className="accent-text reveal">Professional Experience</h2>
        <div style={{ marginTop: '40px' }}>
          <div className="card reveal">
            <h3 className="card-title">Project Intern | MathWorks</h3>
            <p className="card-date">Jun 2025 - Jul 2025</p>
            <div className="card-content">
              <ul>
                <li>Collaborated with a team of four to design and evaluate a lightweight drone frame design.</li>
                <li>Utilized hand calculations and MATLAB simulation in determining viability.</li>
              </ul>
            </div>
          </div>

          <div className="card reveal">
            <h3 className="card-title">Design & Engineering Technician | Dreamscape Learn</h3>
            <p className="card-date">Mar 2024 - Sep 2024</p>
            <div className="card-content">
              <ul>
                <li>Consistently delivering high-quality work independently in high-demand workloads.</li>
                <li>Adapted to shifting priorities to meet tight customer deadlines.</li>
              </ul>
            </div>
          </div>

          <div className="card reveal">
            <h3 className="card-title">Manufacturing Lead | TorBots (FRC 1197)</h3>
            <p className="card-date">Jun 2022 - May 2023</p>
            <div className="card-content">
              <ul>
                <li>Managed the manufacturing department to maintain maximum machine uptime and efficiency.</li>
                <li>Taught basic use of machine and hand tools to underclassmen.</li>
                <li>Collaborated with leadership for smooth system integration and improvised solutions.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteering Section */}
      <section id="volunteering">
        <h2 className="accent-text reveal">Volunteering</h2>
        <div style={{ marginTop: '40px' }}>
          <div className="card reveal">
            <h3 className="card-title">Robot Inspector | FIRST Robotics Competition</h3>
            <p className="card-date">Mar 2024 - Present</p>
            <div className="card-content">
              <ul>
                <li>Inspected legality of complex robots throughout 5 events.</li>
                <li>Coordinated with volunteers to maintain tight schedules.</li>
              </ul>
            </div>
          </div>

          <div className="card reveal">
            <h3 className="card-title">Robotics Team Mentor | West Torrance Robotics & TorBots</h3>
            <p className="card-date">Nov 2023 - Present</p>
            <div className="card-content">
              <ul>
                <li>Impacted students with CAD/Design Strategy lessons.</li>
                <li>Maintained project timelines and guided iterative prototyping.</li>
                <li>Contributed to the victory at the Los Angeles Regional 2025.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <h2 className="accent-text reveal">Education</h2>
        <div style={{ marginTop: '40px' }}>
          <div className="card reveal">
            <h3 className="card-title">BS Mechanical Engineering | Cal Poly Pomona</h3>
            <p className="card-date">Aug 2025 - May 2027</p>
          </div>
          <div className="card reveal">
            <h3 className="card-title">AS Physical Science, Pre-Engineering | El Camino College</h3>
            <p className="card-date">Aug 2023 - June 2025</p>
            <div className="card-content">
              <ul>
                <li>GPA: 3.5</li>
                <li>Certificate: Mechanical Engineering Design Technician</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2 className="accent-text reveal">Technical Skills</h2>
        <div className="skills-grid reveal">
          <div className="skill-tag">Manual Machining (Lathe/Mill)</div>
          <div className="skill-tag">Additive & CNC</div>
          <div className="skill-tag">3D Printing</div>
          <div className="skill-tag">Onshape</div>
          <div className="skill-tag">Fusion 360</div>
          <div className="skill-tag">Inventor</div>
          <div className="skill-tag">SolidWorks</div>
          <div className="skill-tag">MATLAB</div>
        </div>
        <div className="reveal" style={{ marginTop: '40px', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
          Certified SOLIDWORKS Associate (CSWA)
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '50px 10%', borderTop: '1px solid #222', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>© 2026 JOSHUA CHAN</p>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="https://www.linkedin.com/in/joshuachan27" target="_blank" className="accent-text">LINKEDIN</a>
          <a href="mailto:joshuajchan@cpp.edu" className="accent-text">EMAIL</a>
        </div>
      </footer>
    </div>
  )
}

export default App
