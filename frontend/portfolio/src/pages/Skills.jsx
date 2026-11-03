import { FaBrain, FaChartLine, FaJava, FaPython } from 'react-icons/fa';
import { SiC, SiDjango, SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiExpress, SiTensorflow } from 'react-icons/si';
import '../styles/Skills.css';

const skills = [
  { name: 'Python', level: 'Language', icon: <FaPython /> },
  { name: 'AI & ML', level: 'Intelligence', icon: <FaBrain /> },
  { name: 'Data Science', level: 'Analytics', icon: <FaChartLine /> },
  { name: 'Django', level: 'Backend', icon: <SiDjango /> },
  { name: 'Data Analytics', level: 'Insights', icon: <FaChartLine /> },
  { name: 'Java', level: 'Language', icon: <FaJava /> },
  { name: 'C', level: 'Language', icon: <SiC /> },
  { name: 'React', level: 'Frontend', icon: <SiReact /> },
  { name: 'JavaScript', level: 'Frontend', icon: <SiJavascript /> },
  { name: 'Node.js', level: 'Backend', icon: <SiNodedotjs /> },
  { name: 'Express.js', level: 'Backend', icon: <SiExpress /> },
  { name: 'MongoDB', level: 'Database', icon: <SiMongodb /> },
  { name: 'TensorFlow', level: 'Machine learning', icon: <SiTensorflow /> },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-inner">
        <div className="skills-heading">
          <p className="section-label"> WHAT I WORK WITH</p>
          <h2>Tools for <em>thoughtful work.</em></h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-button" key={skill.name}>
              <span className="skill-mark" aria-hidden="true">{skill.icon}</span>
              <span>{skill.name}</span>
              <small>{skill.level}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;