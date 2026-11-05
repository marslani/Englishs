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
import { ChevronLeft, ChevronRight, GraduationCap, MapPin, Quote } from 'lucide-react';
import student1 from '../../assets/images/img 2.jpg';
import student2 from '../../assets/images/img 3.jpg';
import student3 from '../../assets/images/img 4.jpg';
import './SuccessStories.css';

/* ⚠️ Apni images ke path yahan lagain (public folder ya import) */
const stories = [
  {
    id: 1,
    name: 'Ayesha',
    country: 'UK',
    quote: 'They made every step feel clear and possible.',
    program: 'MSc Data Science',
    university: 'Sample University of London',
    image: student1,
  },
  {
    id: 2,
    name: 'Hamza',
    country: 'Canada',
    quote: 'Honest advice, and always available when I needed it.',
    program: 'Postgraduate Diploma, Business',
    university: 'Sample College Toronto',
    image: student2,
  },
  {
    id: 3,
    name: 'Sara',
    country: 'USA',
    quote: 'The interview coaching gave me real confidence.',
    program: 'BS Computer Science',
    university: 'Sample State University',
    image: student3,
  },
  {
    id: 4,
    name: 'Usman',
    country: 'Australia',
    quote: 'A transparent process from start to finish.',
    program: 'Master of Engineering',
    university: 'Sample Institute of Technology',
    image: student1,
  },
  {
    id: 5,
    name: 'Maryam',
    country: 'UK',
    quote: 'From shortlisting to visa, I never felt lost for a second.',
    program: 'MA International Relations',
    university: 'Sample University of Manchester',
    image: student2,
  },
  {
    id: 6,
    name: 'Ali',
    country: 'Canada',
    quote: 'Their guidance helped me secure a scholarship I thought was out of reach.',
    program: 'Master of Information Technology',
    university: 'Sample University of Waterloo',
    image: student3,
  },
  {
    id: 7,
    name: 'Zainab',
    country: 'USA',
    quote: 'Patient, professional, and genuinely invested in my future.',
    program: 'MS Public Health',
    university: 'Sample University of California',
    image: student1,
  },
];

const filters = ['All', 'UK', 'Canada', 'USA', 'Australia'];

const SuccessStories = () => {
  const [active, setActive] = useState('All');
  const trackRef = useRef(null);

  const visible = useMemo(
    () => (active === 'All' ? stories : stories.filter((s) => s.country === active)),
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
              Every journey is personal. Here are a few of the students we’ve had the privilege of
              guiding.
            </p>
          </div>

          <div className="ss-arrows">
            <button type="button" className="ss-arrow" aria-label="Previous" onClick={() => scrollByCard(-1)}>
              <ChevronLeft size={20} />
            </button>
            <button type="button" className="ss-arrow" aria-label="Next" onClick={() => scrollByCard(1)}>
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
                <img src={s.image} alt={`${s.name} success story`} loading="lazy" />
                <span className="ss-media-fade" />
                <span className="ss-tag">
                  <MapPin size={15} />
                  {s.country}
                </span>
              </div>

              <div className="ss-body">
                <Quote className="ss-quote-icon" size={34} />
                <p className="ss-quote">“{s.quote}”</p>
                <h3 className="ss-name">{s.name}</h3>
                <p className="ss-program">
                  <GraduationCap size={17} />
                  {s.program}
                </p>
                <p className="ss-uni">{s.university}</p>
                <button type="button" className="ss-btn">View Story</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
