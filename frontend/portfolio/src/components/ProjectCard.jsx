import { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

function ProjectCard({ project, featured = false }) {
  const cardRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.14 },
    )

    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <article ref={cardRef} className={`project-card ${project.accent}${featured ? ' project-card-featured' : ''}${visible ? ' is-visible' : ''}`}>
      <div className="project-browser">
        <div className="project-browser-bar">
          <span />
          <span />
          <span />
          <small>live preview</small>
        </div>
        <div className="project-preview">
          <img
            src={`https://image.thum.io/get/width/1200/crop/800/${project.href}`}
            title={`${project.title} homepage preview`}
            alt={`${project.title} homepage preview`}
            loading="lazy"
          />
        </div>
      </div>
      <div className="project-card-heading">
        {/* <span className="project-card-number">{project.number}</span> */}
        <h3 className="card_title">{project.title}</h3>
      </div>
      <a className="button" href={project.href} target="_blank" rel="noreferrer">
        Open project <FiArrowUpRight aria-hidden="true" />
      </a>
    </article>
  )
}

export default ProjectCard
