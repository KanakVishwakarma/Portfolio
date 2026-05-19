interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`transition-colors ${
        isDark ? 'bg-gray-950 text-gray-300' : 'bg-gray-900 text-gray-300'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">About</h3>
            <p className="text-sm leading-relaxed">
              A passionate MERN stack developer building amazing web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Follow</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t ${isDark ? 'border-gray-800' : 'border-gray-700'} pt-8`}>
          <p className="text-center text-sm">
            © {currentYear} Your Name. All rights reserved. Built with React + Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
