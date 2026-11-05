// import { MapPin, Mail, MessageSquare, Phone } from 'lucide-react';
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="site-footer">
//       <div className="container footer-top">
//         <div className="footer-brand">
//           <div className="brand footer-brand-mark">
//             <span className="brand-word">We</span>
//             <span className="brand-word brand-highlight">Manage</span>
//           </div>
//           <p>
//             Helping students turn global education goals into well-planned, confident next steps.
//           </p>
//         </div>

//         <div>
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="#about">About Us</a></li>
//             <li><a href="#services">Services</a></li>
//             <li><a href="#destinations">Study Destinations</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </div>
//         <div>
//           <h3>Services</h3>
//           <ul>
//             <li><a href="#test-preparation">TOEFL</a></li>
//             <li><a href="#test-preparation">IELTS</a></li>
//             <li><a href="#test-preparation">Duolingo</a></li>
//             <li><a href="#services">Consultancy</a></li>
//           </ul>
//         </div>

//         <div>
//           <h3>Contact</h3>
//           <ul className="contact-list-footer">
//             <li><Phone size={16} /> +44 20 7946 1234</li>
//             <li><MessageSquare size={16} /> +44 7700 900123</li>
//             <li><Mail size={16} /> hello@wemanage.co</li>
//             <li><MapPin size={16} /> London, UK</li>
//           </ul>
//          </div>
//         </div>

//       <div className="footer-bottom">
//         <div className="container footer-bottom-inner">
//           <span>© 2026 We Manage. All rights reserved.</span>
//           <div className="social-links" aria-label="Social media links">
//             <a href="#" aria-label="Facebook"><FaFacebookF size={16} /></a>
//             <a href="#" aria-label="Instagram"><FaInstagram size={16} /></a>
//             <a href="#" aria-label="LinkedIn"><FaLinkedinIn size={16} /></a>
//           </div>
//           <div className="footer-legal">
//             <a href="#">Privacy Policy</a>
//             <a href="#">Terms</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

































import { useEffect, useRef, useState } from 'react';
import { MapPin, Mail, MessageSquare, Phone, ChevronRight, ArrowUp } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import './Footer.css';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Study Destinations', href: '#destinations' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  { label: 'TOEFL', href: '#test-preparation' },
  { label: 'IELTS', href: '#test-preparation' },
  { label: 'Duolingo', href: '#test-preparation' },
  { label: 'Consultancy', href: '#services' },
];

const contacts = [
  { icon: Phone, text: '+44 20 7946 1234', href: 'tel:+442079461234' },
  { icon: MessageSquare, text: '+44 7700 900123', href: 'sms:+447700900123' },
  { icon: Mail, text: 'hello@wemanage.co', href: 'mailto:hello@wemanage.co' },
  { icon: MapPin, text: 'London, UK', href: '#contact' },
];

const socials = [
  { icon: FaFacebookF, label: 'Facebook', href: '#', cls: 'facebook' },
  { icon: FaInstagram, label: 'Instagram', href: '#', cls: 'instagram' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: '#', cls: 'linkedin' },
];

const Footer = () => {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [showTop, setShowTop] = useState(false);

  // Reveal animation when footer scrolls into view
  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Back-to-top button visibility
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer ref={footerRef} className={`site-footer ${visible ? 'is-visible' : ''}`}>
      <span className="footer-glow footer-glow-1" aria-hidden="true" />
      <span className="footer-glow footer-glow-2" aria-hidden="true" />

      <div className="container footer-top">
        <div className="footer-col footer-brand" style={{ '--i': 0 }}>
          <div className="brand footer-brand-mark">
            <span className="brand-word">We</span>
            <span className="brand-word brand-highlight">Manage</span>
          </div>
          <p>
            Helping students turn global education goals into well-planned, confident next steps.
          </p>
          <div className="social-links" aria-label="Social media links">
            {socials.map(({ icon: Icon, label, href, cls }) => (
              <a key={label} href={href} aria-label={label} className={cls}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col" style={{ '--i': 1 }}>
          <h3>Quick Links</h3>
          <ul className="footer-links">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>
                  <ChevronRight size={14} />
                  <span>{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col" style={{ '--i': 2 }}>
          <h3>Services</h3>
          <ul className="footer-links">
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>
                  <ChevronRight size={14} />
                  <span>{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col" style={{ '--i': 3 }}>
          <h3>Contact</h3>
          <ul className="contact-list-footer">
            {contacts.map(({ icon: Icon, text, href }) => (
              <li key={text}>
                <a href={href}>
                  <span className="contact-icon">
                    <Icon size={16} />
                  </span>
                  <span className="contact-text">{text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2026 We Manage. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`back-to-top ${showTop ? 'show' : ''}`}
        onClick={scrollTop}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
