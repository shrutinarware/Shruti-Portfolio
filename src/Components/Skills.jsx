import React from "react";
import useResponsive from "../hooks/useResponsive";

export default function Skills() {
    const { isMobile, isTablet } = useResponsive();

    const skills = [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ];

    const styles = {
        section: {
            padding: isMobile ? "1.5rem 1rem" : "2.5rem 2rem",
            background: "transparent",
            overflowX: "hidden",
            width: "100%"

        },



        title: {
            fontSize: isMobile ? "1.8rem" : "2.4rem",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "1.8rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
        },
        highlight: { color: "#f7c948" },
        grid: {
            display: "grid",
            width: "100%",
            gridTemplateColumns: isMobile
                ? "repeat(3, 1fr)"
                : isTablet
                    ? "repeat(5, minmax(100px, 1fr))"
                    : "repeat(auto-fit, minmax(130px, 1fr))",
            gap: isMobile ? "0.8rem" : "1.8rem",
        },
        skill: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: isMobile ? "0.4rem" : "0.6rem",
            padding: isMobile ? "0.8rem 0.4rem" : "1rem 0.6rem",
            border: "1.5px solid rgba(247,201,72,0.65)",
            borderRadius: 14,
            background: "radial-gradient(circle at top left, #0e1b2e, #070c18 70%)",
            boxShadow: `
        0 0 6px rgba(247,201,72,0.45),
        inset 0 0 6px rgba(247,201,72,0.25)
      `,
            transition: "all 0.25s ease",
            cursor: "pointer",
        },

        icon: {
            width: isMobile ? 30 : 60,
            height: isMobile ? 30 : 60,
        },

        label: {
            color: "#cbd5e1",
            fontSize: isMobile ? "0.72rem" : "0.85rem",
            fontWeight: 600,
            textAlign: "center",
        },
    };

    return (
        <section id="skills" style={styles.section}>
            <div className="container">
                <h2 style={styles.title}>
                    My <span style={styles.highlight}>Skills</span>
                </h2>

                <div style={styles.grid}>
                    {skills.map((skill, i) => (
                        <div
                            key={i}
                            style={styles.skill}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-5px) scale(1.05)";
                                e.currentTarget.style.boxShadow =
                                    "0 0 14px rgba(247,201,72,0.85), inset 0 0 10px rgba(247,201,72,0.45)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "none";
                                e.currentTarget.style.boxShadow =
                                    "0 0 6px rgba(247,201,72,0.45), inset 0 0 6px rgba(247,201,72,0.25)";
                            }}
                        >
                            <img src={skill.icon} alt={skill.name} style={styles.icon} />
                            <span style={styles.label}>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
