// import { BookText, BadgeCheck, FileText, Languages, GraduationCap } from 'lucide-react';
// import './TestPreparation.css';

// const tests = [
//   { name: 'TOEFL iBT', icon: Languages, description: 'Build fluency, confidence, and exam strategy for academic success.', action: 'Learn More' },
//   { name: 'LanguageCert', icon: BookText, description: 'Focused training with practical methods for strong scoring outcomes.', action: 'Learn More' },
//   { name: 'Oxford ELLT', icon: GraduationCap, description: 'Prepare for academic English with structured and performance-based guidance.', action: 'Learn More' },
//   { name: 'Duolingo', icon: FileText, description: 'Simplify test prep with effective practice and confidence-building strategies.', action: 'Learn More' },
//   { name: 'IELTS', icon: BadgeCheck, description: 'Strengthen all four skills with a personalized preparation plan.', action: 'Learn More' },
// ];

// const TestPreparation = () => {
//   return (
//     <section className="section test-prep-section" id="test-preparation">
//       <div className="container">
//         <div className="section-heading" data-aos="fade-up">
//           <span className="section-kicker">Language Tests</span>
//           <h2>Targeted preparation for every language test pathway.</h2>
//         </div>

//         <div className="test-grid">
//           {tests.map(({ name, icon: Icon, description, action }, index) => (
//             <article key={name} className="test-card" data-aos="fade-up" data-aos-delay={index * 60}>
//               <div className="test-icon"><Icon size={28} /></div>
//               <h3>{name}</h3>
//               <p>{description}</p>
//               <button type="button" className="text-link">{action}</button>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestPreparation;


































import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import duolingoLogo from '../../assets/test/duolingo.png';
import ieltsLogo from '../../assets/test/ilts.png';
import languageCertLogo from '../../assets/test/language cert.webp';
import oxfordLogo from '../../assets/test/oxford ellt.png';
import pteLogo from '../../assets/test/pte.png';
import toeflLogo from '../../assets/test/toefl-logo.jpg';
import './TestPreparation.css';

const tests = [
  {
    tag: 'TOEFL',
    logo: toeflLogo,
    name: 'TOEFL iBT',
    description:
      'Accepted by thousands of universities worldwide, especially across the USA and Canada.',
    points: ['Full-length mock tests', 'Integrated task strategies', 'Score review & target plan'],
  },
  {
    tag: 'LC',
    logo: languageCertLogo,
    name: 'LanguageCert',
    description: 'A flexible, internationally recognised English test with online and centre options.',
    points: ['Level placement', 'Speaking practice partners', 'Exam booking support'],
  },
  {
    tag: 'ELLT',
    logo: oxfordLogo,
    name: 'Oxford ELLT',
    description: 'A modern English test for study abroad, built around all four language skills.',
    points: ['Four-skill practice', 'Timed mock sessions', 'Personalised feedback'],
  },
  {
    tag: 'DET',
    logo: duolingoLogo,
    name: 'Duolingo',
    description: 'A fast, adaptive online test with quick results, taken from home.',
    points: ['Question-type mastery', 'Writing & speaking review', 'Technical setup guidance'],
  },
  {
    tag: 'IELTS',
    logo: ieltsLogo,
    name: 'IELTS',
    description: 'The globally trusted test for study, work and migration, Academic and General.',
    points: ['Band 7+ strategy sessions', 'Weekly writing feedback', 'One-to-one speaking mocks'],
  },
  {
    tag: 'PTE',
    logo: pteLogo,
    name: 'PTE',
    description: 'Computer-based test preparation with practice for every PTE task type.',
    points: ['Task-type strategies', 'Timed practice', 'Progress tracking'],
  },
];

const TestPreparation = () => {
  const [active, setActive] = useState(0);

  // mouse position -> CSS variables (used for the glowing spotlight inside the card)
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section className="tp-section" id="test-preparation">
      <div className="tp-container">
        <div className="tp-heading">
          <span className="tp-kicker">
            <i className="tp-kicker-line" />
            Language Tests
          </span>
          <h2 className="tp-title">
            Test <em>Preparation</em>
          </h2>
          <span className="tp-divider" />
          <p className="tp-subtitle">
            Expert coaching for the English tests universities ask for — structured, supportive and
            focused on your target score.
          </p>
        </div>

        <div className="tp-grid" onMouseLeave={() => {}}>
          {tests.map((t, i) => (
            <article
              key={t.tag}
              className={`tp-card ${active === i ? 'is-active' : ''}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              onMouseMove={handleMove}
              tabIndex={0}
              aria-expanded={active === i}
            >
              <span className="tp-spark" aria-hidden="true" />

              <div className="tp-inner">
                <span className={t.logo ? 'tp-logo-wrap' : 'tp-tag'}>
                  {t.logo ? <img src={t.logo} alt={`${t.name} logo`} /> : t.tag}
                </span>

                {/* collapsed: vertical title */}
                <h3 className="tp-name tp-name--vertical">{t.name}</h3>

                {/* expanded: horizontal title + content */}
                <h3 className="tp-name tp-name--full">{t.name}</h3>

                <div className="tp-body">
                  <p className="tp-desc">{t.description}</p>

                  <ul className="tp-list">
                    {t.points.map((p, n) => (
                      <li key={p} style={{ '--n': n }}>
                        <Check size={16} strokeWidth={2} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <button type="button" className="tp-btn" tabIndex={active === i ? 0 : -1}>
                    <span>Learn More</span>
                    <ArrowRight size={18} strokeWidth={2} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestPreparation;
