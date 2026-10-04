import { FiArrowUpRight } from 'react-icons/fi'

function ProjectCard({ project }) {
  return (
    <a className={`project-card ${project.accent}`} href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live project`}>
      <div className="project-card-preview">
        <div className="project-window-bar">
          <span />
          <span />
          <span />
          <small>{project.previewLabel}</small>
        </div>
        <div className="project-source-preview">
          <span className="project-preview-number">{project.number}</span>
          <strong>{project.title}</strong>
          <small>{project.previewLabel}</small>
        </div>
        <b>{project.number}</b>
      </div>

      <div className="project-card-body">
        <p className="project-type">{project.type}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <span className="project-link">{project.linkLabel} <FiArrowUpRight aria-hidden="true" /></span>
      </div>
      <FiArrowUpRight className="project-card-arrow" aria-hidden="true" />
    </a>
  )
}

export default ProjectCard
