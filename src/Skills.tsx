import { skills } from './skills';

interface SkillsProps {
  isDark: boolean;
}

export default function Skills({ isDark }: SkillsProps) {
  return (
    <section
      id="skills"
      className={`py-20 px-4 transition-colors ${
        isDark ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <div
            className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${
              isDark ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-500">Frontend</h3>
            <ul className="space-y-2">
              {skills.frontend.map((skill) => (
                <li
                  key={skill}
                  className={`flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div
            className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${
              isDark ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-500">Backend</h3>
            <ul className="space-y-2">
              {skills.backend.map((skill) => (
                <li
                  key={skill}
                  className={`flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div
            className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${
              isDark ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-pink-500">Tools</h3>
            <ul className="space-y-2">
              {skills.tools.map((skill) => (
                <li
                  key={skill}
                  className={`flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div
            className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${
              isDark ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-green-500">Soft Skills</h3>
            <ul className="space-y-2">
              {skills.soft.map((skill) => (
                <li
                  key={skill}
                  className={`flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
