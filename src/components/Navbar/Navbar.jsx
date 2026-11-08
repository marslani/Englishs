

import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Study Destinations', href: '#destinations' },
  { label: 'Language Tests', href: '#test-preparation' },
  { label: 'Success Stories', href: '#success-stories' },
  { label: 'How It Works', href: '#application-process' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [breadcrumbMenuOpen, setBreadcrumbMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('Home');
  const navigationOpen = mobileOpen || breadcrumbMenuOpen;
  const getHomeHref = (href) => (pathname === '/' ? href : `/${href}`);
  const getNavHref = (item) =>
    pathname === '/english-language-tests' && item.label === 'Language Tests'
      ? '#elt-options'
      : getHomeHref(item.href);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      if (pathname === '/english-language-tests' && (!currentHash || currentHash === '#elt-options')) {
        setActivePage('Language Tests');
        return;
      }

      const currentItem = navItems.find(
        (item) => item.href === currentHash
      );

      if (currentItem) {
        setActivePage(currentItem.label);
      } else {
        setActivePage('Home');
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [pathname]);

  const handleLinkClick = (label) => {
    setActivePage(label);
    setMobileOpen(false);
    setBreadcrumbMenuOpen(false);
  };

  const handleNavigationToggle = () => {
    if (window.matchMedia('(max-width: 1050px)').matches) {
      setMobileOpen((open) => !open);
      setBreadcrumbMenuOpen(false);
      return;
    }

    setBreadcrumbMenuOpen((open) => !open);
    setMobileOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-shell">

        <nav className="navbar" aria-label="Main navigation">

          {/* BRAND */}
          <a
            href={getHomeHref('#home')}
            className="brand"
            aria-label="We Manage home"
            onClick={() => handleLinkClick('Home')}
          >
            <div className="brand-logo-badge">
              <span>SG</span>
              <small>H</small>
            </div>

            <span className="brand-text">
              StudyGo Hub
            </span>
          </a>

          {/* BREADCRUMB */}
          <div className="breadcrumb-wrapper">
            <div className="breadcrumb">
              <a
                href={getHomeHref('#home')}
                className={`breadcrumb-item ${activePage === 'Home' ? 'current' : ''}`}
                onClick={() => handleLinkClick('Home')}
              >
                <span>Home</span>
              </a>

              <span className="breadcrumb-divider">/</span>

              <button
                className={`breadcrumb-current ${breadcrumbMenuOpen ? 'open' : ''}`}
                type="button"
                aria-expanded={breadcrumbMenuOpen}
                aria-controls="breadcrumb-navigation"
                onClick={() => setBreadcrumbMenuOpen((open) => !open)}
              >
                <span>{activePage}</span>
                <ChevronDown
                  size={14}
                  strokeWidth={1.8}
                  className="breadcrumb-icon"
                />
              </button>

              <span className="breadcrumb-electric"></span>
            </div>

            <div
              id="breadcrumb-navigation"
              className={`nav-links-container ${breadcrumbMenuOpen ? 'open' : ''}`}
            >
              <div className="nav-links">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={getNavHref(item)}
                    className={`electric-link ${activePage === item.label ? 'active' : ''}`}
                    onClick={() => handleLinkClick(item.label)}
                  >
                    <span className="link-text">{item.label}</span>
                    <span className="electric-line"></span>
                    <span className="electric-spark"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="nav-right-actions">

         

            <button
              className={`nav-toggle ${navigationOpen ? 'active' : ''}`}
              type="button"
              aria-expanded={navigationOpen}
              aria-label={navigationOpen ? 'Close navigation' : 'Open navigation'}
              onClick={handleNavigationToggle}
            >
              <span className="hamburger-circle">
                {navigationOpen ? (
                  <X size={22} strokeWidth={1.8} />
                ) : (
                  <Menu size={22} strokeWidth={1.8} />
                )}
              </span>
            </button>

          </div>
        </nav>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`mobile-menu-drawer ${
          mobileOpen ? 'open' : ''
        }`}
      >
        <div className="mobile-menu-content">

          <div className="mobile-menu-header">
            <span>Navigation</span>
            <span className="mobile-menu-line"></span>
          </div>

          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={getNavHref(item)}
              className={`mobile-link ${
                activePage === item.label ? 'active' : ''
              }`}
              onClick={() => handleLinkClick(item.label)}
            >
              <span className="mobile-link-number">
                0{index + 1}
              </span>

              <span className="mobile-link-text">
                {item.label}
              </span>

              <span className="mobile-link-arrow">
                →
              </span>

              <span className="mobile-electric-line"></span>
            </a>
          ))}

          <a
            href={getHomeHref('#contact')}
            className="mobile-cta"
            onClick={() => handleLinkClick('Contact')}
          >
            <span>Apply Now</span>
            <span className="mobile-cta-shine"></span>
          </a>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
