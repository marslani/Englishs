import { useEffect, useState } from 'react';
import './Loader.css';

const TIPS = [
  'IELTS · PTE · TOEFL · Duolingo',
  'Study Abroad Guidance',
  'Expert Language Coaching',
  'Your Global Journey Starts Here',
];

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  size: 2 + (i % 4),
  delay: `${(i * 0.45) % 5}s`,
  duration: `${6 + (i % 5) * 1.4}s`,
}));

const Loader = ({ visible }) => {
  const [mounted, setMounted] = useState(visible);
  const [progress, setProgress] = useState(0);
  const [tipIndex, setTipIndex] = useState(0);

  // Mount / unmount with a graceful exit
  useEffect(() => {
    if (visible) {
      setMounted(true);
      setProgress(0);
      return undefined;
    }
    setProgress(100);
    const timeout = setTimeout(() => setMounted(false), 900);
    return () => clearTimeout(timeout);
  }, [visible]);

  // Simulated progress that eases toward 92% while waiting
  useEffect(() => {
    if (!visible) return undefined;
    const interval = setInterval(() => {
      setProgress((p) => (p >= 92 ? p : Math.min(92, p + (92 - p) * 0.06 + 0.4)));
    }, 120);
    return () => clearInterval(interval);
  }, [visible]);

  // Rotating taglines
  useEffect(() => {
    if (!visible) return undefined;
    const interval = setInterval(() => setTipIndex((i) => (i + 1) % TIPS.length), 2000);
    return () => clearInterval(interval);
  }, [visible]);

  if (!mounted) return null;

  const pct = Math.round(progress);

  return (
    <div
      className={`loader-shell ${visible ? 'visible' : 'hidden'}`}
      role="status"
      aria-live="polite"
      aria-busy={visible}
    >
      <div className="loader-aurora" aria-hidden="true">
        <span className="aurora aurora-1" />
        <span className="aurora aurora-2" />
        <span className="aurora aurora-3" />
      </div>

      <div className="loader-particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="loader-card">
        <span className="card-sheen" aria-hidden="true" />

        <div className="emblem" aria-hidden="true">
          <span className="emblem-ring ring-outer" />
          <span className="emblem-ring ring-inner" />
          <span className="emblem-glow" />
          <span className="emblem-core">W</span>
        </div>

        <div className="brand-mark" aria-label="WeManage">
          <span className="brand-we">
            {'We'.split('').map((c, i) => (
              <span key={i} className="letter" style={{ animationDelay: `${0.15 + i * 0.08}s` }}>
                {c}
              </span>
            ))}
          </span>
          <span className="brand-manage">
            {'Manage'.split('').map((c, i) => (
              <span key={i} className="letter" style={{ animationDelay: `${0.35 + i * 0.07}s` }}>
                {c}
              </span>
            ))}
          </span>
        </div>

        <div className="loader-meter">
          <div className="loader-progress">
            <span className="loader-progress-bar" style={{ transform: `scaleX(${progress / 100})` }}>
              <i className="loader-progress-glow" />
            </span>
          </div>
          <span className="loader-percent">{String(pct).padStart(2, '0')}%</span>
        </div>

        <p className="loader-tag">All Language Test &amp; Study Consultancy</p>
        <p className="loader-tip" key={tipIndex}>
          {TIPS[tipIndex]}
        </p>
      </div>
    </div>
  );
};

export default Loader;
