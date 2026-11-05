// import './ApplicationProcess.css';

// const steps = [
//   'Free Consultation',
//   'Profile Assessment',
//   'University Selection',
//   'Documents Preparation',
//   'Application Submission',
//   'Offer / Admission',
//   'Visa Guidance',
//   'Pre-Departure Support',
// ];

// const ApplicationProcess = () => {
//   return (
//     <section className="section process-section" id="application-process">
//       <div className="container">
//         <div className="section-heading" data-aos="fade-up">
//           <span className="section-kicker">How It Works</span>
//           <h2>Your study-abroad journey, mapped into a clear and guided plan.</h2>
//         </div>

//         <div className="process-timeline">
//           {steps.map((step, index) => (
//             <div key={step} className="process-step" data-aos="fade-up" data-aos-delay={index * 70}>
//               <div className="process-number">0{index + 1}</div>
//               <div className="process-card">
//                 <span>{step}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ApplicationProcess;

























import { useEffect, useRef, useState } from 'react';
import './ApplicationProcess.css';

/* ---------- Inline icons (no extra package needed) ---------- */
const Icon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const icons = {
  chat: (
    <Icon>
      <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </Icon>
  ),
  search: (
    <Icon>
      <circle cx="11" cy="11" r="7.5" />
      <path d="m21 21-4.3-4.3" />
    </Icon>
  ),
  building: (
    <Icon>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
    </Icon>
  ),
  file: (
    <Icon>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5Z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h8M8 9h2" />
    </Icon>
  ),
  send: (
    <Icon>
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4Z" />
    </Icon>
  ),
  award: (
    <Icon>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" />
    </Icon>
  ),
  shield: (
    <Icon>
      <path d="M20 13c0 5-3.5 7.5-7.7 8.9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </Icon>
  ),
  plane: (
    <Icon>
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </Icon>
  ),
};

const steps = [
  { title: 'Free Consultation', text: 'A relaxed conversation to understand your goals, interests and timeline.', icon: 'chat' },
  { title: 'Profile Assessment', text: 'We review your academics, test scores and experience to find your strengths.', icon: 'search' },
  { title: 'University Selection', text: 'A balanced shortlist of universities and courses that genuinely fit you.', icon: 'building' },
  { title: 'Documents Preparation', text: "Guidance on SOPs, CVs, references and every document you'll need.", icon: 'file' },
  { title: 'Application Submission', text: 'Careful, on-time submissions with every detail checked twice.', icon: 'send' },
  { title: 'Offer / Admission', text: 'We help you compare offers, meet conditions and confirm your place.', icon: 'award' },
  { title: 'Visa Guidance', text: 'Clear direction on visa documentation and interview preparation.', icon: 'shield' },
  { title: 'Pre-Departure Support', text: 'Accommodation tips, travel planning and a briefing before you fly.', icon: 'plane' },
];

const ApplicationProcess = () => {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const nodeRefs = useRef([]);
  const [visible, setVisible] = useState({});
  const [current, setCurrent] = useState(-1);

  /* Reveal each step when it enters the viewport */
  useEffect(() => {
    const items = timelineRef.current?.querySelectorAll('[data-step]');
    if (!items) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = Number(entry.target.dataset.step);
            setVisible((prev) => ({ ...prev, [i]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Gold line grows downward as the user scrolls */
  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const line = lineRef.current;
      if (!line) return;

      const rect = line.parentElement.getBoundingClientRect();
      const trigger = window.innerHeight * 0.6;
      const total = rect.height;
      const progress = Math.min(Math.max(trigger - rect.top, 0), total);
      line.style.height = `${progress}px`;

      let reached = -1;
      nodeRefs.current.forEach((node, i) => {
        if (!node) return;
        const n = node.getBoundingClientRect();
        if (n.top + n.height / 2 <= trigger) reached = i;
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

  /* Mouse-follow glow inside the card */
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section className="ap-section" id="application-process">
      <div className="ap-container">
        <div className="ap-heading">
          <span className="ap-kicker">
            <i className="ap-kicker-line" />
            How It Works
          </span>
          <h2 className="ap-title">
            Your Study Abroad <em>Journey</em>
          </h2>
          <span className="ap-underline" />
          <p className="ap-subtitle">
            A clear, guided path from your first conversation with us to the day you board your flight.
          </p>
        </div>

        <div className="ap-timeline" ref={timelineRef}>
          <div className="ap-track" aria-hidden="true">
            <span className="ap-fill" ref={lineRef} />
          </div>

          {steps.map((step, i) => {
            const side = i % 2 === 0 ? 'left' : 'right';
            const num = String(i + 1).padStart(2, '0');
            return (
              <div
                key={step.title}
                data-step={i}
                className={`ap-step ap-${side} ${visible[i] ? 'is-visible' : ''} ${
                  current === i ? 'is-current' : ''
                }`}
              >
                <div className="ap-node-wrap">
                  <div className="ap-node" ref={(el) => (nodeRefs.current[i] = el)}>
                    <span>{num}</span>
                  </div>
                </div>

                <article className="ap-card" onMouseMove={handleMove}>
                  <div className="ap-icon">{icons[step.icon]}</div>
                  <div className="ap-body">
                    <span className="ap-step-label">Step {num}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
