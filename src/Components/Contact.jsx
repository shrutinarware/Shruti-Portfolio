import React from "react";
import { FaEnvelope, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    const styles = {
        section: {
            padding: "3rem 1rem",   // 🔥 same as rest of site
            color: "#cbd5e1",
            textAlign: "center",
            background: "radial-gradient(circle at top left, #0e1b2e, #070c18 70%)",
            width: "100%",
        },
        heading: {
            fontSize: "2.2rem",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "0.75rem",
        },
        highlight: {
            color: "#f7c948",
        },
        subText: {
            color: "#9fb0bd",
            marginBottom: "3rem",
            fontSize: "1rem",
        },

        infoGrid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
            width: "100%",   // 🔥 safety
        },

        infoCard: {
            background: "#071428",
            border: "1px solid rgba(247,201,72,0.25)",
            borderRadius: 14,
            padding: "1.5rem",
            transition: "all 0.3s ease",
        },

        iconWrap: {
            width: 54,
            height: 54,
            borderRadius: "50%",
            background:
                "#f7c948",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 0.8rem",
            color: "#071428",
            fontSize: "1.3rem",
            boxShadow: "0 0 16px rgba(247,201,72,0.6)",
        },

        label: {
            fontSize: "0.8rem",
            color: "#9fb0bd",
            marginBottom: "0.3rem",
        },

        value: {
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "0.95rem",
            wordBreak: "break-word",
        },

        button: {
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.7rem 1.6rem",
            borderRadius: 10,
            background:
                "linear-gradient(90deg, #f7c948 0%, #0b1220 50%, #f7c948 100%)",
            border: "2px solid #f7c948",
            color: "#071428",
            fontWeight: 800,
            cursor: "pointer",
            textDecoration: "none",
            boxShadow: "0 0 18px rgba(247,201,72,0.6)",
            transition: "all 0.3s ease",
        },

        footer: {
            marginTop: "3rem",
            fontSize: "0.8rem",
            color: "#64748b",
        },
    };

    return (
        <section style={styles.section} id="contact">
            <div className="container">
                <h2 style={styles.heading}>
                    Have a project idea in mind? <br />
                    <span style={styles.highlight}>Let’s work together</span>
                </h2>

                <p style={styles.subText}>
                    Get in touch and let’s build something amazing.
                </p>

                <div style={styles.infoGrid}>
                    {/* Email */}
                    <div style={styles.infoCard}>
                        <a
                            href="mailto:shrutinarware03@gmail.com"
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <div style={styles.iconWrap}>
                                <FaEnvelope />
                            </div>
                            <div style={styles.label}>Email Address</div>
                            <div style={styles.value}>shrutinarware03@gmail.com</div>
                        </a>
                    </div>


                    {/* Phone */}
                    <div style={styles.infoCard}>
                        <a
                            href="https://wa.me/918349759769"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <div style={styles.iconWrap}>
                                <FaWhatsapp />
                            </div>
                            <div style={styles.label}>WhatsApp</div>
                            <div style={styles.value}>+91 83497 59769</div>
                        </a>
                    </div>

                    {/* LinkedIn */}
                    <div style={styles.infoCard}>
                        <a
                            href="https://www.linkedin.com/in/shruti-narware"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <div style={styles.iconWrap}>
                                <FaLinkedinIn />
                            </div>
                            <div style={styles.label}>LinkedIn</div>
                            <div style={styles.value}>linkedin.com/in/shruti-narware</div>
                        </a>
                    </div>

                </div>



                <div style={styles.footer}>
                    © {new Date().getFullYear()} Shruti Narware. All rights reserved.
                </div>
            </div>
        </section>
    );
}
