import './About.css';

const timelineItems = [
  {
    id: 1,
    year: '2022',
    title: 'The Beginning',
    description: 'Started Bachelor\'s in Computer Science at NUML. Learned web fundamentals HTML, CSS, JavaScript and built my first static sites.',
    position: 'top',
  },
  {
    id: 2,
    year: '2023',
    title: 'Going Deeper',
    description: 'Studied DSA, OOP, Python, and Web Dev at university. Built early React projects including a portfolio and tic-tac-toe game.',
    position: 'bottom',
  },
  {
    id: 3,
    year: '2024',
    title: 'Full Stack',
    description: 'Built full-stack MERN apps for clients React, Node.js, Express, MongoDB. Integrated REST APIs and implemented authentication.',
    position: 'top',
  },
  {
    id: 4,
    year: '2025',
    title: 'Final Year',
    description: 'Built a Fake Review Detection system and a Smart Traffic Light FYP using YOLOv8 and Raspberry Pi. Sharpened AI-powered dev workflows.',
    position: 'bottom',
  },
  {
    id: 5,
    year: '2026',
    title: 'Graduated',
    description: 'Graduated with a Bachelor\'s in Computer Science from NUML in January 2026. Now fully focused on building real-world products and available for hire.',
    position: 'top',
  },
];

export default function About() {
  return (
    <section className="home-about py-section-padding bg-background" id="about">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md text-white">Journey So Far</h2>
        </div>

        <div className="home-about relative">
          {/* Horizontal Timeline Track */}
          <div className="home-about__track absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary-container/5 via-primary-container to-primary-container/5 -translate-y-1/2 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {timelineItems.map((item) => (
              <div
                key={item.id}
                className={`home-about__card relative flex ${item.position === 'bottom' ? 'flex-col-reverse md:flex-col' : 'flex-col'} items-center text-center`}
              >
                {item.position === 'bottom' ? (
                  <>
                    <div className={`bg-surface-container p-6 rounded-lg border border-outline-variant hover:border-primary-container transition-all mb-0 md:mb-8`}>
                      <span className="text-primary-container font-black text-xl mb-2 block">{item.year}</span>
                      <h4 className="text-white font-headline-sm mb-2">{item.title}</h4>
                      <p className="text-on-surface-variant text-body-md">{item.description}</p>
                    </div>
                    <div className="home-about__node w-8 h-8 rounded-full bg-primary-container shadow-[0_0_20px_#00D2FF] mb-8 relative z-10 hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="home-about__node w-8 h-8 rounded-full bg-primary-container shadow-[0_0_20px_#00D2FF] mb-8 relative z-10 hidden md:block"></div>
                    <div className="bg-surface-container p-6 rounded-lg border border-outline-variant hover:border-primary-container transition-all">
                      <span className="text-primary-container font-black text-xl mb-2 block">{item.year}</span>
                      <h4 className="text-white font-headline-sm mb-2">{item.title}</h4>
                      <p className="text-on-surface-variant text-body-md">{item.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
