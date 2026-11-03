// import { FaCalculator, FaCode, FaLightbulb, } from 'react-icons/fa';
import { FaCalculator, FaCode, FaLightbulb,FaFilePdf  } from 'react-icons/fa';
import '../styles/About.css';

function About() {
	return (
		<section className="about-section" id="about">
			<div className="about-inner">
				<h2>
					Beyond Code,
					<br />
					<em>Driven by Curiosity.</em>
				</h2>
				<p className="about-description">
					Hi, I&apos;m Suria Sultana a Computer Science and Engineering (CSE) graduate from BRAC University, an aspiring Software Engineer, and someone who genuinely loves turning ideas into reality.


					{/* <br /><br /> */}
					My journey with problem-solving started long before I began coding.
					Mathematics has been my favorite subject since childhood, and I believe
					that love for logic and analytical thinking naturally shaped my passion
					for programming.
					<br /><br />
					I love writing code, exploring new technologies, and most importantly,
					solving real-world problems through technology. For me, programming
					isn&apos;t just about making things work; it&apos;s about understanding
					challenges, thinking creatively, and building meaningful solutions.
					{/* <br /><br /> */}
					With hands-on experience in React, Node.js, Express, and MongoDB, I
					enjoy developing full-stack applications that combine functionality
					with thoughtful user experiences. I&apos;m also curious about Artificial
					Intelligence and Machine Learning, constantly looking for opportunities
					to learn and grow.
					<br /><br />
					<strong className="about-quote">I believe every problem is an opportunity to create something
					meaningful, and every line of code is a step toward making that happen.</strong>
					<br /><br />
					{/* Currently, I&apos;m focused on becoming a better Software Engineer,
					building impactful projects, and turning my curiosity into practical
					solutions. */}
				</p>
				<div className="about-highlights">
					<div className="about-card"><span className="about-icon"><FaCalculator aria-hidden="true" /></span><h3>Math Lover</h3><p>Passionate about logic and analytical thinking.</p></div>
					<div className="about-card"><span className="about-icon"><FaCode aria-hidden="true" /></span><h3>Code Enthusiast</h3><p>Love building and creating with code.</p></div>
					<div className="about-card"><span className="about-icon"><FaLightbulb aria-hidden="true" /></span><h3>Problem Solver</h3><p>Turning real-world challenges into solutions.</p></div>
          
				</div>
        
			</div>
		</section>
	);
}

export default About;
