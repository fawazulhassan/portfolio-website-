import './Footer.css';

export default function Footer() {
  return (
    <footer className="shared-footer bg-slate-950 w-full py-16 border-t border-white/5 font-inter text-sm tracking-wide">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto px-8 gap-12">
        <div className="shared-footer__brand flex flex-col gap-4">
          <div className="text-lg font-bold text-slate-200">fawaz.Dev</div>
          <p className="text-slate-500 max-w-xs">MERN Stack Developer leveraging AI-powered workflows to ship faster, cleaner, and smarter web apps.</p>
        </div>

        <div className="shared-footer__links flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-6">
            <a className="text-slate-500 hover:text-cyan-400 transition-all" href="https://github.com/fawazulhassan">
              GitHub
            </a>
            <a className="text-slate-500 hover:text-cyan-400 transition-all" href="https://www.linkedin.com/in/muhammad-fawaz-ul-hassan">
              LinkedIn
            </a>
            <a className="text-slate-500 hover:text-cyan-400 transition-all" href="https://twitter.com/@ul_fawaz72243">
              Twitter
            </a>
            <a className="text-slate-500 hover:text-cyan-400 transition-all" href="mailto:fawazulhassan@gmail.com">
              Email
            </a>
          </div>

          <div className="shared-footer__copyright text-slate-500">
          © 2026 Fawaz. Built with MERN stack & AI-powered workflows.
          </div>
        </div>
      </div>
    </footer>
  );
}
