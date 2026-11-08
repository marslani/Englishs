import { useEffect, useState } from 'react';
import './Loader.css';

const TIPS = [
  'IELTS · PTE · TOEFL · Duolingo',
  'Study Abroad Guidance',
  'Expert Language Coaching',
  'Your Global Journey Starts Here',
];

const EXIT_MS = 700;

const LoaderPro = ({ visible }) => {
  const [mounted, setMounted] = useState(visible);
  const [progress, setProgress] = useState(0);
  const [tipIndex, setTipIndex] = useState(0);

  // Mount / graceful unmount
  useEffect(() => {
    if (visible) {
      setMounted(true);
      setProgress(0);
      return undefined;
    }
    setProgress(100);
    const t = setTimeout(() => setMounted(false), EXIT_MS);
    return () => clearTimeout(t);
  }, [visible]);

  // Eased fake progress, stalls at 92% until `visible` becomes false
  useEffect(() => {
    if (!visible) return undefined;
    const id = setInterval(() => {
      setProgress((p) => (p >= 92 ? p : Math.min(92, p + (92 - p) * 0.06 + 0.4)));
    }, 120);
    return () => clearInterval(id);
  }, [visible]);

  // Rotating taglines
  useEffect(() => {
    if (!visible) return undefined;
    const id = setInterval(() => setTipIndex((i) => (i + 1) % TIPS.length), 2200);
    return () => clearInterval(id);
  }, [visible]);

  if (!mounted) return null;

  const pct = Math.round(progress);

  return (
    <div
      className={`wm-loader ${visible ? 'is-visible' : 'is-hidden'}`}
      role="status"
      aria-live="polite"
      aria-busy={visible}
    >
      <div className="wm-grid" aria-hidden="true" />
      <div className="wm-glow" aria-hidden="true" />

      <div className="wm-content">
        {/* Emblem: orbiting rings + monogram */}
        <div className="wm-emblem" aria-hidden="true">
          <span className="wm-ring wm-ring-1" />
          <span className="wm-ring wm-ring-2" />
          <span className="wm-orbit">
            <i />
          </span>
          <span className="wm-core">W</span>
        </div>

        {/* Wordmark */}
        <h1 className="wm-brand" aria-label="WeManage">
          <span className="wm-we">
            {'We'.split('').map((c, i) => (
              <span key={i} className="wm-letter" style={{ animationDelay: `${0.1 + i * 0.07}s` }}>
                {c}
              </span>
            ))}
          </span>
          <span className="wm-manage">
            {'Manage'.split('').map((c, i) => (
              <span key={i} className="wm-letter" style={{ animationDelay: `${0.3 + i * 0.06}s` }}>
                {c}
              </span>
            ))}
          </span>
        </h1>

        <p className="wm-tag">All Language Test &amp; Study Consultancy</p>

        {/* Progress */}
        <div className="wm-meter">
          <div className="wm-bar">
            <span className="wm-bar-fill" style={{ transform: `scaleX(${progress / 100})` }} />
          </div>
          <span className="wm-pct">{String(pct).padStart(2, '0')}%</span>
        </div>

        <p className="wm-tip" key={tipIndex}>
          {TIPS[tipIndex]}
        </p>
      </div>
    </div>
  );
};

export default LoaderPro;
