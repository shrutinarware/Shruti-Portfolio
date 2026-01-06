import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { SiReact, SiFirebase, SiJavascript, SiCss3 } from "react-icons/si";

const projects = [
    {
        title: "Glowthic – Beauty E-commerce Website & App",
        desc: `Glowthic is a full-featured beauty e-commerce platform built using React.js.
It allows users to explore products, manage carts, and enjoy a smooth shopping experience.`,
        tech: ["React", "Firebase", "JavaScript", "CSS"],
        github: "https://github.com/shrutinarware/glowthic_ecommerce_website.git",
        route: "/projects/glowthic",
    },
    {
        title: "Landing Page / Portfolio Website",
        desc: `A modern and responsive portfolio website built with React.js
to showcase skills, projects, and experience.`,
        tech: ["React", "JavaScript", "CSS"],
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

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const styles = {
        section: {
            padding: isMobile ? "2.5rem 1rem" : "4rem 2rem",
            width: "100%",
        },
        container: {
            maxWidth: 1200,
            margin: "0 auto",
        },
        heading: {
            fontSize: isMobile ? "1.9rem" : "2.4rem",
            fontWeight: 800,
            marginBottom: "2rem",
            color: "#fff",
        },
        highlight: { color: "#f7c948" },
        grid: {
            display: "grid",
            gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
        },
        card: {
            background: "radial-gradient(circle at top left, #0e1b2e, #070c18 70%)",
            borderRadius: 16,
            padding: "1.4rem",
            border: "1px solid rgba(247,201,72,0.25)",
            display: "flex",
            flexDirection: "column",
        },
        title: {
            fontSize: "1.4rem",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "0.6rem",
        },
        desc: {
            fontSize: "0.9rem",
            color: "#94a3b8",
            lineHeight: 1.6,
            marginBottom: "1rem",
        },
        techRow: {
            display: "flex",
            gap: "0.5rem",
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
            color: "#fff",
        },
        actions: {
            display: "flex",
            gap: "0.6rem",
            marginTop: "auto",
        },
        btn: {
            padding: "0.6rem 1rem",
            borderRadius: 8,
            fontWeight: 700,
            background: "#f7c948",
            color: "#071428",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
        },
    };

    return (
        <section id="projects" style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.heading}>
                    My <span style={styles.highlight}>Projects</span>
                </h2>

                <div style={styles.grid}>
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            style={styles.card}
                            whileHover={{ y: -6 }}
                        >
                            <h3 style={styles.title}>{p.title}</h3>
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
                                >
                                    <FaGithub /> Code
                                </a>

                                <button
                                    style={styles.btn}
                                    onClick={() => navigate(p.route)}
                                >
                                    Case Study
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
