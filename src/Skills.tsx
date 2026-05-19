import { skills } from './skillsData';

const groups = [
  { key: 'frontend', title: 'Frontend',         items: skills.frontend },
  { key: 'backend',  title: 'Backend',          items: skills.backend  },
  { key: 'tools',    title: 'Tools',            items: skills.tools    },
  { key: 'soft',     title: 'Working with me',  items: skills.soft     },
];

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-line">
      <div className="container-x">
        <div className="heading-rule mb-6">
          <span className="eyebrow">Skills</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.15] max-w-3xl mb-20 md:mb-28">
          The toolkit I reach for to ship <span className="serif-italic text-accent">real</span> work.
        </h2>

        <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
          {groups.map(({ key, title, items }) => (
            <div key={key} className="card p-8 md:p-10">
              <h3 className="text-lg font-medium mb-8">{title}</h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <li key={s} className="tag">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
