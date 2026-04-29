import './Cta.css';
import { useNavigate } from 'react-router-dom';

export default function Cta() {
  const navigate = useNavigate();

  return (
    <section className="home-cta py-section-padding">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="home-cta relative rounded-lg overflow-hidden bg-surface-container-high border border-primary-container/20 p-12 text-center group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container/5 to-secondary-container/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <h2 className="home-cta__title font-display-lg text-display-lg text-white mb-6 relative z-10">
            Ready to start a project?
          </h2>

          <p className="home-cta__description text-on-surface-variant text-body-lg max-w-2xl mx-auto mb-10 relative z-10">
            Let's build something exceptional together. I'm currently open to freelance opportunities and full-time roles.
          </p>

          <div className="home-cta__actions flex flex-col md:flex-row justify-center gap-6 relative z-10">
            <button
              onClick={() => navigate('/get-in-touch')}
              className="px-8 py-4 rounded-full font-label-sm transition-all bg-gradient-to-r from-secondary-container to-primary-container text-white hover:shadow-xl hover:shadow-primary-container/40 active:scale-95"
            >
              Get In Touch
            </button>
            <button
              onClick={() => window.open('https://linkedin.com', '_blank')}
              className="px-8 py-4 rounded-full font-label-sm transition-all border border-outline-variant text-on-surface hover:bg-surface-variant"
            >
              View LinkedIn
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
