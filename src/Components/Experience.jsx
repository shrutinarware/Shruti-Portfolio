import React, { useEffect, useState } from "react";
import DevQSoft from "../Assests/ComapnyLogo/DevQSoft.jpg";
import CrystalTech from "../Assests/ComapnyLogo/crystaltech.jpg";
import Robotronix from "../Assests/ComapnyLogo/Robotronix.jpg";

export default function Experiences() {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" && window.innerWidth <= 900
    );
    const [activeCard, setActiveCard] = useState(null);

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 900px)");
        const handler = (e) => setIsMobile(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    const work = [
        {
            year: "Aug 2025 – Present",
            title: "React.js Developer",
            company: "DevQsoft Technology, Indore",
            logo: DevQSoft,
            link: "https://devqsoft.com/",
            desc: {
                doing: [
                    "Developing scalable, reusable React components for live production applications",
                    "Integrating RESTful APIs and managing application state using React Hooks",
                ],
                impact: [
                    "Improved application performance using lazy loading and code-splitting",
                    "Worked closely with designers and backend developers to deliver clean UI",
                ],
                learning: [
                    "Advanced React patterns and performance optimization techniques",
                    "Best practices for writing clean, maintainable production code",
                ],
            },
        },
        {
            year: "Apr 2024 – Aug 2025",
            title: "React.js Developer",
            company: "CrystalTech Services Pvt. Ltd., Indore",
            logo: CrystalTech,
            link: "https://crystaltechservices.com/",
            desc: {
                doing: [
                    "Converted Figma and UI/UX designs into responsive React interfaces",
                    "Built mobile-first layouts and ensured cross-browser compatibility",
                ],
                impact: [
                    "Enhanced accessibility using semantic HTML and UI best practices",
                    "Collaborated with backend developers for API integration",
                ],
                learning: [
                    "Real-world React project structure and component-based architecture",
                    "Team collaboration in agile development environment",
                ],
            },
        },
        {
            year: "Feb 2023 – May 2023",
            title: "Front-End Web Developer",
            company: "Robotronix Engineering Tech Pvt. Ltd., Indore",
            logo: Robotronix,
            link: "https://www.robotronix.co.in/",
            desc: {
                doing: [
                    "Developed interactive web pages using HTML, CSS, JavaScript, and basic React",
                    "Implemented responsive layouts for multiple screen sizes",
                ],
                impact: [
                    "Improved website performance and overall user experience",
                    "Assisted in migrating legacy code to modern JavaScript-based solutions",
                ],
                learning: [
                    "Strong foundation in front-end fundamentals and responsive design",
                    "Hands-on experience with real-world projects and development workflow",
                ],
            },
        },
    ];

    const styles = {
        section: {
            padding: isMobile ? "2.5rem 1rem" : "3rem 1rem",
            width: "100%",
        },

        heading: {
            color: "#fff",
            fontSize: isMobile ? "1.9rem" : "2.4rem",
            fontWeight: 800,
            marginBottom: "2rem",
        },

        highlight: { color: "#f7c948" },

        card: (active) => ({
            width: "100%",
            marginBottom: "2rem",
            background: "linear-gradient(180deg,#0b1220,#0f1a2b)",
            borderRadius: 16,
            padding: isMobile ? "1.4rem" : "2.2rem",
            border: "2px solid rgba(247,201,72,0.18)",
            boxShadow: active
                ? "0 20px 45px rgba(0,0,0,0.45)"
                : "0 12px 30px rgba(0,0,0,0.25)",
            transition: "0.3s",
        }),

        headerRow: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "1rem",
            flexWrap: "wrap",
        },

        leftHeader: {
            display: "flex",
            gap: "0.8rem",
            alignItems: "flex-start",
        },

        logoWrap: {
            width: 42,
            height: 42,
            background: "#fff",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 6,
            flexShrink: 0,
        },

        logoImg: {
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
        },

        title: {
            color: "#f7c948",
            fontWeight: 800,
            fontSize: "1rem",
        },

        company: {
            color: "#e5e7eb",
            fontWeight: 600,
            fontSize: "0.95rem",
            lineHeight: 1.3,
            display: "block",
            marginTop: "0.15rem",
            textDecoration: "none",
        },

        date: {
            color: "#9ca3af",
            fontSize: isMobile ? "0.75rem" : "0.9rem",
            textAlign: "right",
            whiteSpace: "nowrap",
        },

        innerGrid: {
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "1.2rem",
            marginTop: "1.6rem",
        },

        innerCard: {
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(247,201,72,0.25)",
            borderRadius: "16px",
            padding: "1.2rem 1.1rem",
        },

        innerTitle: {
            color: "#f7c948",
            fontWeight: 800,
            fontSize: "0.95rem",
            marginBottom: "0.6rem",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
        },

        innerPoint: {
            color: "#d1d5db",
            fontSize: isMobile ? "0.82rem" : "0.9rem",
            lineHeight: 1.6,
            marginBottom: "0.35rem",
        },
    };

    return (
        <section id="experiences" style={styles.section}>
            <div className="container">
                <h2 style={styles.heading}>
                    My <span style={styles.highlight}>Experiences</span>
                </h2>

                {work.map((ex, i) => (
                    <div
                        key={i}
                        style={styles.card(activeCard === i)}
                        onMouseEnter={() => setActiveCard(i)}
                        onMouseLeave={() => setActiveCard(null)}
                    >
                        {/* HEADER */}
                        <div style={styles.headerRow}>
                            <div style={styles.leftHeader}>
                                <div style={styles.logoWrap}>
                                    <img src={ex.logo} alt={ex.company} style={styles.logoImg} />
                                </div>

                                <div>
                                    <div style={styles.title}>{ex.title}</div>
                                    <a
                                        href={ex.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={styles.company}
                                    >
                                        {ex.company}
                                    </a>
                                </div>
                            </div>

                            <div style={styles.date}>{ex.year}</div>
                        </div>

                        {/* DETAILS */}
                        <div style={styles.innerGrid}>
                            <div style={styles.innerCard}>
                                <div style={styles.innerTitle}>🛠 What I Do</div>
                                {ex.desc.doing.map((item, idx) => (
                                    <div key={idx} style={styles.innerPoint}>{item}</div>
                                ))}
                            </div>

                            <div style={styles.innerCard}>
                                <div style={styles.innerTitle}>📈 Impact & Responsibilities</div>
                                {ex.desc.impact.map((item, idx) => (
                                    <div key={idx} style={styles.innerPoint}>{item}</div>
                                ))}
                            </div>

                            <div style={styles.innerCard}>
                                <div style={styles.innerTitle}>📚 What I’m Learning</div>
                                {ex.desc.learning.map((item, idx) => (
                                    <div key={idx} style={styles.innerPoint}>{item}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
