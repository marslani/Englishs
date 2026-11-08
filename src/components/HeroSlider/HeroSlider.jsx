import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play, Sparkles } from 'lucide-react';
import './HeroSlider.css';

// Direct Inline Slides Data
const slidesData = [
  {
    id: 1,
    accent: 'YOUR DREAM | OUR PRIORITY',
    titleMain: 'Your Success Is',
    titleItalic: 'Our Priority',
    subtitle: 'Personalized guidance for students worldwide.',
    primaryCta: 'Talk to Our Experts',
    primaryLink: '#experts',
    secondaryCta: 'How It Works',
    secondaryLink: '#how-it-works',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1920',
  },
  {
    id: 2,
    accent: 'EXPERT ADVISORY | GLOBAL REACH',
    titleMain: 'Empowering Your',
    titleItalic: 'Future Goals',
    subtitle: 'Comprehensive support to excel in your academic journey.',
    primaryCta: 'Get Started',
    primaryLink: '#contact',
    secondaryCta: 'Learn More',
    secondaryLink: '#services',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920',
  },
  {
    id: 3,
    accent: 'TAILORED SOLUTIONS | DEDICATED TEAM',
    titleMain: 'Navigate Your',
    titleItalic: 'Career Path',
    subtitle: 'Strategic insights tailored to your unique aspirations.',
    primaryCta: 'Book Consultation',
    primaryLink: '#book',
    secondaryCta: 'View Services',
    secondaryLink: '#services',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1920',
  },
  {
    id: 4,
    accent: 'TRUSTED GUIDANCE | PROVEN RESULTS',
    titleMain: 'Achieve Worldwide',
    titleItalic: 'Excellence',
    subtitle: 'Connecting ambition with top-tier international opportunities.',
    primaryCta: 'Explore Opportunities',
    primaryLink: '#explore',
    secondaryCta: 'Our Process',
    secondaryLink: '#process',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1920',
  },
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = slidesData.length;

  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <section
      className="hero-section"
      id="home"
      aria-label="Hero slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero-slider">
        {/* Glow Effects */}
        <div className="hero-electric-glow hero-electric-glow-one" />
        <div className="hero-electric-glow hero-electric-glow-two" />

        {/* Slide List */}
        {slidesData.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <article
              key={slide.id}
              className={`hero-slide ${isActive ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
              aria-hidden={!isActive}
            >
              <div className="hero-image-layer" />
              <div className="hero-overlay" />
              <div className="hero-noise" />

              <div className="hero-inner">
                <div className="hero-copy">
                  <div className="hero-top-line">
                    <span className="hero-line" />
                    <span className="eyebrow">
                      <Sparkles size={13} />
                      {slide.accent}
                    </span>
                  </div>

                  <h1>
                    {slide.titleMain}{' '}
                    {slide.titleItalic && (
                      <span className="italic-text">{slide.titleItalic}</span>
                    )}
                  </h1>

                  <p>{slide.subtitle}</p>

                  <div className="hero-actions">
                    <a href={slide.primaryLink} className="primary-btn">
                      <span>{slide.primaryCta}</span>
                      <ArrowRight size={16} />
                    </a>

                    <a href={slide.secondaryLink} className="secondary-btn">
                      <span>{slide.secondaryCta}</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}

        {/* Bottom Bar Controls */}
        <div className="hero-bottom">
          <div className="hero-slide-info">
            <div className="hero-progress">
              <span
                key={activeIndex}
                className={`hero-progress-bar ${isPaused ? 'paused' : ''}`}
              />
            </div>
            <span className="hero-current">
              {String(activeIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>
          </div>

          <div className="hero-controls">
            <button
              type="button"
              className="slider-arrow pause-btn"
              aria-label={isPaused ? 'Play slider' : 'Pause slider'}
              onClick={togglePause}
            >
              {isPaused ? <Play size={14} /> : <Pause size={14} />}
            </button>

            <button
              type="button"
              className="slider-arrow"
              aria-label="Previous slide"
              onClick={goToPrevious}
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              className="slider-arrow"
              aria-label="Next slide"
              onClick={goToNext}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;