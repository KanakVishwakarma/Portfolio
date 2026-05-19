import { ArrowRight } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  return (
    <section
      id="home"
      className={`pt-32 pb-20 px-4 transition-colors ${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Hey, I'm a Developer
        </h1>
        
        <p className={`text-lg md:text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          I create beautiful and functional web experiences with React, Node.js, and modern web technologies.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View My Work
            <ArrowRight size={20} />
          </a>
          <a
            href="#contact"
            className={`inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold transition-colors border-2 ${
              isDark
                ? 'border-gray-400 text-gray-400 hover:bg-gray-800'
                : 'border-gray-900 text-gray-900 hover:bg-gray-100'
            }`}
          >
            Get In Touch
          </a>
        </div>

        {/* Floating Animation */}
        <div className="relative h-64 md:h-80 flex items-center justify-center">
          <div className="absolute w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="relative text-6xl md:text-8xl">
            💻
          </div>
        </div>
      </div>
    </section>
  );
}
