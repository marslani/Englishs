import { useEffect, useRef, useState } from 'react';
import './TrustStats.css';

const stats = [
  { value: 10, suffix: '+', label: 'Countries' },
  { value: 500, suffix: '+', label: 'Students Guided' },
  { value: 95, suffix: '%', label: 'Application Support' },
  { value: 10, suffix: '+', label: 'Years Experience' },
];

const AnimatedNumber = ({ value, suffix, visible }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!visible) {
      setDisplayValue(0);
      return;
    }

    let animationFrame;
    let startValue = 0;
    const startTime = performance.now();
    const duration = 1800;

    const tick = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      const nextValue = Math.round(value * easedProgress);
      setDisplayValue(nextValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, visible]);

  return (
    <>
      {displayValue}
      {suffix}
    </>
  );
};

const TrustStats = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="trust-stats" ref={ref}>
      <div className="container trust-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label} data-aos="fade-up">
            <strong>
              {visible ? <AnimatedNumber value={stat.value} suffix={stat.suffix} visible={visible} /> : '0'}
            </strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStats;
