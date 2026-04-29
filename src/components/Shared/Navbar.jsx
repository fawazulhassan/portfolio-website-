import { useToggle } from '../../hooks/useToggle';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, toggle, close] = useToggle();
  const [activeSection, setActiveSection] = useState('hero');
  const { pathname } = useLocation();
  const isHireMeRoute = pathname === '/hire-me';
  const isWorkRoute = pathname === '/work';
  const isGetInTouchRoute = pathname === '/get-in-touch';
  const isHomePage = pathname === '/';

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Fawaz_CV_Updated_New.docx';
    link.download = 'Fawaz_CV.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Track which section is currently visible
  useEffect(() => {
    if (!isHomePage) return;

    const sections = ['hero', 'projects', 'technologies', 'about', 'services'];
    const observers = {};

    const createObserver = (sectionId) => {
      return new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          });
        },
        { threshold: 0.3 }
      );
    };

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observers[sectionId] = createObserver(sectionId);
        observers[sectionId].observe(element);
      }
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, [isHomePage]);

  const homeSectionHref = (sectionId) => (isHireMeRoute || isWorkRoute || isGetInTouchRoute ? `/#${sectionId}` : `#${sectionId}`);
  const desktopLinkClass = (active) =>
    active
      ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1 hover:text-cyan-300 hover:scale-105 transition-all duration-300'
      : 'text-slate-400 font-medium hover:text-cyan-300 hover:scale-105 transition-all duration-300';

  return (
    <nav className="shared-navbar fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-white/10 shadow-2xl shadow-cyan-900/20">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-8 h-20">
        <a href={homeSectionHref('projects')} className="shared-navbar__logo text-xl font-black tracking-tighter text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
          fawaz.dev
        </a>

        {/* Desktop Navigation */}
        <div className="shared-navbar__links hidden md:flex items-center gap-6">
          <a className={desktopLinkClass(isGetInTouchRoute)} href="/get-in-touch">
            Get In Touch
          </a>
          <a className={desktopLinkClass(isWorkRoute)} href="/work">
            Work
          </a>
          <a className={desktopLinkClass(isHireMeRoute)} href="/hire-me">
            Hire Me
          </a>
          <a className={desktopLinkClass(isHomePage && activeSection === 'projects')} href={homeSectionHref('projects')}>
            Projects
          </a>
          <a className={desktopLinkClass(isHomePage && activeSection === 'technologies')} href={homeSectionHref('technologies')}>
            Technologies
          </a>
          <a className={desktopLinkClass(isHomePage && activeSection === 'about')} href={homeSectionHref('about')}>
            About
          </a>
          <a className={desktopLinkClass(isHomePage && activeSection === 'services')} href={homeSectionHref('services')}>
            Services
          </a>
        </div>

        <button onClick={handleDownloadCV} className="shared-navbar__cv-btn hidden md:block bg-gradient-to-r from-secondary-container to-primary-container text-white px-6 py-2 rounded-full font-label-sm hover:scale-105 transition-all duration-300 shadow-lg shadow-primary-container/20">
          Download CV
        </button>

        {/* Mobile Hamburger */}
        <button
          className="shared-navbar__hamburger md:hidden flex flex-col gap-1 p-2"
          onClick={toggle}
          aria-label="Toggle menu"
        >
          <span className={`h-1 w-6 bg-white rounded transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-1 w-6 bg-white rounded transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-1 w-6 bg-white rounded transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="shared-navbar__mobile-menu md:hidden bg-slate-950 border-t border-white/10 px-8 py-4 space-y-3">
          <a
            href="/get-in-touch"
            className={`block transition-all py-2 ${isGetInTouchRoute ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'}`}
            onClick={close}
          >
            Get In Touch
          </a>
          <a
            href="/work"
            className={`block transition-all py-2 ${isWorkRoute ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'}`}
            onClick={close}
          >
            Work
          </a>
          <a
            href="/hire-me"
            className={`block transition-all py-2 ${isHireMeRoute ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'}`}
            onClick={close}
          >
            Hire Me
          </a>
          <a
            href={homeSectionHref('projects')}
            className={`block transition-all py-2 ${isHomePage && activeSection === 'projects' ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'}`}
            onClick={close}
          >
            Projects
          </a>
          <a
            href={homeSectionHref('technologies')}
            className={`block transition-all py-2 ${isHomePage && activeSection === 'technologies' ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'}`}
            onClick={close}
          >
            Technologies
          </a>
          <a
            href={homeSectionHref('about')}
            className={`block transition-all py-2 ${isHomePage && activeSection === 'about' ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'}`}
            onClick={close}
          >
            About
          </a>
          <a
            href={homeSectionHref('services')}
            className={`block transition-all py-2 ${isHomePage && activeSection === 'services' ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'}`}
            onClick={close}
          >
            Services
          </a>
          <button onClick={handleDownloadCV} className="w-full bg-gradient-to-r from-secondary-container to-primary-container text-white px-6 py-2 rounded-full font-label-sm hover:scale-105 transition-all duration-300 shadow-lg shadow-primary-container/20 mt-4">
            Download CV
          </button>
        </div>
      )}
    </nav>
  );
}
