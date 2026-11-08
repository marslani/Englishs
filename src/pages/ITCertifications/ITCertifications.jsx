import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  BookOpenCheck,
  Code2,
  X,
} from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import heroImage from '../../assets/images/img 5.avif';
import awsLogo from '../../assets/c/aws.png';
import azureLogo from '../../assets/c/azure.jpg';
import sqaLogo from '../../assets/c/sqa.jpg';
import networkingLogo from '../../assets/c/ccna.jpg';
import linuxLogo from '../../assets/c/linux.png';
import operatingSystemLogo from '../../assets/c/os.png';
import googleCloudLogo from '../../assets/c/gcp.png';
import cybersecurityLogo from '../../assets/c/ceh.jpg';
import './ITCertifications.css';

const WHATSAPP_NUMBER = '923237722686';
const getWhatsAppHref = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const certificationCategories = [
  {
    logo: awsLogo,
    name: 'AWS (Amazon Web Services)',
    certifications: [
      'CLF-C02 – AWS Certified Cloud Practitioner',
      'SAA-C03 – AWS Certified Solutions Architect – Associate',
      'DVA-C02 – AWS Certified Developer – Associate',
      'SOA-C02 – AWS Certified SysOps Administrator – Associate',
      'SAP-C02 – AWS Certified Solutions Architect – Professional',
      'DOP-C02 – AWS Certified DevOps Engineer – Professional',
      'ANS-C01 – AWS Certified Advanced Networking – Specialty',
      'SCS-C02 – AWS Certified Security – Specialty',
      'DAS-C01 – AWS Certified Data Analytics – Specialty',
      'MLS-C01 – AWS Certified Machine Learning – Specialty',
      'DBS-C01 – AWS Certified Database – Specialty',
      'AWS Certified Data Engineer – Associate',
    ],
  },
  {
    logo: azureLogo,
    name: 'Microsoft Azure',
    certifications: [
      'AZ-900 – Azure Fundamentals',
      'AI-900 – Azure AI Fundamentals',
      'DP-900 – Azure Data Fundamentals',
      'SC-900 – Security, Compliance, and Identity Fundamentals',
      'AZ-104 – Azure Administrator Associate',
      'AZ-204 – Azure Developer Associate',
      'AZ-305 – Azure Solutions Architect Expert',
      'AZ-400 – Azure DevOps Engineer Expert',
      'DP-203 – Azure Data Engineer Associate',
      'AI-102 – Azure AI Engineer Associate',
      'SC-200 – Security Operations Analyst Associate',
      'SC-300 – Identity and Access Administrator Associate',
      'SC-400 – Information Protection Administrator',
      'MB-910 – Dynamics 365 Fundamentals (CRM)',
      'MB-920 – Dynamics 365 Fundamentals (ERP)',
      'PL-900 – Power Platform Fundamentals',
      'PL-100 – Power Platform App Maker Associate',
      'PL-200 – Power Platform Functional Consultant',
      'PL-300 – Power BI Data Analyst Associate',
    ],
  },
  {
    logo: sqaLogo,
    name: 'Software Quality Assurance (SQA)',
    certifications: [
      'ISTQB – Associate Level',
      'ISTQB – Professional Level',
      'NQ – National Qualification Certified',
      'HN – Higher National Certified',
      'SQV – Scottish Vocational Certified',
    ],
  },
  {
    logo: networkingLogo,
    name: 'Networking',
    certifications: [
      'CCNE – Foundational Level',
      'CCNA – Associate Level',
      'CCNP – Professional Level',
    ],
  },
  {
    logo: linuxLogo,
    name: 'Linux',
    certifications: [
      'Linux Foundation Certified IT Associate (LFCA)',
      'Red Hat Certified System Administrator (RHCSA)',
      'Foundational System Administration Skills for Red Hat Enterprise Linux',
      'Oracle Linux System Administrator Certified Professional',
    ],
  },
  {
    logo: operatingSystemLogo,
    name: 'Microsoft Windows / Operating System',
    certifications: [
      'Microsoft Certified: Windows Server Hybrid Administrator Associate',
      'Microsoft Certified: Modern Desktop Administrator Associate',
      'Microsoft Certified: Azure Administrator Associate (AZ-104)',
      'Microsoft Certified: Security Administrator Associate (SC-300)',
      'MCSA – Microsoft Certified Solutions Associate',
      'MCSE – Microsoft Certified Solutions Expert',
    ],
  },
  {
    icon: Code2,
    name: 'Python',
    certifications: [
      'PCEP – Certified Entry-Level Python Programmer',
      'PCAP – Certified Associate Python Programmer',
      'PCIP – Certified Professional in Python Programming',
    ],
  },
  {
    logo: googleCloudLogo,
    name: 'Google Cloud & IBM',
    certifications: [
      'Google Cloud – Foundation Level',
      'Google Cloud – Associate Level',
      'Google Cloud – Professional Level',
      'IBM Software Engineering & DevOps Certifications',
      'IBM Certifications (iBAM – as written in PDF)',
    ],
  },
  {
    logo: cybersecurityLogo,
    name: 'Cybersecurity',
    certifications: [
      'CEH – Certified Ethical Hacker (EC-Council)',
      'CompTIA CySA+ – Cybersecurity Analyst',
      'Cisco CCNA Security',
      'GIAC Security Essentials (GSEC)',
      'Microsoft SC-200 – Security Operations Analyst Associate',
      'AWS Certified Security – Specialty',
      'CCSP – Certified Cloud Security Professional (ISC²)',
    ],
  },
];

const totalCertificationCount = certificationCategories.reduce(
  (total, category) => total + category.certifications.length,
  0
);

const planningSteps = [
  {
    title: 'Choose a direction',
    description: 'Connect your current skills and career goals to a suitable certification area.',
  },
  {
    title: 'Plan your preparation',
    description: 'Map prerequisites, study resources and a realistic timeline for your exam.',
  },
  {
    title: 'Get exam-ready',
    description: 'Review registration requirements and prepare for the next step with confidence.',
  },
];

function ITCertificationsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!selectedCategory) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedCategory(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
      previouslyFocused?.focus?.();
    };
  }, [selectedCategory]);

  return (
    <div className="it-certifications-page">
      <Navbar />
      <main>
        <section className="it-cert-hero">
          <img className="it-cert-hero__image" src={heroImage} alt="" />
          <div className="it-cert-hero__content">
            <p className="it-cert-kicker">Professional development</p>
            <h1>IT certifications, chosen with purpose.</h1>
            <p className="it-cert-hero__copy">
              Guidance on globally recognised IT certifications to strengthen your profile. Find a
              pathway that fits your experience, interests and next career goal.
            </p>
            <div className="it-cert-actions">
              <a className="it-cert-button it-cert-button--primary" href="#certification-paths">
                Explore certification paths <ArrowRight size={17} />
              </a>
              <a
                className="it-cert-button it-cert-button--secondary"
                href={getWhatsAppHref('Hello, I would like guidance on IT certifications.')}
                target="_blank"
                rel="noreferrer"
              >
                Talk to an advisor
              </a>
            </div>
          </div>
        </section>

        <section className="it-cert-section it-cert-paths" id="certification-paths">
          <div className="it-cert-section__heading">
            <div>
              <p className="it-cert-kicker">Explore your options</p>
              <h2>Browse certifications by category</h2>
            </div>
            <p>Explore {totalCertificationCount} certification options across nine IT categories.</p>
          </div>
          <div className="it-cert-path-grid">
            {certificationCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  className="it-cert-path"
                  key={category.name}
                  type="button"
                  aria-haspopup="dialog"
                  aria-label={`View ${category.certifications.length} ${category.name} certifications`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <span className="it-cert-path__icon">
                    {category.logo ? (
                      <img src={category.logo} alt="" />
                    ) : (
                      <Icon size={25} strokeWidth={1.8} aria-hidden="true" />
                    )}
                  </span>
                  <span className="it-cert-path__count">{category.certifications.length}</span>
                  <span className="it-cert-path__name">{category.name}</span>
                  <span className="it-cert-path__label">View certifications <ArrowRight size={16} /></span>
                </button>
              );
            })}
          </div>
          <div className="it-cert-total" aria-label={`${totalCertificationCount} certifications across 9 categories`}>
            <strong>{totalCertificationCount}</strong>
            <span>Total certifications <i /> 9 categories</span>
          </div>
        </section>

        <section className="it-cert-process">
          <div className="it-cert-section it-cert-process__inner">
            <div className="it-cert-process__intro">
              <p className="it-cert-kicker">A clear next step</p>
              <h2>From interest to exam plan</h2>
              <p>Get practical guidance at each stage, from choosing a credential to preparing for registration.</p>
            </div>
            <ol className="it-cert-steps">
              {planningSteps.map((step, index) => (
                <li key={step.title}>
                  <span className="it-cert-step__number">0{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="it-cert-cta">
          <div className="it-cert-cta__copy">
            <BookOpenCheck size={25} strokeWidth={1.7} />
            <div>
              <p className="it-cert-kicker">Make your plan</p>
              <h2>Not sure where to begin?</h2>
              <p>Tell us about your experience and goals. We’ll help you explore a realistic certification roadmap.</p>
            </div>
          </div>
          <a
            className="it-cert-button it-cert-button--primary"
            href={getWhatsAppHref('Hello, I would like help choosing an IT certification path.')}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp <ArrowRight size={17} />
          </a>
        </section>
      </main>
      <Footer />
      {selectedCategory && (
        <div
          className="it-cert-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedCategory(null);
          }}
        >
          <section
            className="it-cert-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="it-cert-modal-title"
          >
            <div className="it-cert-modal__header">
              <div>
                <p className="it-cert-kicker">Certification courses</p>
                {selectedCategory.logo && (
                  <img className="it-cert-modal__logo" src={selectedCategory.logo} alt="" />
                )}
                <h2 id="it-cert-modal-title">{selectedCategory.name}</h2>
                <p>{selectedCategory.certifications.length} certifications available</p>
              </div>
              <button
                ref={closeButtonRef}
                className="it-cert-modal__close"
                type="button"
                aria-label="Close certification list"
                onClick={() => setSelectedCategory(null)}
              >
                <X size={21} />
              </button>
            </div>
            <div className="it-cert-modal__body">
              <div className="it-cert-course-grid">
                {selectedCategory.certifications.map((certification, index) => (
                  <article className="it-cert-course-card" key={certification}>
                    <span className="it-cert-course-card__number">{String(index + 1).padStart(2, '0')}</span>
                    <h3>{certification}</h3>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default ITCertificationsPage;