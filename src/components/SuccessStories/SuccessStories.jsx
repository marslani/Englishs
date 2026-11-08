// import { useRef, useState } from 'react';
// import { ArrowLeft, ArrowRight } from 'lucide-react';
// import { successStories } from '../../data/successStories';
// import './SuccessStories.css';

// const SuccessStories = () => {
//   const [index, setIndex] = useState(0);
//   const itemRef = useRef(null);

//   const story = successStories[index];

//   const goNext = () => setIndex((prev) => (prev + 1) % successStories.length);
//   const goPrev = () => setIndex((prev) => (prev - 1 + successStories.length) % successStories.length);

//   return (
//     <section className="section success-section" id="success-stories">
//       <div className="container">
//         <div className="section-heading" data-aos="fade-up">
//           <span className="section-kicker">Success Stories</span>
//           <h2>Students who turned their international education goals into reality.</h2>
//         </div>

//         <div className="success-story-wrap" ref={itemRef}>
//           <button type="button" className="story-nav" aria-label="Previous story" onClick={goPrev}>
//             <ArrowLeft size={18} />
//           </button>

//           <article className="success-story" data-aos="fade-up">
//             <div className="story-image-wrap">
//               <img src={story.image} alt={`${story.name} student story`} />
//             </div>

//             <div className="story-content">
//               <span className="story-tag">{story.destination}</span>
//               <h3>{story.name}</h3>
//               <div className="story-meta">
//                 <span>{story.university}</span>
//                 <span>{story.program}</span>
//               </div>
//               <p>{story.story}</p>
//               <blockquote>“{story.quote}”</blockquote>
//               <button type="button" className="text-link">View Story</button>
//             </div>
//           </article>

//           <button type="button" className="story-nav" aria-label="Next story" onClick={goNext}>
//             <ArrowRight size={18} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SuccessStories;













































import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import toeflResultOne from '../../assets/success/1 toefl 1.png';
import toeflResultTwo from '../../assets/success/2 toefl.jpeg';
import duolingoResultOne from '../../assets/success/3 duolingo (2).jpeg';
import duolingoResultTwo from '../../assets/success/4 duolingo.jpeg';
import oxfordResult from '../../assets/success/5 oxford ellt.jpeg';
import microsoftCertification from '../../assets/success/6 microsoft.jpeg';
import apscaResult from '../../assets/success/7 APSCA.jpeg';
import awsCertification from '../../assets/success/8 AWS.jpeg';
import camsCertification from '../../assets/success/9 cams.jpeg';
import './SuccessStories.css';

const stories = [
  {
    id: 1,
    type: 'English Tests',
    title: 'TOEFL iBT',
    result: '5.0 / 6 · CEFR C1',
    detail: 'Reading 6.0 · Listening 5.0 · Speaking 4.0 · Writing 4.5',
    image: toeflResultOne,
  },
  {
    id: 2,
    type: 'English Tests',
    title: 'TOEFL iBT',
    result: '5.5 / 6 · CEFR C1',
    detail: 'Reading 6.0 · Listening 6.0 · Speaking 4.0 · Writing 5.0',
    image: toeflResultTwo,
  },
  {
    id: 3,
    type: 'English Tests',
    title: 'Duolingo English Test',
    result: '155 / 160 · CEFR C2',
    detail: 'Official certificate shared by the learner',
    image: duolingoResultOne,
  },
  {
    id: 4,
    type: 'English Tests',
    title: 'Duolingo English Test',
    result: '135 / 160',
    detail: 'Certified test result shared by the learner',
    image: duolingoResultTwo,
  },
  {
    id: 5,
    type: 'English Tests',
    title: 'Oxford ELLT',
    result: 'Overall level 8',
    detail: 'Listening 7 · Reading 7 · Writing 8 · Speaking 7',
    image: oxfordResult,
  },
  {
    id: 6,
    type: 'IT Certifications',
    title: 'Microsoft Certified',
    result: 'DevOps Engineer Expert',
    detail: 'Microsoft certification shared by the learner',
    image: microsoftCertification,
  },
  {
    id: 7,
    type: 'Professional Certifications',
    title: 'APSCA Part I CSCA Exam',
    result: 'Pass · 87%',
    detail: 'Exam report shared by the learner',
    image: apscaResult,
  },
  {
    id: 8,
    type: 'IT Certifications',
    title: 'AWS Certified',
    result: 'DevOps Engineer – Professional',
    detail: 'AWS certification shared by the learner',
    image: awsCertification,
  },
  {
    id: 9,
    type: 'Professional Certifications',
    title: 'CAMS',
    result: 'Certified Anti-Money Laundering Specialist',
    detail: 'Professional certification shared by the learner',
    image: camsCertification,
  },
];

const filters = ['All', 'English Tests', 'IT Certifications', 'Professional Certifications'];

const SuccessStories = () => {
  const [active, setActive] = useState('All');
  const trackRef = useRef(null);

  const visible = useMemo(
    () => (active === 'All' ? stories : stories.filter((story) => story.type === active)),
    [active]
  );

  useEffect(() => {
    if (trackRef.current) trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
  }, [active]);

  const scrollByCard = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.ss-card');
    const gap = parseFloat(getComputedStyle(track).columnGap) || 24;
    const amount = card ? card.offsetWidth + gap : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section className="ss-section" id="success-stories">
      <div className="ss-glow ss-glow-a" />
      <div className="ss-glow ss-glow-b" />

      <div className="ss-container">
        <div className="ss-head">
          <div className="ss-head-text">
            <div className="ss-kicker">
              <span className="ss-kicker-line" />
              <span>Student Success</span>
            </div>
            <h2 className="ss-title">
              Success <em>Stories</em>
            </h2>
            <span className="ss-underline" />
            <p className="ss-sub">
              Exam results and professional certifications shared by our learners.
            </p>
          </div>
          <div className="ss-arrows">
            <button type="button" className="ss-arrow" aria-label="Previous success stories" onClick={() => scrollByCard(-1)}>
              <ChevronLeft size={20} />
            </button>
            <button type="button" className="ss-arrow" aria-label="Next success stories" onClick={() => scrollByCard(1)}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="ss-filters">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              className={`ss-pill ${active === f ? 'is-active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="ss-track" ref={trackRef} key={active}>
          {visible.map((s, i) => (
            <article className="ss-card" key={s.id} style={{ animationDelay: `${i * 0.09}s` }}>
              <div className="ss-media">
                <img src={s.image} alt={`${s.title} result or certificate`} />
              </div>

              <div className="ss-body">
                <span className="ss-category">{s.type}</span>
                <p className="ss-result">{s.result}</p>
                <h3 className="ss-name">{s.title}</h3>
                <p className="ss-program">
                  <Award size={17} />
                  {s.detail}
                </p>
                <a className="ss-btn" href={s.image} target="_blank" rel="noreferrer">
                  View result <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
