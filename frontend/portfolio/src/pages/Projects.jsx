

import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

const projects = [
	{
		number: '01',
		accent: 'coral',
		type: 'Business website',
		title: 'A. Momin Engineering',
		image: '/images/amomin.png',
		description: 'A confident, editorial website for a construction firm, with services, completed work and company credentials in one clear experience.',
		tags: ['React', 'Responsive UI', 'Business'],
		href: 'https://construction-fk1o.vercel.app/',
		linkLabel: 'View live project',
	},
	{
		number: '02',
		accent: 'blue',
		type: 'Civic technology',
		title: 'FloodRelief Hub',
		image: '/images/flood.png',
		description: 'A real-time flood support platform connecting victims, volunteers and NGOs with shelters, resources, updates and donations.',
		tags: ['React', 'Community', 'Dashboard'],
		href: 'https://flood-management-bo86.vercel.app/',
		linkLabel: 'View live project',
	},
	{
		number: '03',
		accent: 'sage',
		type: 'University community',
		title: 'BracuNet',
		image: '/images/brac.png',
		description: 'A focused digital space for BRAC University students, alumni and faculty to connect and get started together.',
		tags: ['React', 'Community', 'Product UI'],
		href: 'https://bracu-net.vercel.app/',
		linkLabel: 'View live project',
	},
];

function Projects() {
	return (
		<section className="work-section container" id="projects">
			<div className="section-heading">
				<p className="project-section-label" aria-label="Selected work">
					{'SELECTED WORK'.split('').map((letter, index) => (
						<span key={`${letter}-${index}`}>
							{letter === ' ' ? '\u00a0' : letter}
						</span>
					))}
				</p>
			</div>

			<div className="project-list">
				{projects.map((project, index) => (
					<ProjectCard
						key={project.number}
						project={project}
						featured={index === 0}
					/>
				))}
			</div>
		</section>
	);
}

export default Projects;
