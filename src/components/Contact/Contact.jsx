import { useState } from 'react';
import { MapPin, Mail, Phone, Clock3, MessageSquare } from 'lucide-react';
import './Contact.css';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  country: '',
  service: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-layout">
        <div className="contact-copy" data-aos="fade-right">
          <span className="section-kicker">Contact</span>
          <h2>Speak with our team about your next study-abroad plan.</h2>

          <div className="contact-list">
            <div className="contact-item">
              <Phone size={18} />
              <span>+44 20 7946 1234</span>
            </div>
            <div className="contact-item">
              <MessageSquare size={18} />
              <span>+44 7700 900123</span>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <span>hello@wemanage.co</span>
            </div>
            <div className="contact-item">
              <MapPin size={18} />
              <span>18 Regent Street, London, UK</span>
            </div>
            <div className="contact-item">
              <Clock3 size={18} />
              <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left">
          <div className="form-grid">
            <label>
              <span>Name</span>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your email" />
            </label>
            <label>
              <span>Phone</span>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Your phone" />
            </label>
            <label>
              <span>Interested Country</span>
              <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="e.g. Canada" />
            </label>
            <label>
              <span>Service</span>
              <select name="service" value={formData.service} onChange={handleChange}>
                <option value="">Select a service</option>
                <option value="study-abroad">Study Abroad Consultancy</option>
                <option value="language-test">Language Test Preparation</option>
                <option value="university">University Interview Prep</option>
                <option value="visa">Visa Guidance</option>
              </select>
            </label>
            <label className="full-width">
              <span>Message</span>
              <textarea name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Tell us about your goals" required />
            </label>
          </div>

          <button type="submit" className="submit-btn">Submit</button>

          {submitted && (
            <div className="success-toast" role="status" aria-live="polite">
              Thanks! Your enquiry has been received. Our team will be in touch soon.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
