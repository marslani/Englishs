// import { destinations } from '../../data/destinations';
// import './StudyDestinations.css';

// const StudyDestinations = () => {
//   return (
//     <section className="section destinations-section" id="destinations">
//       <div className="container">
//         <div className="section-heading" data-aos="fade-up">
//           <span className="section-kicker">Study Destinations</span>
//           <h2>Explore world-class study opportunities across leading international destinations.</h2>
//         </div>

//         <div className="destination-grid">
//           {destinations.map((destination) => (
//             <article key={destination.id} className="destination-card" data-aos="zoom-in" data-aos-delay={destination.id * 70}>
//               <div className="destination-image-wrap">
//                 <img src={destination.image} alt={`${destination.country} destination`} />
//                 <div className="destination-overlay" />
//                 <span className="destination-badge">{destination.badge}</span>
//               </div>

//               <div className="destination-body">
//                 <div className="destination-topline">
//                   <h3>{destination.country}</h3>
//                   <span className="flag">{destination.country === 'UK' ? '🇬🇧' : destination.country === 'USA' ? '🇺🇸' : destination.country === 'Canada' ? '🇨🇦' : destination.country === 'Australia' ? '🇦🇺' : destination.country === 'Germany' ? '🇩🇪' : '🌍'}</span>
//                 </div>
//                 <p>{destination.description}</p>
//                 <button type="button" className="destination-link">Explore</button>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StudyDestinations;




































import { useRef, useState, useEffect, useCallback } from 'react';
import { destinations } from '../../data/destinations';
import './StudyDestinations.css';

const codes = {
  UK: 'GB',
  'United Kingdom': 'GB',
  USA: 'US',
  'United States': 'US',
  Canada: 'CA',
  Australia: 'AU',
  Germany: 'DE',
  Europe: 'EU',
};

const getTitle = (country) => {
  if (country === 'UK') return 'United Kingdom';
  if (country === 'USA') return 'United States';
  return country;
};

const handleMove = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  card.style.setProperty('--my', `${e.clientY - rect.top}px`);
};

const StudyDestinations = () => {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener('resize', updateEdges);
    return () => window.removeEventListener('resize', updateEdges);
  }, [updateEdges]);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('.sd-card');
    const step = card ? card.offsetWidth + 24 : el.clientWidth / 3;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className="sd-section" id="destinations">
      <div className="sd-container">
        <div className="sd-header">
          <div className="sd-header-text">
            <span className="sd-kicker">
              <i className="sd-kicker-line" />
              Study Abroad Destinations
            </span>
            <h2 className="sd-title">
              Where Will Your <em>Story Unfold?</em>
            </h2>
            <span className="sd-title-rule" />
            <p className="sd-sub">
              Explore leading study destinations. We&apos;ll help you find the
              country, city and university that fit your ambitions.
            </p>
          </div>

          <div className="sd-nav">
           
          </div>
        </div>

        <div className="sd-track" ref={trackRef} onScroll={updateEdges}>
          {destinations.map((destination) => {
            const code = codes[destination.country];
            return (
              <article
                key={destination.id}
                className="sd-card"
                onMouseMove={handleMove}
                tabIndex={0}
              >
                <img
                  className="sd-img"
                  src={destination.image}
                  alt={`${destination.country} destination`}
                  draggable="false"
                />
                <div className="sd-shade" />
                <span className="sd-electric-ring" aria-hidden="true" />
                <span className="sd-spot" aria-hidden="true" />

                <span className="sd-badge">{code || '🌍'}</span>

                <div className="sd-content">
                  <h3>{getTitle(destination.country)}</h3>
                  <div className="sd-desc-wrap">
                    <p>{destination.description}</p>
                  </div>
                  <button type="button" className="sd-explore">
                    Explore
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="8 7 17 7 17 16" />
                    </svg>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StudyDestinations;