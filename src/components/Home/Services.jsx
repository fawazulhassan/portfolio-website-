import './Services.css';

const services = [
  {
    id: 1,
    icon: 'palette',
    title: 'Frontend (React)',
    description: 'Designing pixel-perfect, responsive, and accessible interfaces with React, Tailwind CSS, and modern CSS frameworks.',
    borderColor: 'primary-container',
    bgColor: 'primary-container',
  },
  {
    id: 2,
    icon: 'settings_ethernet',
    title: 'Backend (Node/Express)',
    description: 'Building robust REST APIs and server-side logic that scales. Expertise in secure authentication, middleware, and third-party integrations.',
    borderColor: 'secondary-fixed-dim',
    bgColor: 'secondary-container',
  },
  {
    id: 3,
    icon: 'database',
    title: 'Database (MongoDB/MySQL)',
    description: 'Designing and optimizing data structures with MongoDB, MySQL, and Supabase for fast, reliable data retrieval and storage.',
    borderColor: 'primary-container',
    bgColor: 'primary-container',
  },
  {
    id: 4,
    icon: 'rocket_launch',
    title: 'Deployment & Hosting',
    description: 'Deploying and managing full-stack web apps on Vercel and other platforms from domain setup to going live smoothly.',
    borderColor: 'secondary-fixed-dim',
    bgColor: 'secondary-container',
  },
  {
    id: 5,
    icon: 'auto_awesome',
    title: 'AI-Powered Development',
    description: 'Leveraging Claude, ChatGPT, GitHub Copilot, and Cursor to ship cleaner code faster bringing AI-assisted workflows to every project.',
    borderColor: 'primary-container',
    bgColor: 'primary-container',
  },
  {
    id: 6,
    icon: 'layers',
    title: 'Full-Stack MERN Apps',
    description: 'End-to-end web application development using the complete MERN stack from database design to a polished, deployed product.',
    borderColor: 'secondary-fixed-dim',
    bgColor: 'secondary-container',
  },
];

export default function Services() {
  return (
    <section className="home-services py-section-padding bg-surface-container-lowest" id="services">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="mb-12">
          <h2 className="font-headline-md text-headline-md text-white mb-2">My Services</h2>
          <p className="text-on-surface-variant font-body-md">Comprehensive full-stack solutions tailored for modern business needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.id} className={`home-services__card p-8 rounded-lg bg-surface-container border transition-colors group hover:border-${service.borderColor}`}>
              <div className={`home-services__icon w-16 h-16 rounded-lg bg-${service.bgColor}/10 flex items-center justify-center text-${service.bgColor} mb-6 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-[40px]">{service.icon}</span>
              </div>
              <h3 className="home-services__title font-headline-sm text-headline-sm text-white mb-4">
                {service.title}
              </h3>
              <p className="font-body-md text-on-surface-variant">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
