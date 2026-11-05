import { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  Compass,
  GraduationCap,
  Globe,
  Languages,
  Laptop,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import heroImage from '../../assets/images/img 2.jpg';
import './EnglishLanguageTests.css';

const FILTERS = ['All', 'Official Tests', 'Prep Courses'];
const WHATSAPP_NUMBER = '923237722686';
const getWhatsAppHref = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const tests = [
  {
    name: 'TOEFL iBT',
    category: 'Official Tests',
    icon: GraduationCap,
    accent: '#a7792c',
    tagline: 'An academic English test widely accepted for university admissions.',
    tags: ['Academic', 'Reading', 'Speaking'],
    features: ['Test format walkthrough', 'Section-wise practice', 'Registration support'],
  },
  {
    name: 'Duolingo English Test',
    category: 'Official Tests',
    icon: Laptop,
    accent: '#16826d',
    tagline: 'An online, at-home English test with quick results for applications.',
    tags: ['Online', 'At home', 'Fast results'],
    features: ['Setup and tech checklist', 'Question-type practice', 'Application guidance'],
  },
  {
    name: 'Oxford ELLT',
    category: 'Official Tests',
    icon: BookOpen,
    accent: '#7252a3',
    tagline: 'An English level test for study and progression plans.',
    tags: ['Oxford', 'Level test', 'Study'],
    features: ['Level check and planning', 'Practice materials', 'Test-day support'],
  },
  {
    name: 'LanguageCert',
    category: 'Official Tests',
    icon: Award,
    accent: '#2875a5',
    tagline: 'Internationally recognised English certification with flexible test formats.',
    tags: ['Certified', 'Flexible', 'Global'],
    features: ['Choose the right exam type', 'Skills practice', 'Booking guidance'],
  },
  {
    name: 'IELTS Preparation',
    category: 'Prep Courses',
    icon: Globe,
    accent: '#b65337',
    tagline: 'Structured IELTS preparation with practice, feedback and test guidance.',
    tags: ['Academic', 'General', 'Mock tests'],
    features: ['Mock tests with feedback', 'Writing and speaking review', 'Score-goal planning'],
  },
  {
    name: 'PTE Preparation',
    category: 'Prep Courses',
    icon: Languages,
    accent: '#a43e68',
    tagline: 'Computer-based test preparation with practice for every PTE task type.',
    tags: ['Computer-based', 'Practice', 'Strategy'],
    features: ['Task-type strategies', 'Timed practice', 'Progress tracking'],
  },
];

const stats = [
  { value: 6, label: 'Test options' },
  { value: 3, label: 'Simple steps' },
  { value: 1, label: 'Dedicated advisor' },
];

const steps = [
  {
    icon: Compass,
    title: 'Choose your test',
    text: 'Pick the English test that matches your university or visa requirements.',
  },
  {
    icon: Sparkles,
    title: 'Prepare with guidance',
    text: 'Follow a focused preparation plan with practice and feedback.',
  },
  {
    icon: CalendarCheck,
    title: 'Book and manage',
    text: 'Get help with registration, scheduling and test-day readiness.',
  },
];

const useReveal = (threshold = 0.15) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (!('IntersectionObserver' in window)) {
      node.classList.add('is-visible');
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.unobserve(node);
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
};

const CountUp = ({ to }) => {
  const [value, setValue] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? to : 0
  );

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let frame;
    const start = performance.now();
    const duration = 1200;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(to * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [to]);

  return value;
};

const ScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const documentRoot = document.documentElement;
        const maxScroll = documentRoot.scrollHeight - documentRoot.clientHeight;
        const progress = maxScroll > 0 ? documentRoot.scrollTop / maxScroll : 0;
        if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
      });
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="elt-progress" aria-hidden="true">
      <span ref={barRef} className="elt-progress-bar" />
    </div>
  );
};

const TestCard = ({ test, index }) => {
  const ref = useReveal();
  const Icon = test.icon;

  const handleMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const pointerX = event.clientX - rect.left;
    const pointerY = event.clientY - rect.top;
    card.style.setProperty('--mx', `${pointerX}px`);
    card.style.setProperty('--my', `${pointerY}px`);
    card.style.setProperty('--rx', `${(0.5 - pointerY / rect.height) * 5}deg`);
    card.style.setProperty('--ry', `${(pointerX / rect.width - 0.5) * 5}deg`);
  };

  const handleLeave = (event) => {
    event.currentTarget.style.setProperty('--rx', '0deg');
    event.currentTarget.style.setProperty('--ry', '0deg');
  };

  return (
    <li
      ref={ref}
      className="elt-test-item"
      style={{ '--delay': `${index * 80}ms`, '--accent': test.accent }}
    >
      <a
        href={getWhatsAppHref(`Hello, I would like to know more about ${test.name}.`)}
        className="elt-card"
        aria-label={`Enquire about ${test.name}`}
        target="_blank"
        rel="noreferrer"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <span className="elt-card-glow" aria-hidden="true" />
        <span className="elt-card-bigno" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="elt-card-top">
          <span className="elt-test-number">{String(index + 1).padStart(2, '0')}</span>
          <span className="elt-category">{test.category}</span>
        </div>
        <span className="elt-icon-wrap"><Icon size={25} strokeWidth={1.7} /></span>
        <h3>{test.name}</h3>
        <p className="elt-card-text">{test.tagline}</p>
        <ul className="elt-tags">
          {test.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="elt-features">
          <ul>
            {test.features.map((feature) => (
              <li key={feature}><CheckCircle2 size={16} />{feature}</li>
            ))}
          </ul>
        </div>
        <span className="elt-card-cta">Enquire now <ArrowUpRight size={17} /></span>
      </a>
    </li>
  );
};

const StepCard = ({ step, index }) => {
  const ref = useReveal(0.3);
  const Icon = step.icon;

  return (
    <li ref={ref} className="elt-step" style={{ '--delay': `${index * 140}ms` }}>
      <span className="elt-step-icon"><Icon size={22} strokeWidth={1.8} /></span>
      <span className="elt-step-no">Step {index + 1}</span>
      <h3>{step.title}</h3>
      <p>{step.text}</p>
    </li>
  );
};

const EnglishLanguageTestsPage = () => {
  const [filter, setFilter] = useState('All');
  const headingRef = useReveal();
  const ctaRef = useReveal(0.25);
  const visibleTests = filter === 'All' ? tests : tests.filter((test) => test.category === filter);

  return (
    <div className="english-tests-page">
      <ScrollProgress />
      <Navbar />
      <main>
        <section className="elt-hero">
          <img className="elt-hero-image" src={heroImage} alt="" />
          <span className="elt-hero-grid" aria-hidden="true" />
          <div className="elt-container elt-hero-inner">
            <Link className="elt-back-link" to="/">
              <ArrowLeft size={17} /> Back to home
            </Link>
            <p className="elt-eyebrow"><span className="elt-eyebrow-dot" />English test support</p>
            <h1>English Language Test Prep <span className="elt-gold">&amp; Management</span></h1>
            <p className="elt-intro">
              Explore preparation and support for the English language test that fits your study plans.
            </p>
            <div className="elt-hero-actions">
              <a className="elt-btn elt-btn--primary" href="#elt-options">
                Explore tests <ArrowRight size={17} />
              </a>
              <a
                className="elt-btn elt-btn--ghost"
                href={getWhatsAppHref('Hello, I would like to talk to an advisor about English test preparation.')}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} /> Talk to an advisor
              </a>
            </div>
            <ul className="elt-stats">
              {stats.map((stat) => (
                <li key={stat.label}>
                  <strong><CountUp to={stat.value} /></strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="elt-options" id="elt-options">
          <div className="elt-container">
            <div ref={headingRef} className="elt-section-heading elt-reveal">
              <div>
                <p className="elt-eyebrow">Test options</p>
                <h2>Choose your English test</h2>
              </div>
              <div className="elt-filters" role="tablist" aria-label="Filter tests">
                {FILTERS.map((item, index) => (
                  <button
                    key={item}
                    id={`elt-filter-${index}`}
                    type="button"
                    role="tab"
                    aria-selected={filter === item}
                    aria-controls="elt-test-list"
                    className={`elt-filter ${filter === item ? 'is-active' : ''}`}
                    onClick={() => setFilter(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <ul
              className="elt-test-grid"
              id="elt-test-list"
              role="tabpanel"
              aria-labelledby={`elt-filter-${FILTERS.indexOf(filter)}`}
              key={filter}
            >
              {visibleTests.map((test, index) => <TestCard key={test.name} test={test} index={index} />)}
            </ul>
          </div>
        </section>

        <section className="elt-process">
          <div className="elt-container">
            <div className="elt-section-heading elt-section-heading--center">
              <p className="elt-eyebrow">How it works</p>
              <h2>Three simple steps</h2>
            </div>
            <ul className="elt-steps">
              {steps.map((step, index) => <StepCard key={step.title} step={step} index={index} />)}
            </ul>
          </div>
        </section>

        <section className="elt-cta-section">
          <div className="elt-container">
            <div ref={ctaRef} className="elt-cta elt-reveal">
              <div>
                <p className="elt-eyebrow">Not sure which test?</p>
                <h2>Let an advisor help you decide</h2>
                <p>
                  Share your study plans and we will guide you to the right English test and preparation path.
                </p>
              </div>
              <a
                className="elt-btn elt-btn--primary elt-btn--shine"
                href={getWhatsAppHref('Hello, I would like to talk to an advisor about choosing an English test.')}
                target="_blank"
                rel="noreferrer"
              >
                Talk to an advisor <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EnglishLanguageTestsPage;