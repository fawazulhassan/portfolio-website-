import './Technologies.css';
import { SiReact, SiJavascript, SiHtml5, SiTailwindcss, SiExpress, SiMongodb, SiGit, SiPython, SiFlutter, SiBootstrap, SiFlask, SiSupabase, SiFirebase, SiMysql, SiNodedotjs, SiPostman, SiVercel, SiUbuntu } from 'react-icons/si';

const skills = [
  { name: 'React.js', level: 'Advance', percentage: 90 },
  { name: 'JavaScript (ES6+)', level: 'Advance', percentage: 88 },
  { name: 'HTML5 & CSS3', level: 'Advance', percentage: 92 },
  { name: 'Tailwind CSS', level: 'Advance', percentage: 90 },
  { name: 'Cursor', level: 'Advance', percentage: 85 },
  { name: 'Express.js', level: 'Advance', percentage: 83 },
  { name: 'REST APIs', level: 'Advance', percentage: 85 },
  { name: 'MongoDB', level: 'Advance', percentage: 82 },
  { name: 'Claude (Anthropic)', level: 'Advance', percentage: 75 },
  { name: 'Git & GitHub', level: 'Regular', percentage: 80 },
  { name: 'Python', level: 'Regular', percentage: 60 },
  { name: 'Flutter', level: 'Regular', percentage: 50 },
];

const additionalTech = [
  'Bootstrap',
  'Flask',
  'Supabase',
  'Firebase',
  'MySQL',
  'ChatGPT',
  'GitHub Copilot',
  'Node.js',
  'Postman',
  'VS Code',
  'Vercel',
  'Ubuntu',
  'Raspberry Pi',
  'YOLOv8',
  'EmailJS',
  'Problem Solving',
  'Debugging',
  'Clean Code Practices',
  'Communication',
  'Teamwork',
];

const getTechIcon = (techName) => {
  const iconMap = {
    'React.js': <SiReact className="text-cyan-400" />,
    'JavaScript (ES6+)': <SiJavascript className="text-yellow-400" />,
    'HTML5 & CSS3': <SiHtml5 className="text-orange-500" />,
    'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
    'Express.js': <SiExpress className="text-white" />,
    'REST APIs': <SiNodedotjs className="text-green-500" />,
    'MongoDB': <SiMongodb className="text-green-600" />,
    'Git & GitHub': <SiGit className="text-orange-600" />,
    'Python': <SiPython className="text-blue-400" />,
    'Flutter': <SiFlutter className="text-blue-500" />,
    'Bootstrap': <SiBootstrap className="text-purple-600" />,
    'Flask': <SiFlask className="text-white" />,
    'Supabase': <SiSupabase className="text-green-500" />,
    'Firebase': <SiFirebase className="text-orange-400" />,
    'MySQL': <SiMysql className="text-blue-600" />,
    'Node.js': <SiNodedotjs className="text-green-500" />,
    'Postman': <SiPostman className="text-orange-600" />,
    'Vercel': <SiVercel className="text-white" />,
    'Ubuntu': <SiUbuntu className="text-orange-600" />,
  };
  return iconMap[techName] || null;
};

export default function Technologies() {
  return (
    <section className="home-tech py-section-padding bg-background" id="technologies">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline-md text-headline-md text-white mb-2">Technical Proficiency</h2>
          <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
            Mastering the stack from database architecture to frontend interactions.
          </p>
        </div>

        <div className="home-tech__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill) => (
            <div key={skill.name} className="home-tech__card p-6 bg-surface-container-low border border-outline-variant rounded-lg group hover:bg-surface-container-high transition-all">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{getTechIcon(skill.name)}</span>
                  <span className="text-primary-container font-headline-sm">{skill.name}</span>
                </div>
                <span className="text-label-sm text-on-surface-variant">{skill.level}</span>
              </div>
              <div className="home-tech__progress-bar w-full h-2 bg-surface-variant rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-container to-secondary-container rounded-full transition-all duration-1000"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-6">
          <h3 className="text-white font-headline-sm text-lg mb-1">Additional technologies and skills</h3>
        </div>

        <div className="home-tech__chips flex flex-wrap justify-center gap-3">
          {additionalTech.map((tech) => (
            <span key={tech} className="px-4 py-2 rounded-full border border-primary-container/20 bg-primary-container/5 text-primary-fixed-dim text-label-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}