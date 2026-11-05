import { useEffect, useRef, useState } from 'react';
import { ArrowRightLeft, Briefcase, Compass, Handshake, ShieldCheck, Sparkles, Target, Users } from 'lucide-react';
import './WhyChooseUs.css';

const reasons = [
  { icon: Users, title: 'Personalized Guidance', description: 'Tailored advice shaped around your profile, goals, and destination preferences.' },
  { icon: Compass, title: 'Global Opportunities', description: 'Access to education pathways across multiple countries and disciplines.' },
  { icon: Briefcase, title: 'Professional Support', description: 'Expert guidance across admissions, testing, and student documentation.' },
  { icon: Handshake, title: 'Application Assistance', description: 'Clear, well-structured support from shortlisting to final submission.' },
  { icon: Sparkles, title: 'Test Preparation', description: 'Focused language coaching to improve exam performance and confidence.' },
  { icon: Target, title: 'University Interview Preparation', description: 'Practical coaching that helps you communicate your story effectively.' },
  { icon: ShieldCheck, title: 'Transparent Process', description: 'A clear and honest journey with practical next steps at every stage.' },
  { icon: ArrowRightLeft, title: 'Student-Centered Support', description: 'We prioritize your questions, needs, and academic goals at every step.' },
];

const handleMove = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  card.style.setProperty('--my', `${e.clientY - rect.top}px`);
};

const WhyChooseUs = () => {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const nodeRefs = useRef([]);
  const [current, setCurrent] = useState(-1);

  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const line = lineRef.current;
      if (!line) return;

      const rect = line.parentElement.getBoundingClientRect();
      const trigger = window.innerHeight * 0.6;
      line.style.height = `${Math.min(Math.max(trigger - rect.top, 0), rect.height)}px`;

      let reached = -1;
      nodeRefs.current.forEach((node, index) => {
        if (node && node.getBoundingClientRect().top + node.offsetHeight / 2 <= trigger) {
          reached = index;
        }
      });
      setCurrent(reached);
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="section why-section" id="why-us">
      <div className="container why-container">
        <div className="section-heading" data-aos="fade-up">
          <span className="section-kicker">Why Choose Us</span>
          <h2  >Personal support, global thinking, and practical guidance that keeps students moving forward.</h2>
        </div>

        <div className="why-grid" ref={timelineRef}>
          <div className="why-track" aria-hidden="true">
            <span className="why-fill" ref={lineRef} />
          </div>
          {reasons.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              data-step={index}
              className={`why-step why-${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className={`why-node-wrap ${current === index ? 'is-current' : ''}`}>
                <div className="why-node" ref={(node) => { nodeRefs.current[index] = node; }}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>
              <article className="why-card" onMouseMove={handleMove}>
                <div className="why-icon"><Icon size={24} /></div>
                <div className="why-copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
