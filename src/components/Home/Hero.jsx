import './Hero.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [activeButton, setActiveButton] = useState('hire');
  const navigate = useNavigate();

  return (
    <section className="home-hero relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface-container-lowest">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-container/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary-container/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-8 w-full grid md:grid-cols-2 items-center gap-12 relative z-10">
        <div className="space-y-6">
          <div className="home-hero__badge inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-container/30 bg-primary-container/10 text-primary-fixed-dim text-label-sm uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            Available for Hire
          </div>

          <h1 className="home-hero__title font-display-lg text-display-lg text-white">
            Hello I am <span className="bg-gradient-to-r from-primary-container to-secondary-fixed-dim bg-clip-text text-transparent">Fawaz</span>
          </h1>

          <p className="home-hero__subtitle font-headline-sm text-headline-sm text-on-surface-variant max-w-xl">
            MERN Stack Developer leveraging AI-powered workflows to ship faster, cleaner, and smarter web apps.
          </p>

          <div className="home-hero__actions flex gap-3 pt-4">
            <button
              onClick={() => navigate('/hire-me')}
              className={`px-8 py-4 rounded-full font-label-sm transition-all ${
                activeButton === 'hire'
                  ? 'bg-gradient-to-r from-secondary-container to-primary-container text-white hover:shadow-xl hover:shadow-primary-container/40 active:scale-95'
                  : 'border border-outline-variant text-on-surface hover:bg-surface-variant/50'
              }`}
            >
              Hire Me
            </button>
            <button
              onClick={() => {
                setActiveButton('see')
                navigate('/work')
              }}
              className={`px-8 py-4 rounded-full font-label-sm transition-all ${
                activeButton === 'see'
                  ? 'bg-gradient-to-r from-secondary-container to-primary-container text-white hover:shadow-xl hover:shadow-primary-container/40 active:scale-95'
                  : 'border border-outline-variant text-on-surface hover:bg-surface-variant/50'
              }`}
            >
              See Work
            </button>
          </div>
        </div>

        <div className="home-hero__image-wrapper relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-container to-secondary-container rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
   <img
  alt="Profile"
  className="relative rounded-lg w-full aspect-square object-cover object-top border border-white/10 shadow-2xl"
  src="/images/hero-img.webp"
/>
        </div>
      </div>
    </section>
  );
}
