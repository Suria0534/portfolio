import { useState } from 'react';
import { FiFacebook, FiGithub, FiMessageCircle } from 'react-icons/fi';
import '../styles/Contact.css';

const socials = [
	{
		label: 'WhatsApp',
		handle: '01840268794',
		href: 'https://wa.me/8801840268794',
		icon: <FiMessageCircle aria-hidden="true" />,
		accent: 'whatsapp',
	},
	{
		label: 'Facebook',
		handle: 'Suraiya Sultana',
		href: 'https://www.facebook.com/',
		icon: <FiFacebook aria-hidden="true" />,
		accent: 'facebook',
	},
	{
		label: 'GitHub',
		handle: 'Profile coming soon',
		href: 'https://github.com/',
		icon: <FiGithub aria-hidden="true" />,
		accent: 'github',
	},
];

function Contact() {
	const [form, setForm] = useState({ name: '', email: '', message: '' });

	const handleSubmit = (event) => {
		event.preventDefault();
		const text = `Hello Suraiya,\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
		window.open(`https://wa.me/8801840268794?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
	};

	return (
		<section className="contact-section" id="contact">
			<div className="contact-card">
				<div className="contact-intro">
					<p className="eyebrow"> Let&apos;s connect</p>
					<h2>Have an idea?<br /><em>Let&apos;s make it real.</em></h2>
					<p className="contact-copy">I&apos;m always open to thoughtful collaborations, curious conversations and new things to build.</p>
				</div>
				<form className="contact-form" onSubmit={handleSubmit}>
					<label htmlFor="contact-name">Your name</label>
					<input id="contact-name" name="name" type="text" placeholder="Your name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
					<label htmlFor="contact-email">Email address</label>
					<input id="contact-email" name="email" type="email" placeholder="you@example.com" required value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
					<label htmlFor="contact-message">Message</label>
					<textarea id="contact-message" name="message" rows="4" placeholder="Tell me about your idea..." required value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} />
					<button className="button" type="submit">Send message <span aria-hidden="true">↗</span></button>
				</form>
				<div className="social-links-group">
					<p className="social-heading">Find me online</p>
					<div className="social-buttons">
						{socials.map((social) => (
							<a className={`social-button ${social.accent}`} href={social.href} target="_blank" rel="noreferrer" aria-label={`${social.label}: ${social.handle}`} key={social.label}>
								<span className="social-icon">{social.icon}</span>
								<span className="social-text"><strong>{social.label}</strong><small>{social.handle}</small></span>
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
