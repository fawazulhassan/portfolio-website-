import Navbar from '../components/Shared/Navbar'
import Footer from '../components/Shared/Footer'
import './Work.css'

const filterChips = ['All', 'Frontend', 'Backend', 'Full Stack', 'Mobile App']

const projects = [
  {
    title: 'The Nursery Pakistan',
    description: `•Built a multi-module platform for plant e-commerce, workshop bookings, and landscaping portfolio
•Implemented role-based admin dashboards for products, sales windows, and workshop management
•Created image galleries with thumbnail sync, carousels, and lightboxes with keyboard & video support
•Integrated Supabase for products, bookings, workshops, and review approval workflows
•Built sale/discount logic with date-based pricing, cart, wishlist, and search/filter features`,
    tags: ['#React', '#TypeScript', '#React Router', '#Tailwind CSS' ,  '#Vite' , '#Supabase', '#Vercel', '#Cursor', '#GitHub Copilot', '#Claude', 'Stitch'],
    liveUrl: 'https://leafy-luxe-site.vercel.app/',
    githubUrl: 'https://github.com/fawazulhassan/leafy-luxe-site.git',
    image: '/images/portfolio-1.PNG',
    alt: 'Modern high-tech dashboard interface with dark navy theme, cyan glowing charts, and sleek minimalist data visualizations',
  },
  {
    title: 'Doctor Appointment Web Application',
    description: `•Built a full-stack healthcare web app with three appointment modes: Clinic, Online Consultation, and Home Visit
•Implemented structured patient booking forms with service type selection
•Integrated Supabase for real-time backend data storage and management of all appointment records
•Automated email confirmations using EmailJS upon successful booking
•Deployed on Vercel with a clean, responsive UI accessible from any device`,
    tags: ['#React.js', ' #Supabase', ' #JavaScript', ' #EmailJS', '#Vercel', '#Cursor', '#GitHub Copilot', '#Claude'],
    liveUrl: 'https://doctor-website-liart.vercel.app/',
    githubUrl: 'https://github.com/fawazulhassan/DoctorWebsite.git',
    image:
      '/images/linkdin-thumnail-1.PNG',
    alt: 'Abstract view of clean source code on a dark screen with vibrant syntax highlighting in electric blue and purple',
  },
  {
    title: 'Client React Website',
    description: `• Built a modern, responsive React-based website for a client 
• Created reusable components and optimized the user experience 
• Deployed the project using Vercel`,
    tags: ['#React.js', '#Vercel', '#Cursor', '#GitHub Copilot', '#Claude'],
    liveUrl: 'https://client-voice-control-1.vercel.app/',
    githubUrl: 'https://github.com/fawazulhassan/client-voice-control-1-.git',
    image:
      '/images/linkdin-thumnail-2.PNG',
    alt: 'Minimalist smartphone mockups floating over a deep navy background with subtle tech patterns and glowing neon accents',
  },
  {
    title: 'Density-Based Smart Traffic Light System (Final Year Project)',
    description: `• Analyzed real-time traffic density and prioritized signal flow for roads with higher 
vehicle volume
• Developed a web-based dashboard using React.js, Tailwind CSS, and Flask to 
visualize traffic data
• Developed a smart traffic control system using Python and Raspberry Pi
• Integrated YOLOv8 for real-time vehicle detection
• Implemented automated signal switching logic based on traffic density
• Optimized performance for low-end hardware environments`,
    tags: ['#React.js',' #Flask', ' #Python',' #YOLOv8', ' #Raspberry Pi', ' #Tailwind CSS', '#Cursor', '#GitHub Copilot', '#Claude'],
    liveUrl: '#',
    githubUrl: '#',
    image:
      '/images/density based smart traffic light system.png',
    alt: 'Futuristic e-commerce interface with holographic 3D products and neon glow aesthetic against a dark background',
  },
  {
    title: 'Home Doctor Appointment System',
    description: `• Built a full-stack web application for booking home doctor appointments
• Developed frontend using React.js
• Implemented backend APIs using Node.js and Express.js
• Designed MongoDB database for doctors and patients
• Converted Figma UI designs into responsive web pages`,
    tags: ['#React.js', '#NodeJS', '#ExpressJS', '#MongoDB','#Figma', '#Cursor', '#GitHub Copilot', '#Claude'],
    liveUrl: '#',
    githubUrl: '#',
    image:
      '/images/home-doctor-website.png',
    alt: 'Deep blue programming background with stacked lines of code and glowing neon brackets',
  },
  {
    title: 'Fake Review Detection System',
    description: `• Developed a system to detect AI-generated and human-written reviews
• Used Python and basic machine learning techniques
• Worked with text preprocessing, datasets, and model inference
• Implemented frontend UI and routing logic`,
    tags: ['#Python', ' #Machine Learning', ' #Text Preprocessing', ' #chatGPT'],
    liveUrl: '#',
    githubUrl: '#',
    image:
      '/images/fake review detection.png',
    alt: 'Conceptual smartphone application UI layout with rounded glassmorphism cards and vibrant glowing interface elements',
  },
]

export default function Work() {
  return (
    <div className="work-page bg-background text-on-background font-body-md overflow-x-hidden min-h-screen">
      <Navbar />

      <main className="min-h-screen pt-20">
        <section className="relative pt-section-padding pb-stack-gap-lg px-gutter max-w-7xl mx-auto overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px]"></div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="text-primary-container font-label-sm tracking-widest uppercase mb-4 block">Portfolio</span>
            <h1 className="font-display-lg text-display-lg text-white mb-6">Selected Works</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              A curated gallery of full-stack applications, interactive interfaces, and architectural solutions built
              with the MERN stack.
            </p>
          </div>
        </section>

        {/* <section className="px-gutter mb-stack-gap-lg">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
            {filterChips.map((chip, index) => (
              <button
                key={chip}
                type="button"
                className={
                  index === 0
                    ? 'px-6 py-2 rounded-full border border-primary-container bg-primary-container/20 text-primary-container font-label-sm transition-all hover:bg-primary-container hover:text-on-primary-container'
                    : 'px-6 py-2 rounded-full border border-outline text-on-surface-variant font-label-sm transition-all hover:border-primary-container hover:text-primary-container'
                }
              >
                {chip}
              </button>
            ))}
          </div>
        </section> */}

        <section className="px-gutter pb-section-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-gap-md">
            {projects.map((project) => (
              <article
                key={project.title}
                className="bg-surface-container border border-white/5 rounded-lg overflow-hidden flex flex-col group hover:border-primary-container/50 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={project.image}
                    alt={project.alt}
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (project.liveUrl === '#') e.preventDefault()
                      }}
                      className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors"
                    >
                      <span className="material-symbols-outlined">visibility</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (project.githubUrl === '#') e.preventDefault()
                      }}
                      className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors"
                    >
                      <span className="material-symbols-outlined">code</span>
                    </a>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-headline-sm text-headline-sm text-white mb-2 group-hover:text-primary-container transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-grow whitespace-pre-wrap">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={`${project.title}-${tag}`}
                        className="text-[10px] font-bold uppercase tracking-wider text-primary-container px-2 py-1 rounded bg-primary-container/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (project.liveUrl === '#') e.preventDefault()
                      }}
                      className="flex-1 inline-flex items-center justify-center text-center bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-2 rounded-full font-label-sm hover:opacity-90 active:scale-95 transition-all"
                    >
                      View Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (project.githubUrl === '#') e.preventDefault()
                      }}
                      className="flex-1 inline-flex items-center justify-center text-center border border-outline text-on-surface-variant py-2 rounded-full font-label-sm hover:border-primary-container hover:text-primary-container active:scale-95 transition-all"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
