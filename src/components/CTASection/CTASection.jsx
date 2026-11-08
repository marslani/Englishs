import './CTASection.css';

const WHATSAPP_NUMBER = '923237722686';
const getWhatsAppHref = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const defaultActions = [
  {
    label: 'Book a Consultation',
    href: getWhatsAppHref('Hello, I would like to book a consultation.'),
    variant: 'primary',
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'Apply Now',
    href: getWhatsAppHref('Hello, I would like to apply for study abroad.'),
    variant: 'ghost',
    target: '_blank',
    rel: 'noreferrer',
  },
];

const CTASection = ({
  kicker = 'Ready to begin?',
  title = 'Ready to Start Your Global Journey?',
  text = 'Let our experts turn your study-abroad goals into a clear action plan.',
  actions = defaultActions,
}) => {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="cta__inner">
        <div className="cta__content">
          <span className="cta__kicker">{kicker}</span>
          <h2 id="cta-title" className="cta__title">{title}</h2>
          <p className="cta__text">{text}</p>
        </div>

        <div className="cta__actions">
          {actions.map(({ label, href, variant = 'ghost', target, rel }) => (
            <a
              key={label}
              href={href}
              target={target}
              rel={rel}
              className={`cta__btn cta__btn--${variant}`}
            >
              {label}
              <span className="cta__arrow" aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
