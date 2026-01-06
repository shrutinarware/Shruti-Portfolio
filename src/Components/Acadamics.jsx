import { useEffect, useState } from "react";

const Academics = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const styles = {
        section: {
            padding: isMobile ? "2.5rem 1rem" : "3rem 1rem",
            background: "transparent",
            color: "#cbd5e1",
            width: "100%",
            overflowX: "hidden",
        },


        heading: {
            fontSize: isMobile ? "1.9rem" : "2.4rem",
            fontWeight: 800,
            marginBottom: "1.5rem",
            color: "#fff",
            display: "inline-flex",
            gap: "8px",
            alignSelf: "flex-start",
            whiteSpace: isMobile ? "normal" : "nowrap",
            alignSelf: "flex-start",
        },

        highlight: {
            color: "#f7c948",
        },

        card: {
            width: "100%",
            padding: "1.5rem",
            borderRadius: 16,
            border: "1.5px solid rgba(247,201,72,0.6)",

            boxShadow: `
        0 0 8px rgba(247,201,72,0.35),
        inset 0 0 6px rgba(247,201,72,0.2)
      `,
            marginBottom: isMobile ? "0.8rem" : "1.2rem",
            background: "radial-gradient(circle at top left, #0e1b2e, #070c18 70%)",
        },

        degree: {
            fontSize: isMobile ? "1.05rem" : "1.5rem",
            fontWeight: 700,
            color: "#f7c948",
            marginBottom: "0.4rem",
        },

        institute: {
            fontSize: "0.95rem",
            fontWeight: 600,
            color: "#e5e7eb",
        },

        duration: {
            fontSize: "0.85rem",
            color: "#94a3b8",
            marginBottom: "0.5rem",
        },

        desc: {
            fontSize: "0.9rem",
            lineHeight: "1.6",
            color: "#94a3b8",
        },
    };

    return (
        <section id="academics" style={styles.section}>
            <div className="container">
                <h2 style={styles.heading}>
                    My <span style={styles.highlight}>Academics</span>
                </h2>

                {/* DEGREE 1 */}
                <div style={styles.card}>
                    <div style={styles.degree}>Master of Computer Application <span style={{ fontSize: isMobile ? "0.7rem" : "0.9rem", fontWeight: 500, color: "#94a3b8", marginLeft: "8px" }}>
                        (2021 – 2023)
                    </span></div>
                    <div style={styles.institute}>Medi-Caps University, Indore</div>

                    <p style={styles.desc}>
                        Gained advanced knowledge in software development, data structures,
                        database management systems, and web technologies. Worked on academic
                        projects focused on building scalable and user-friendly applications.
                    </p>

                </div>

                {/* DEGREE 2*/}
                <div style={styles.card}>
                    <div style={styles.degree}>Bachelor of Computer Science <span style={{ fontSize: isMobile ? "0.7rem" : "0.9rem", fontWeight: 500, color: "#94a3b8", marginLeft: "8px" }}>
                        (2018 – 2021)
                    </span></div>
                    <div style={styles.institute}>Shri.Neelkantheshwar PG College, Khandwa</div>
                    <p style={styles.desc}>
                        Built a strong foundation in computer science fundamentals including
                        programming concepts, problem-solving, and basic web development.
                        Developed interest in frontend technologies and application design.
                    </p>

                </div>
                {/* DEGREE 3*/}
                <div style={styles.card}>
                    <div style={styles.degree}>Higher Secondary Education (12th) <span style={{ fontSize: isMobile ? "0.7rem" : "0.9rem", fontWeight: 500, color: "#94a3b8", marginLeft: "8px" }}>
                        (2017 – 2018)
                    </span></div>
                    <div style={styles.institute}>A.K.N.K School, Khandwa</div>

                    <p style={styles.desc}>
                        Completed higher secondary education with a focus on Mathematics
                        and Science, building a strong foundation in logic and
                        problem-solving.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Academics;
