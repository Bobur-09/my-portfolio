 "use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Send,
  Mail,
  MapPin,
  Moon,
  Sun,
  Phone,
  ExternalLink
} from "lucide-react";
import { portfolio } from "@/data/portfolio";
import App from "next/app";

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [category, setCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = useMemo(
    () => category === "All" ? portfolio.projects : portfolio.projects.filter((p) => p.category === category),
    [category]
  );

 const socialIcon = (label: string) => {
  if (label === "GitHub") return <Github size={17} />;
  if (label === "LinkedIn") return <Linkedin size={17} />;
  return <Send size={17} />;
};

  return (
    <main className={dark ? "site dark" : "site light"}>
      <header className="nav wrap">
        <a className="logo" href="#home" aria-label="Home">{portfolio.initials}</a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Portfolio</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle color theme">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="button button-small" href="#contact">Hire Me <ArrowUpRight size={14} /></a>
        </div>
      </header>

      <section className="hero wrap section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">{portfolio.greeting}</p>
          <h1>{portfolio.name}</h1>
          <h2>{portfolio.role}</h2>
          <p className="muted intro">{portfolio.intro}</p>
          <p className="handwritten">{portfolio.headline}</p>
          <div className="hero-buttons">
            <a className="button" href="#projects">View My Work <ArrowDown size={15} /></a>
            <a className="button button-outline" href="#contact">Contact Me</a>
          </div>
          <div className="socials">
            {portfolio.socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}>{socialIcon(s.label)}</a>
            ))}
          </div>
        </div>
        <div className="hero-art">
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="portrait-placeholder">
            <Image src={portfolio.portrait} alt={`${portfolio.name} portrait`} fill priority sizes="(max-width: 760px) 80vw, 40vw" />
          </div>
          <span className="art-note">Ideas → experiences</span>
        </div>
      </section>

      <section className="about wrap section" id="about">
        <div className="section-heading">
          <p className="eyebrow">A little about me</p>
          <h2>Who I Am</h2>
          <p className="muted">I’m a developer who enjoys turning thoughtful design into fast, accessible and useful digital products.</p>
          <div className="details">
            <p><span>Name</span><strong>{portfolio.name}</strong></p>
            <p><span><MapPin size={15} /> Location</span><strong>{portfolio.location}</strong></p>
            <p><span><Mail size={15} /> Email</span><strong>{portfolio.email}</strong></p>
            <p><span>Experience</span><strong>{portfolio.experience}</strong></p>
          </div>
          <a className="button" href={portfolio.cvUrl} download>Download CV <ArrowDown size={15} /></a>
        </div>
        <div className="workspace">
          <Image src={portfolio.aboutImage} alt="Developer workspace" fill sizes="(max-width: 760px) 90vw, 45vw" />
        </div>
        <div className="skills">
          {portfolio.skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}
        </div>
      </section>

      <section className="projects wrap section" id="projects">
        <div className="projects-heading">
          <div><p className="eyebrow">My portfolio</p><h2>Selected Projects</h2><p className="muted">A selection of recent work and experiments.</p></div>
          <span className="project-count">{String(projects.length).padStart(2, "0")} Projects</span>
        </div>
        <div className="filters" role="group" aria-label="Filter projects">
          {portfolio.categories.map((item) => (
            <button key={item} className={category === item ? "filter active" : "filter"} onClick={() => setCategory(item)}>{item}</button>
          ))}
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <a className="project-image" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 760px) 90vw, 30vw" />
                <span className="image-arrow"><ExternalLink size={17} /></span>
              </a>
              <div className="project-meta"><div><h3>{project.title}</h3><p className="muted">{project.description}</p></div><a href={project.codeUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`}><ArrowUpRight size={18} /></a></div>
              <div className="tags">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact wrap section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Get in touch</p><h2>Let’s Work Together</h2>
          <p className="muted">Have a project in mind or just want to say hello? Send me a message.</p>
          <a className="contact-line" href={`mailto:${portfolio.email}`}><Mail size={17} /><span><small>Email</small>{portfolio.email}</span></a>
          <a className="contact-line" href={`tel:${portfolio.phone.replace(/\\s/g, "")}`}><Phone size={17} /><span><small>Phone</small>{portfolio.phone}</span></a>
          <p className="contact-line"><MapPin size={17} /><span><small>Location</small>{portfolio.location}</span></p>
        </div>
        <form className="contact-form" action={`mailto:${portfolio.email}`} method="post" encType="text/plain">
          <label>Your Name<input name="name" placeholder="Your name" required /></label>
          <label>Your Email<input name="email" type="email" placeholder="you@example.com" required /></label>
          <label>Message<textarea name="message" placeholder="Tell me about your project..." rows={5} required /></label>
          <button className="button submit" type="submit">Send Message <ArrowUpRight size={15} /></button>
          <p className="form-note">This starter form opens your email app. Connect an API or form service for direct website submissions.</p>
        </form>
      </section>

      <footer className="footer wrap"><a className="logo" href="#home">{portfolio.initials}</a><p>Designed & built with care.</p><a href="#home" className="back-top">Back to top ↑</a></footer>
    </main>
  );
}
