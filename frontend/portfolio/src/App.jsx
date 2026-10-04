import { useState } from 'react'
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi'
import portrait from './assets/images/Suria Sultana.png'
import ProjectCard from './components/ProjectCard'

const whatsappMessage = encodeURIComponent('Hello Suria, I want to discuss a project idea with you.')

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: FiGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: FiLinkedin },
  { label: 'WhatsApp', href: `https://wa.me/8801840268794?text=${whatsappMessage}`, icon: FaWhatsapp },
  { label: 'Facebook', href: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fbracu-net.vercel.app%2F%3Ffbclid%3DIwZXh0bgNhZW0CMTAAcGRvZgVicmlkETBxR3FDSjFYWVJkOE1mS1Zpc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHp4T7YTiRuB_FvtM_EooX_Eam6agzCmeD02gXR0A7zhxIaFCjdm5KnJoisMU_aem_WVJxoL4z4IQKAh5O-J4N2g&h=AUDyhz5CU-cO_txwW48dWN2UhtHbWjDHG-5u1tV77KIQntkLkNDbeDnsZIRzRPWot1btNaCQHxnAb-wRoe435ruZ0ARtUyGoQGqTS8rE-X2ZB6c5w23Y4jOJtXl-g0E', icon: FaFacebookF },
  { label: 'Email', href: 'mailto:hello@suraiya.dev', icon: FiMail },
]

const projects = [
  {
    number: '01',
    type: 'Full-stack project',
    title: 'Flood Management',
    description: 'A platform focused on helping communities understand and respond to flood-related challenges.',
    tags: ['React', 'Node.js', 'MongoDB'],
    accent: 'coral',
    href: 'https://flood-management-bo86.vercel.app/',
    linkLabel: 'View live project',
    previewLabel: 'flood-management-bo86.vercel.app',
  },
  {
    number: '02',
    type: 'Web application',
    title: 'BracuNet',
    description: 'A modern platform connecting BRAC University students, alumni, faculty, and admin with secure authentication and role-based dashboards.',
    tags: ['React', 'Web app', 'Deployment'],
    accent: 'blue',
    href: 'https://bracu-net.vercel.app/',
    repository: 'https://github.com/Rifah-alt/Bracunet',
    linkLabel: 'View live project',
    previewLabel: 'bracu-net.vercel.app',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="page-shell">
      <nav className="nav container">
        <a className="logo" href="#top" onClick={closeMenu}>SS<span>.</span></a>
        <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>About me</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
        <a className="nav-cta" href="mailto:hello@suraiya.dev">Let's talk <FiArrowUpRight /></a>
      </nav>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Software engineer / CSE student / curious human</p>
          <h1>Building digital<br /><em>things with care.</em></h1>
          <p className="hero-intro">Hi, I&apos;m Suria. I&apos;m a final-semester CSE student at BRAC University, focused on building reliable software with the MERN stack, while exploring AI/ML and data science.</p>

          <div className="hero-actions">
            <a className="button button-dark" href="#work">See my work <FiArrowUpRight /></a>
            <a className="button button-soft" href="mailto:hello@suraiya.dev">Let&apos;s talk</a>
          </div>
        </div>

        <div className="hero-visual-wrap">
          <div className="hero-art" aria-label="Professional portrait">
            <div className="art-glow" />
            <div className="art-badge">Software<br /><strong>Engineer</strong></div>
            <img className="hero-portrait" src={portrait} alt="Suria Sultana portrait" />
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Areas of expertise">
        <div>FULL-STACK DEVELOPMENT <span>✦</span> PRODUCT THINKING <span>✦</span> UI ENGINEERING <span>✦</span> FULL-STACK DEVELOPMENT <span>✦</span></div>
      </section>

      <section className="work-section container" id="work">
        <div className="section-heading"><p className="eyebrow">Some of my work</p><h2>Projects I&apos;ve built<span>.</span></h2></div>
        <div className="project-list">
          {projects.map((project) => <ProjectCard project={project} key={project.number} />)}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="container about-grid"><div><p className="eyebrow">A little about me</p><h2>Good work starts<br /><em>with listening.</em></h2></div><div className="about-copy"><p>I&apos;m Suria, a CSE student in my final semester at BRAC University. Software engineering is my main focus: I enjoy turning complex problems into dependable, human-friendly products.</p><p>Alongside software development, I&apos;m working with data science and exploring AI/ML to understand how intelligent systems can create genuinely useful experiences.</p><div className="stat-row"><div><strong>CSE</strong><span>BRAC University<br />final semester</span></div><div><strong>01</strong><span>Main focus<br />software engineering</span></div></div></div></div>
      </section>

      <section className="contact-section container" id="contact"><div className="contact-card"><p className="eyebrow">Have a project in mind?</p><h2>Let&apos;s make<br /><em>something useful.</em></h2><div className="contact-actions"><a className="button button-light" href="mailto:hello@suraiya.dev">Say hello <FiMail /></a><a className="button button-ghost" href={`https://wa.me/8801840268794?text=${whatsappMessage}`} target="_blank" rel="noreferrer">WhatsApp <FaWhatsapp /></a></div><div className="contact-orbit" aria-hidden="true"><span>SS</span></div></div></section>

      <footer className="footer container"><span>© 2026 Suria Sultana</span><div className="socials">{socialLinks.map(({ label, href, icon: Icon }) => (
        <a key={label} href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
          <Icon />
        </a>
      ))}</div><span>Made with intention.</span></footer>
    </main>
  )
}

export default App
