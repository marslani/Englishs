import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { studyAbroadCountries } from '../../data/studyAbroadCountries';
import './StudyAbroad.css';

const WHATSAPP_NUMBER = '923237722686';
const getWhatsAppHref = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export function StudyAbroadPage() {
  return (
    <div className="study-abroad-page">
      <Navbar />
      <main>
        <section className="study-abroad-hero">
          <img
            className="study-abroad-hero__image"
            src={studyAbroadCountries[0].image}
            alt="University campus in the United Kingdom"
          />
          <div className="study-abroad-hero__inner">
            <p className="section-kicker">Study Abroad Consultancy</p>
            <h1>Choose the right destination for your future.</h1>
            <p className="study-abroad-copy">
              From the UK and USA to Australia and Europe, get practical help comparing
              destinations, courses and application requirements.
            </p>
            <div className="hero-actions">
              <a href="#study-destinations" className="primary-btn">
                Explore destinations <ArrowRight size={17} />
              </a>
              <a
                href={getWhatsAppHref('Hello, I would like guidance about studying abroad.')}
                className="secondary-btn"
                target="_blank"
                rel="noreferrer"
              >
                Talk to an advisor
              </a>
            </div>
          </div>
        </section>

        <section className="study-abroad-container study-abroad-destinations" id="study-destinations">
          <div className="destinations-heading">
            <p className="section-kicker">Find your fit</p>
            <h2>Explore study destinations</h2>
            <p>Compare the basics, then open a destination for more details.</p>
          </div>
          <div className="country-grid">
            {studyAbroadCountries.map((country) => (
              <Link
                key={country.slug}
                to={`/study-abroad/${country.slug}`}
                className="country-card"
                aria-label={`Explore study options in ${country.name}`}
              >
                <div className="country-card__image-wrap">
                  <img src={country.image} alt={`${country.name} study destination`} loading="lazy" />
                  <span className="country-flag" aria-hidden="true">{country.flag}</span>
                  <span className="country-code">{country.country}</span>
                </div>
                <div className="country-card__body">
                  <span className="country-card__badge">{country.badge}</span>
                  <h3>{country.name}</h3>
                  <p>{country.description}</p>
                  <span className="country-card__link">Explore destination <ArrowUpRight size={16} /></span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function StudyAbroadCountryPage() {
  const { countrySlug } = useParams();
  const selectedCountry = studyAbroadCountries.find((country) => country.slug === countrySlug);

  if (!selectedCountry) {
    return (
      <div className="study-abroad-page">
        <Navbar />
        <main className="study-abroad-container country-not-found">
          <h1>Destination not found</h1>
          <p>This destination is not available. Browse the current study options instead.</p>
          <Link to="/study-abroad" className="primary-btn">View all destinations</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="study-abroad-page">
      <Navbar />
      <main className="study-abroad-container study-abroad-detail-page">
        <Link to="/study-abroad" className="back-link">
          <ArrowLeft size={17} /> Back to study destinations
        </Link>
        <section className="country-detail">
          <div className="country-detail__image">
            <img src={selectedCountry.image} alt={`${selectedCountry.name} campus and study destination`} />
            <span className="country-flag country-flag--large" aria-hidden="true">
              {selectedCountry.flag}
            </span>
          </div>
          <div className="country-detail__content">
            <p className="section-kicker">Study destination · {selectedCountry.country}</p>
            <h1>Study in {selectedCountry.name}</h1>
            <p className="country-overview">{selectedCountry.description}</p>
          </div>
          <div className="detail-grid">
            <section className="info-panel">
              <h2>Why consider {selectedCountry.name}?</h2>
              <ul>
                {selectedCountry.keyHighlights.map((item) => (
                  <li key={item}><CheckCircle2 size={17} />{item}</li>
                ))}
              </ul>
            </section>
            <section className="info-panel facts-panel">
              <h2>Planning notes</h2>
              <dl className="facts-list">
                <div><dt>Visa</dt><dd>{selectedCountry.visa}</dd></div>
                <div><dt>Common intakes</dt><dd>{selectedCountry.intakes.join(', ')}</dd></div>
                <div><dt>Living costs</dt><dd>{selectedCountry.livingCost}</dd></div>
              </dl>
              <p className="facts-note">Details can change. Confirm current requirements with the institution and relevant authorities.</p>
            </section>
          </div>
          <section className="courses-panel">
            <h2>Popular course areas</h2>
            <ul className="course-tags">
              {selectedCountry.popularCourses.map((course) => <li key={course}>{course}</li>)}
            </ul>
          </section>
          <section className="cta-panel">
            <div>
              <p className="section-kicker">Your next step</p>
              <h2>Need help shortlisting a course?</h2>
              <p>
                Talk through your goals and get guidance on course selection, applications and
                preparing your documents for {selectedCountry.name}.
              </p>
            </div>
            <a
              href={getWhatsAppHref(`Hello, I would like to discuss study options in ${selectedCountry.name}.`)}
              className="primary-btn"
              target="_blank"
              rel="noreferrer"
            >
              Talk to an advisor <ArrowRight size={17} />
            </a>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default StudyAbroadPage;