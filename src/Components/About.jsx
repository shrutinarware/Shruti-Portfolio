import { useEffect, useState } from "react";

const About = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(24px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes softGlow {
      0% { opacity: 0.3; }
      50% { opacity: 0.55; }
      100% { opacity: 0.3; }
    }

    .fade-up {
      animation: fadeUp 0.9s ease forwards;
    }

    .fade-delay-1 { animation-delay: 0.15s; }
    .fade-delay-2 { animation-delay: 0.3s; }
    .fade-delay-3 { animation-delay: 0.45s; }
  `
        style.innerHTML += `
  .dot-text {
    position: relative;
    padding-left: 1.2rem;
  }
  .dot-text::before {
    content: "•";
    position: absolute;
    left: 0;
    top: 0.1rem;
    color: #f7c948;
    font-size: 1.2rem;
    line-height: 1;
  }
`;
        ;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    const styles = {
        section: {
            padding: isMobile ? "1.6rem 1rem" : "2rem 1rem",
            background: "transparent",
            color: "#cbd5e1",
            overflowX: "hidden",
            width: "100%",
        },
        container: {
            display: "flex",
            gap: isMobile ? "2rem" : "3rem",
            alignItems: "center",
            flexDirection: isMobile ? "column" : "row",
            width: "100%",
        },

        left: {
            flex: 1,
            display: "flex",
            justifyContent: "center",
            width: "100%",
        },
        imageWrap: {
            position: "relative",
            width: isMobile ? 220 : 260,
            height: isMobile ? 280 : 320,
        },

        image: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 12,
            position: "relative",
            zIndex: 2,
        },
        circleBg: {
            position: "absolute",
            width: 220,
            height: 220,
            background: "rgba(56,189,248,0.12)",
            borderRadius: "50%",
            top: -30,
            left: -30,
            zIndex: 1,
        },
        right: {
            flex: 1,
            textAlign: "left",
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

        highlight: {
            color: "#f7c948"
        },
        text: {
            lineHeight: isMobile ? "1.6" : "1.7",
            marginBottom: isMobile ? "0.8rem" : "1rem",
            color: "#94a3b8",
            transition: "color 0.3s ease",
            fontSize: isMobile ? "0.85rem" : "1rem",
        },

    };


    return (

        <section style={styles.section} id="about">
            <div className="container" style={styles.container}>



                {/* RIGHT CONTENT */}
                <div style={styles.right}>
                    <h2 style={styles.heading} className="fade-up">
                        About <span style={styles.highlight}>Me</span>
                    </h2>

                    <p style={styles.text} className="fade-up fade-delay-1 dot-text">
                        I am a dedicated <span style={{ color: "#f7c948", fontWeight: "bold" }}>React.js Developer</span> with <span style={{ color: "#f7c948", fontWeight: "bold" }}>3+ year of hands-on experience </span>
                        in building modern, responsive, and scalable web applications.
                        I specialize in creating clean, interactive user interfaces
                        that deliver smooth and engaging user experiences.
                    </p>

                    <p style={styles.text} className="fade-up fade-delay-2 dot-text">
                        I have strong practical experience with <span style={{ color: "#f7c948", fontWeight: "bold" }}>React.js, JavaScript, HTML, CSS</span>,
                        along with modern UI libraries and component-based architecture.
                        I focus on writing clean, reusable code and optimizing performance
                        for real-world applications.
                    </p>

                    <p style={styles.text} className="fade-up fade-delay-3 dot-text">
                        I enjoy turning ideas and designs into functional products,
                        collaborating with teams, and continuously improving my skills.
                        I am passionate about learning new technologies and delivering
                        high-quality digital solutions.
                    </p>

                </div>

            </div>
        </section>
    );
};

export default About;
