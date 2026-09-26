import { createElement, useEffect, useRef, useState } from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaArrowUpRightFromSquare,
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import PortfolioHeader from "../components/portfolio/PortfolioHeader";
import ThemeSettings from "../components/portfolio/ThemeSettings";
import {
  experienceProjects,
  portfolioSections,
  showcaseProjects,
  skillGroups,
} from "../data/portfolio";

const SLIDE_TRANSITION_MS = 1350;
const SCROLL_EDGE_EPSILON = 1;

const isPanelAtScrollBoundary = (panel, delta) => {
  const maxScrollTop = panel.scrollHeight - panel.clientHeight;

  if (maxScrollTop <= SCROLL_EDGE_EPSILON) return true;

  return delta > 0
    ? panel.scrollTop >= maxScrollTop - SCROLL_EDGE_EPSILON
    : panel.scrollTop <= SCROLL_EDGE_EPSILON;
};

const navigateToSection = (index, activeRef, lockedRef, setActiveSection, panelRefs) => {
  const nextIndex = Math.max(0, Math.min(portfolioSections.length - 1, index));
  if (nextIndex === activeRef.current || lockedRef.current) return;

  lockedRef.current = true;
  activeRef.current = nextIndex;
  panelRefs.current[nextIndex]?.scrollTo({ top: 0, left: 0, behavior: "auto" });
  setActiveSection(nextIndex);
  window.setTimeout(() => {
    lockedRef.current = false;
  }, SLIDE_TRANSITION_MS);
};

const PortfolioPage = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState(0);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const activeRef = useRef(0);
  const lockedRef = useRef(false);
  const panelRefs = useRef([]);
  const touchStartRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.add("portfolio-lock");
    document.body.classList.add("portfolio-lock");

    return () => {
      document.documentElement.classList.remove("portfolio-lock");
      document.body.classList.remove("portfolio-lock");
    };
  }, []);

  useEffect(() => {
    activeRef.current = activeSection;
    panelRefs.current[activeSection]?.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [activeSection]);

  useEffect(() => {
    const navigate = (index) => {
      navigateToSection(index, activeRef, lockedRef, setActiveSection, panelRefs);
    };

    const getActivePanel = (target) => {
      if (!(target instanceof Element)) return null;

      const panel = target.closest(".portfolio-panel.is-active");
      return panel === panelRefs.current[activeRef.current] ? panel : null;
    };

    const onKeyDown = (event) => {
      if (event.key === "ArrowDown" || event.key === "ArrowRight" || event.key === "PageDown") {
        event.preventDefault();
        navigate(activeRef.current + 1);
      }
      if (event.key === "ArrowUp" || event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        navigate(activeRef.current - 1);
      }
      if (event.key === "Home") {
        event.preventDefault();
        navigate(0);
      }
      if (event.key === "End") {
        event.preventDefault();
        navigate(portfolioSections.length - 1);
      }
      if (event.key === "Escape") setSettingsOpen(false);
    };

    const onWheel = (event) => {
      if (!(event.target instanceof Element)) return;
      if (event.target.closest("button, a, input, textarea, select, [role='button']")) return;
      if (Math.abs(event.deltaY) < 12) return;

      const activePanel = getActivePanel(event.target);
      if (!activePanel || !isPanelAtScrollBoundary(activePanel, event.deltaY)) return;

      event.preventDefault();
      navigate(activeRef.current + (event.deltaY > 0 ? 1 : -1));
    };

    const onTouchStart = (event) => {
      if (event.touches.length !== 1) {
        touchStartRef.current = null;
        return;
      }

      const panel = getActivePanel(event.target);
      if (!panel) {
        touchStartRef.current = null;
        return;
      }

      touchStartRef.current = {
        panel,
        y: event.touches[0].clientY,
        scrollTop: panel.scrollTop,
      };
    };

    const onTouchEnd = (event) => {
      if (touchStartRef.current === null) return;
      if (event.changedTouches.length !== 1) {
        touchStartRef.current = null;
        return;
      }

      const { panel, y, scrollTop } = touchStartRef.current;
      const distance = y - event.changedTouches[0].clientY;
      touchStartRef.current = null;
      if (Math.abs(distance) < 50) return;

      const maxScrollTop = panel.scrollHeight - panel.clientHeight;
      if (maxScrollTop > SCROLL_EDGE_EPSILON) {
        const startedAtBoundary = distance > 0
          ? scrollTop >= maxScrollTop - SCROLL_EDGE_EPSILON
          : scrollTop <= SCROLL_EDGE_EPSILON;

        if (!startedAtBoundary) return;
      }

      navigate(activeRef.current + (distance > 0 ? 1 : -1));
    };

    const onTouchCancel = () => {
      touchStartRef.current = null;
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchCancel, { passive: true });

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchCancel);
    };
  }, []);

  const navigateTo = (index) => {
    navigateToSection(index, activeRef, lockedRef, setActiveSection, panelRefs);
  };

  const panelState = (index) => {
    if (index === activeSection) return "is-active";
    return index < activeSection ? "is-before" : "is-after";
  };

  return (
    <main className="portfolio-page">
      <PortfolioHeader
        settingsOpen={settingsOpen}
        onToggleSettings={() => setSettingsOpen((open) => !open)}
      />
      <ThemeSettings open={settingsOpen} onClose={() => setSettingsOpen(false)} />

      <div className="portfolio-bottom-nav">
        <nav className="portfolio-sections" aria-label={t("sections.label")}>
          <div className="portfolio-sections-track">
            {portfolioSections.map((section, index) => (
              <button
                type="button"
                key={section}
                className={activeSection === index ? "is-active" : ""}
                aria-label={t(`sections.${section}`)}
                aria-current={activeSection === index ? "step" : undefined}
                onClick={() => navigateTo(index)}
              >
                {t(`sections.${section}`)}
              </button>
            ))}
          </div>
        </nav>

        <div className="portfolio-arrows">
          <button type="button" onClick={() => navigateTo(activeSection - 1)} disabled={activeSection === 0} aria-label={t("nav.previous")}>
            <FaArrowUp aria-hidden="true" />
          </button>
          <button type="button" onClick={() => navigateTo(activeSection + 1)} disabled={activeSection === portfolioSections.length - 1} aria-label={t("nav.next")}>
            <FaArrowDown aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="portfolio-stage" aria-live="polite">
        <section ref={(node) => { panelRefs.current[0] = node; }} className={`portfolio-panel panel-about ${panelState(0)}`} aria-hidden={activeSection !== 0}>
          <div className="panel-grid about-grid">
            <div className="about-copy">
              <p className="eyebrow">{t("about.eyebrow")}</p>
              <h1>{t("about.title")}</h1>
              <p className="about-lead">{t("about.description")}</p>
              <button type="button" className="text-link" onClick={() => navigateTo(3)}>
                {t("about.cta")} <FaArrowDown aria-hidden="true" />
              </button>
            </div>
            <div className="about-art" aria-hidden="true">
              <span className="art-orbit orbit-one" />
              <span className="art-orbit orbit-two" />
              <span className="art-number">24</span>
              <span className="art-caption">{t("about.artCaption")}</span>
            </div>
          </div>
          <span className="panel-side-label">{t("about.sideLabel")}</span>
        </section>

        <section ref={(node) => { panelRefs.current[1] = node; }} className={`portfolio-panel panel-skills ${panelState(1)}`} aria-hidden={activeSection !== 1}>
          <div className="panel-grid section-grid">
            <div className="section-intro">
              <p className="eyebrow">{t("skills.eyebrow")}</p>
              <h2>{t("skills.title")}</h2>
              <p>{t("skills.description")}</p>
            </div>
            <div className="skills-grid">
              {skillGroups.map(({ icon, key, skills }) => (
                <article className="skill-card" key={key}>
                  {createElement(icon, { "aria-hidden": true })}
                  <h3>{t(`skills.groups.${key}`)}</h3>
                  <ul>
                    {skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section ref={(node) => { panelRefs.current[2] = node; }} className={`portfolio-panel panel-experience ${panelState(2)}`} aria-hidden={activeSection !== 2}>
          <div className="panel-grid experience-grid">
            <div className="section-intro experience-intro">
              <p className="eyebrow">{t("experience.eyebrow")}</p>
              <h2>{t("experience.title")}</h2>
              <p>{t("experience.description")}</p>
            </div>
            <div className="experience-list">
              {experienceProjects.map((project) => (
                <article className={`experience-card accent-${project.accent}`} key={project.key}>
                  <span className="project-number">{project.number}</span>
                  <div>
                    <h3>{t(`experience.items.${project.key}.title`)}</h3>
                    <p>{t(`experience.items.${project.key}.description`)}</p>
                    <ul className="project-tags">
                      {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                  </div>
                  <FaArrowDown className="project-arrow" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section ref={(node) => { panelRefs.current[3] = node; }} className={`portfolio-panel panel-projects ${panelState(3)}`} aria-hidden={activeSection !== 3}>
          <div className="panel-grid showcase-grid">
            <div className="section-intro showcase-intro">
              <p className="eyebrow">{t("projects.eyebrow")}</p>
              <h2>{t("projects.title")}</h2>
              <p>{t("projects.description")}</p>
            </div>
            <div className="showcase-list">
              {showcaseProjects.map((project) => (
                <article className={`showcase-card accent-${project.accent}`} key={project.key}>
                  <div className="showcase-card-heading">
                    <span className="project-number">{project.number}</span>
                    <h3>{t(`projects.items.${project.key}.title`)}</h3>
                  </div>
                  <p>{t(`projects.items.${project.key}.description`)}</p>
                  <ul className="project-tags">
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <div className="showcase-links">
                    <a href={project.liveDemo} target="_blank" rel="noreferrer">
                      {t("projects.links.demo")} <FaArrowUpRightFromSquare aria-hidden="true" />
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      {t("projects.links.code")} <FaGithub aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section ref={(node) => { panelRefs.current[4] = node; }} className={`portfolio-panel panel-contact ${panelState(4)}`} aria-hidden={activeSection !== 4}>
          <div className="panel-grid contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">{t("contact.eyebrow")}</p>
              <h2>{t("contact.title")}</h2>
              <p>{t("contact.description")}</p>
              <a className="contact-email" href="mailto:hello@personal-platform.dev">
                hello@personal-platform.dev <FaArrowUpRightFromSquare aria-hidden="true" />
              </a>
            </div>
            <div className="contact-links">
              <a href="mailto:hello@personal-platform.dev" aria-label={t("contact.email")}>
                <FaRegEnvelope aria-hidden="true" />
                <span>{t("contact.email")}</span>
              </a>
              <a href="https://github.com/Mahmoud-Saadaoui" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/saadaoui-mahmoud" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <span className="panel-side-label">{t("contact.sideLabel")}</span>
        </section>
      </div>

      <p className="portfolio-hint">{t("nav.scrollHint")}</p>
    </main>
  );
};

export default PortfolioPage;
