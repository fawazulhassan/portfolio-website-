import './Projects.css';
import { useState, useRef } from 'react';
import ProjectLightbox from '../Shared/ProjectLightbox';

const projects = [
  {
    id: 1,
    title: 'The Nursery Pakistan',
    description: 'E-commerce platform for premium plants and organic fertilizers.',
    image: '/images/portfolio-1.webp',
    livePreviewLink: 'https://leafy-luxe-site.vercel.app/',
    githubLink: 'https://github.com/fawazulhassan/leafy-luxe-site.git',
  },
  {
    id: 2,
    title: 'Doctor Appointment Web Application',
    description: 'Healthcare web app with three appointment modes: Clinic, Online Consultation, and Home Visit.',
    image: '/images/linkdin-thumnail-1.webp',
    livePreviewLink: 'https://doctor-website-liart.vercel.app/',
    githubLink: 'https://github.com/fawazulhassan/DoctorWebsite.git',
  },
  {
    id: 3,
    title: 'Client React Website',
    description: 'A modern, responsive React-based website for a client',
    image: '/images/linkdin-thumnail-2.webp',
    livePreviewLink: 'https://client-voice-control-1.vercel.app/',
    githubLink: 'https://github.com/fawazulhassan/client-voice-control-1-.git',
  },
    {
    id: 4,
    title: 'Density-Based Smart Traffic Light System',
    description: 'Analyzed real-time traffic density and prioritized signal flow for roads with higher vehicle volume',
    image: '/images/density based smart traffic light system.webp',
    livePreviewLink: '#',
    githubLink: '#',
  },
    {
    id: 5,
    title: 'Healthcare Clinic',
    description: 'Mental health & pediatric care clinic booking and consultation platform.',
    image: '/images/home-doctor-website.webp',
    livePreviewLink: '#',
    githubLink: '#',
  },
  {
    id: 6,
    title: 'Fake Review Detection',
    description: 'Data mining system to detect and check review authenticity using ML.',
    image: '/images/fake review detection.webp',
    livePreviewLink: '#',
    githubLink: '#',
  },


];

export default function Projects() {
  const carouselRef = useRef(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [activeArrow, setActiveArrow] = useState('forward');
  const [activeCardButton, setActiveCardButton] = useState({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollToCard = (index) => {
    if (!carouselRef.current) return;

    const targetPosition = carouselRef.current.children[index].offsetLeft;
    carouselRef.current.scrollTo({ left: targetPosition, behavior: 'smooth' });
    setCurrentCardIndex(index);
    setActiveArrow(index < projects.length - 1 ? 'forward' : 'back');
  };

  const handleArrowClick = (direction, e) => {
    e?.stopPropagation();
    let newIndex = currentCardIndex;

    if (direction === 'forward' && currentCardIndex < projects.length - 1) {
      newIndex = currentCardIndex + 1;
      setActiveArrow('forward');
    } else if (direction === 'back' && currentCardIndex > 0) {
      newIndex = currentCardIndex - 1;
      setActiveArrow('back');
    }

    scrollToCard(newIndex);
  };

  return (
    <section className="home-projects py-section-padding bg-surface-container-lowest" id="projects">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="home-projects__header flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-headline-md text-headline-md text-white mb-2">Selected Projects</h2>
            <div className="h-1 w-20 bg-primary-container rounded-full"></div>
          </div>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={(e) => handleArrowClick('back', e)}
            disabled={currentCardIndex === 0}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-4 rounded-full transition-all duration-300 hidden md:flex items-center justify-center ${
              currentCardIndex === 0
                ? 'opacity-40 pointer-events-none'
                : 'hover:bg-surface-variant'
            } ${
              activeArrow === 'back'
                ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/50 scale-110'
                : 'border border-primary text-primary hover:text-on-primary'
            }`}
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>

          {/* Carousel */}
          <div className="home-projects__carousel flex gap-8 overflow-x-auto pb-12 custom-scrollbar" ref={carouselRef}>
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  setLightboxOpen(true);
                }}
                className="home-projects__card min-w-[320px] md:min-w-[400px] group cursor-pointer"
              >
                <div className="bg-surface-container border border-outline-variant/30 rounded-lg overflow-hidden hover:border-primary-container/50 transition-all duration-500">
                  <div className="home-projects__card-image relative aspect-video overflow-hidden">
                    <img
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src={project.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="font-headline-sm text-headline-sm text-white">{project.title}</h3>
                    <p className="font-body-md text-on-surface-variant line-clamp-2">{project.description}</p>
                    <div className="home-projects__card-actions flex gap-3">
                      <a
                        href={project.livePreviewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveCardButton({ ...activeCardButton, [project.id]: 'preview' });
                        }}
                        className={`flex-1 py-2 rounded-full text-center font-label-sm transition-all block ${
                          activeCardButton[project.id] === 'preview' || !activeCardButton[project.id]
                            ? 'bg-gradient-to-r from-secondary-container to-primary-container text-white hover:brightness-110'
                            : 'border border-outline-variant text-on-surface hover:bg-surface-variant'
                        }`}
                      >
                        Live Preview
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveCardButton({ ...activeCardButton, [project.id]: 'github' });
                        }}
                        className={`flex-1 py-2 rounded-full text-center font-label-sm transition-all block ${
                          activeCardButton[project.id] === 'github'
                            ? 'bg-gradient-to-r from-secondary-container to-primary-container text-white hover:brightness-110'
                            : 'border border-outline-variant text-on-surface hover:bg-surface-variant'
                        }`}
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={(e) => handleArrowClick('forward', e)}
            disabled={currentCardIndex === projects.length - 1}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-4 rounded-full transition-all duration-300 hidden md:flex items-center justify-center ${
              currentCardIndex === projects.length - 1
                ? 'opacity-40 pointer-events-none'
                : 'hover:bg-surface-variant'
            } ${
              activeArrow === 'forward'
                ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/50 scale-110'
                : 'border border-primary text-primary hover:text-on-primary'
            }`}
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        <ProjectLightbox
          open={lightboxOpen}
          image={selectedProject?.image}
          title={selectedProject?.title}
          onOpenChange={(open) => {
            if (!open) {
              setLightboxOpen(false);
              setSelectedProject(null);
            }
          }}
        />
      </div>
    </section>
  );
}

