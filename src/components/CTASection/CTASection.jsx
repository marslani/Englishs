import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container cta-box">
        <div>
          <span className="section-kicker light">Ready to begin?</span>
          <h2>Ready to Start Your Global Journey?</h2>
        </div>
        <p>
          Let our experts help you turn your study-abroad goals into a clear action plan.
        </p>
        <div className="cta-actions">
          <a href="#contact" className="primary-btn">Book a Consultation</a>
          <a href="#contact" className="secondary-btn light-ghost">Apply Now</a>
          <a href="#contact" className="secondary-btn light-ghost">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
