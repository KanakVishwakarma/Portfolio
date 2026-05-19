interface AboutProps {
  isDark: boolean;
}

export default function About({ isDark }: AboutProps) {
  return (
    <section
      id="about"
      className={`py-20 px-4 transition-colors ${
        isDark ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-6xl shadow-lg">
              👨‍💻
            </div>
          </div>

          {/* Content */}
          <div>
            <p className={`text-lg mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a passionate full-stack developer learning the MERN stack. I love building web applications that solve real problems and provide great user experiences.
            </p>

            <p className={`text-lg mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              With a strong foundation in React, Node.js, and MongoDB, I'm constantly learning and improving my skills. I believe in writing clean, maintainable code and staying updated with the latest web technologies.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🎯</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Goal-Oriented</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    I focus on delivering projects that meet user needs and business goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">🚀</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Continuous Learning</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    Always exploring new technologies and best practices in web development.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Problem Solver</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    I enjoy tackling challenges and finding creative solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
