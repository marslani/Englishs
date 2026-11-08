import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Languages,
  GraduationCap,
  Laptop,
  Mic,
  Globe,
  ArrowRight,
  ArrowUp,
  Check,
  X,
  Plus,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
   {
    id: 1,
    icon: Languages,
    title: 'English Language Test Prep & Management',
    description: 'Expert support for your English language test journey.',
    points: ['Test selection guidance', 'Preparation plan', 'Registration support'],
  },
   {
    id: 2,
    icon: Laptop,
    title: 'IT Certifications',
    description: 'Guidance on globally recognised IT certifications to strengthen your profile.',
    points: ['Certification roadmap', 'Study resources', 'Exam registration help'],
  },
  {
    id: 3,
    icon: Mic,
    title: 'University Interview Prep',
    description: 'Confident, authentic interview performance for admissions and credibility checks.',
    points: ['Mock interviews', 'Personal narrative coaching', 'Common question bank'],
  },
 
  {
    id: 4,
    icon: Globe,
    title: 'Study Abroad Consultancy',
    description: 'End-to-end support from choosing a course to preparing for departure.',
    points: ['Course & university shortlist', 'Application management', 'Visa document guidance'],
  },
 
];

const ServiceCard = ({ service, index }) => {
  const navigate = useNavigate();
  const { icon: Icon, id, title, description, points } = service;
  const isEnglishTestManagement = id === 1;
  const isITCertification = id === 2;
  const isStudyAbroadConsultancy = id === 4;
  const CardElement = isEnglishTestManagement || isITCertification ? Link : 'article';
  const cardLinkProps = isEnglishTestManagement || isITCertification
    ? {
        to: isITCertification ? '/it-certifications' : '/english-language-tests',
        'aria-label': `Open ${title}`,
      }
    : {};
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    ref.current.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  const handleCardClick = (e) => {
    if (isStudyAbroadConsultancy && !(e.target.closest('a') || e.target.closest('button'))) {
      navigate('/study-abroad');
    }
  };

  const handleCardKeyDown = (e) => {
    if (isStudyAbroadConsultancy && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      navigate('/study-abroad');
    }
  };

  return (
    <CardElement
      ref={ref}
      className={`svc-card ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${(index % 2) * 120}ms` }}
      onMouseMove={handleMove}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      tabIndex={isStudyAbroadConsultancy ? 0 : undefined}
      role={isStudyAbroadConsultancy ? 'link' : undefined}
      {...cardLinkProps}
    >
      <div className="svc-top">
        <div className="svc-icon">
          <Icon size={24} strokeWidth={1.6} />
        </div>
        <span className="svc-num">{String(id).padStart(2, '0')}</span>
      </div>

      <h3 className="svc-title">{title}</h3>
      <p className="svc-desc">{description}</p>

      {isEnglishTestManagement || isITCertification ? (
        <>
          <div className="svc-divider" />
          <span className="svc-toggle">
            <span>{isITCertification ? 'Explore certification paths' : 'Explore test options'}</span>
            <ArrowRight size={16} />
          </span>
        </>
      ) : (
        <>
          <div className={`svc-collapse ${open ? 'open' : ''}`}>
            <div className="svc-collapse-inner">
              <ul className="svc-list">
                {points.map((p, i) => (
                  <li key={p} style={{ '--i': i }}>
                    <Check size={16} strokeWidth={1.8} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              {isStudyAbroadConsultancy ? null : (
                <a href="#contact" className="svc-inquire">
                  Inquire for {title}
                  <ArrowRight size={16} />
                </a>
              )}
            </div>
          </div>

          <div className="svc-divider" />

          <button
            type="button"
            className="svc-toggle"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((v) => !v);
            }}
            aria-expanded={open}
          >
            <span>{open ? 'Show Less' : 'Show More'}</span>
            {open ? <X size={16} /> : <Plus size={16} />}
          </button>
        </>
      )}
    </CardElement>
  );
};

const Services = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="svc-section" id="services">
      <div className="svc-container">
        <div className="svc-heading">
          <span className="svc-kicker">
            <i />
            What We Offer
          </span>
          <h2>
            Our <em>Services</em>
          </h2>
          <div className="svc-line" />
          <p>
            From language test preparation to university admission, every service is designed to
            move you confidently toward your goal.
          </p>
        </div>

        <div className="svc-grid">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>

     
    </section>
  );
};

export default Services;
