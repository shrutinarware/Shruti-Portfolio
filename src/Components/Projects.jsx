import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiReact, SiFirebase, SiJavascript, SiCss3 } from "react-icons/si";

const projects = [
    {
        title: "Glowthic – Beauty E-commerce Website & App",
        desc: `Glowthic is a full-featured beauty e-commerce platform built using React.js.
It allows users to explore products, view detailed descriptions, manage carts,
and experience a smooth, responsive shopping journey across devices.`,
        tech: ["React", "Firebase", "JavaScript", "CSS"],
        live: "https://glowthic.vercel.app",
        github: "https://github.com/shrutinarware/glowthic_ecommerce_website.git",
        route: "/projects/glowthic",
    },
    {
        title: "Landing Page / Portfolio Website",
        desc: `A modern and responsive landing page developed using React.js to showcase
projects, skills, achievements, and professional experience.`,
        tech: ["React", "JavaScript", "CSS"],
        live: "https://shrutinarware.vercel.app",
        github: "https://github.com/shrutinarware/Landing-Page.git",
        route: "/projects/portfolio",
    },
];

const techIcons = {
    React: <SiReact color="#61dafb" />,
    Firebase: <SiFirebase color="#ffcb2b" />,
    JavaScript: <SiJavascript color="#f7df1e" />,
    CSS: <SiCss3 color="#38bdf8" />,
};

export default function Projects() {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const styles = {
        section: {
            padding: isMobile ? "2.5rem 1rem" : "4rem 1rem",
            background: "transparent",
            color: "#cbd5e1",
            width: "100%",
        },
        heading: {
            fontSize: isMobile ? "1.9rem" : "2.4rem",
            fontWeight: "800",
            marginBottom: "1rem",
            color: "#fff",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            whiteSpace: isMobile ? "normal" : "nowrap",
        },

        highlight: { color: "#f7c948" },
        grid: {
            display: "grid",
            gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(300px, 1fr))",
            gap: isMobile ? "1.4rem" : "2rem",
        },
        card: {
            background: "radial-gradient(circle at top left, #0e1b2e, #070c18 70%)",
            borderRadius: 16,
            padding: isMobile ? "1.2rem" : "1.4rem",
            display: "flex",
            flexDirection: "column",
            minHeight: isMobile ? "auto" : 280,
            cursor: "pointer",
            transition: "all 0.3s ease",
        },
        title: {
            fontSize: isMobile ? "1.35rem" : "1.6rem",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "0.5rem",
            position: "relative",
            display: "inline-block",
        },

        desc: {
            fontSize: isMobile ? "0.85rem" : "0.9rem",
            color: "#94a3b8",
            lineHeight: 1.6,
            marginBottom: "1rem",
        },


        techRow: {
            display: "flex",
            gap: "0.45rem",
            flexWrap: "wrap",
            marginBottom: "1rem",
        },

        tech: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "0.3rem 0.7rem",
            borderRadius: 999,
            background: "rgba(255,255,255,0.08)",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "#fff",
        },

        actions: {
            display: "flex",
            gap: "0.6rem",
            marginTop: "auto",
            flexWrap: "wrap",
        },

        btn: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "0.55rem 0.9rem",
            borderRadius: 8,
            fontWeight: 700,
            fontSize: "0.85rem",
            textDecoration: "none",
            background:
                "linear-gradient(90deg, #716545ff 0%, #0b1220 50%, #383837 100%)",
            border: "2px solid #f7c948",
            color: "#fff",
            boxShadow: "0 0 14px rgba(247,201,72,0.6)",
        },
    };

    return (
        <section style={styles.section} id="projects">
            <div className="container">
                <h2 style={styles.heading}>
                    My <span style={styles.highlight}>Projects</span>
                </h2>

                <motion.div style={styles.grid}>
                    {projects.map((p, i) => {
                        const isActive = activeIndex === i;
                        const isHovered = hoveredIndex === i;

                        return (
                            <motion.div
                                key={i}
                                style={{
                                    ...styles.card,
                                    border: isActive
                                        ? "2px solid #f7c948"
                                        : "1px solid rgba(247,201,72,0.18)",
                                }}
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 18px 45px rgba(247,201,72,0.25)",
                                }}

                            >
                                {/* TITLE */}
                                <h3
                                    style={{
                                        ...styles.title,

                                    }}
                                    onMouseEnter={() => setHoveredIndex(i)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    {p.title}


                                </h3>

                                <p style={styles.desc}>{p.desc}</p>

                                <div style={styles.techRow}>
                                    {p.tech.map((t, idx) => (
                                        <span key={idx} style={styles.tech}>
                                            {techIcons[t]} {t}
                                        </span>
                                    ))}
                                </div>

                                <div style={styles.actions}>


                                    <a
                                        href={p.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={styles.btn}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <FaGithub /> Code
                                    </a>
                                    <a href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={styles.btn}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            navigate(p.route);
                                        }}>
                                        Case study

                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
