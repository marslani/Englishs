import { useMemo, useState } from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import './Testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = useMemo(
    () => testimonials[activeIndex % testimonials.length],
    [activeIndex]
  );

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <span className="section-kicker">Testimonials</span>
          <h2>What students say about their experience with We Manage.</h2>
        </div>

        <div className="testimonial-carousel" data-aos="fade-up">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar">{activeTestimonial.name.charAt(0)}</div>
              <div>
                <h3>{activeTestimonial.name}</h3>
                <span>{activeTestimonial.destination}</span>
              </div>
            </div>

            <div className="stars" aria-label={`${activeTestimonial.rating} star rating`}>
              {Array.from({ length: activeTestimonial.rating }).map((_, index) => (
                <Star key={index} size={16} fill="currentColor" />
              ))}
            </div>

            <p>{activeTestimonial.quote}</p>
          </div>

          <div className="testimonial-controls">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={index === activeIndex ? 'mini-dot active' : 'mini-dot'}
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
