import aboutImage from '../../assets/images/img 10.png';
import './About.css';

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" />
  </svg>
);

const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 4l1.8 4.6L16.4 10.4 11.8 12.2 10 16.8 8.2 12.2 3.6 10.4 8.2 8.6 10 4z" />
    <path d="M18 3v4M16 5h4" />
    <path d="M18 16v4M16 18h4" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9.5" />
    <path d="M8.2 12.4l2.6 2.6 5-5.4" />
  </svg>
);

const highlights = [
  'Student-first approach',
  'International education focus',
  'Honest, transparent advice',
  'Support at every stage',
];

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container about-layout">
        {/* Left : image */}
        <div className="about-visual" data-aos="zoom-in-right">
          <div className="about-image-wrap">
            <img src={aboutImage} alt="Students preparing for overseas education" />
            <div className="about-image-shine" />
          </div>

          <div className="about-badge">
            <span className="about-badge-title">Your Dream</span>
            <span className="about-badge-sub">Our Priority</span>
          </div>
        </div>

        {/* Right : content */}
        <div className="about-content" data-aos="fade-left">
          <span className="about-kicker">About We Manage</span>

          <h2 className="about-title">
            A Trusted Partner for Your <em>Global Education</em>
          </h2>

          <span className="about-divider" />

          <p className="about-lead">
            We Manage is an all-language test and study consultancy helping students prepare for
            English tests, choose the right universities and navigate international admissions with
            clarity and confidence.
          </p>

          <div className="about-cards">
            <article className="about-card">
              <div className="about-card-icon">
                <TargetIcon />
              </div>
              <div className="about-card-body">
                <h3>Our Mission</h3>
                <p>To make international education accessible through honest, expert and personal guidance.</p>
              </div>
            </article>

            <article className="about-card">
              <div className="about-card-icon">
                <SparkleIcon />
              </div>
              <div className="about-card-body">
                <h3>Our Vision</h3>
                <p>To be the most trusted bridge between ambitious students and world-class universities.</p>
              </div>
            </article>
          </div>

          <ul className="about-checks">
            {highlights.map((item) => (
              <li key={item}>
                <span className="about-check-icon">
                  <CheckIcon />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
