import React, { useEffect, useState } from 'react';
import Profile from "../Assests/Profile/Photo.jpeg"
import useResponsive from "../hooks/useResponsive";

export default function Home() {
    const { isMobile, isTablet } = useResponsive();

    // Inject small keyframe animations for floating icons
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes floatA { 0%{transform: translateY(0)}50%{transform: translateY(-12px)}100%{transform: translateY(0)} }
            @keyframes floatB { 0%{transform: translateY(0)}50%{transform: translateY(-6px)}100%{transform: translateY(0)} }
            @keyframes fadeIn { from{opacity:0} to{opacity:1} }
            .floatA{animation: floatA 6s ease-in-out infinite;}
            .floatB{animation: floatB 5s ease-in-out infinite;}
            .fade{animation: fadeIn 800ms ease forwards;}
        `;
        document.head.appendChild(style);
        return () => { document.head.removeChild(style); };
    }, []);

    const styles = {
        section: {
            background: "#071428",
            color: "#cbd5e1",
            padding: isMobile ? "1.2rem 0.75rem" : "2.5rem 2rem",
            paddingTop: isMobile ? "56px" : "70px",
            boxSizing: "border-box",
            minHeight: "auto",
            width: "100%",
        },
        wrapper: {
            maxWidth: isMobile ? "100%" : 1200,
            margin: "0 auto",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "1.25rem" : "3rem",
            padding: isMobile ? "0.75rem" : "2rem",
            borderRadius: 12,

        },

        left: {
            flex: 1,
            maxWidth: isMobile ? '100%' : '58%',
            textAlign: 'left',
        },
        leftCard: {
            color: '#0e3445',
            padding: isMobile ? '1rem' : '2rem',
            borderRadius: 12,
            boxShadow: 'none',
            background: 'transparent',
            maxWidth: '750px'
        },
        subtitle: {
            color: '#f7c948',
            fontWeight: 600,
            marginBottom: '0.75rem',
        },
        title: {
            color: "#fff",
            fontSize: isMobile ? "1.6rem" : "4rem",
            lineHeight: isMobile ? 1.15 : 1.05,
            marginBottom: isMobile ? "0.6rem" : "1rem",
            fontWeight: 800,
        },

        desc: {
            color: "#93a7bb",
            maxWidth: "100%",
            fontSize: isMobile ? "0.9rem" : "1.5rem",
            lineHeight: isMobile ? 1.45 : 1.7,
            marginBottom: isMobile ? "0.8rem" : "1.25rem",
        },

        socialRow: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            marginTop: '0.75rem'
        },
        socialLink: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: isMobile ? 32 : 38,
            height: isMobile ? 32 : 38,
            borderRadius: 8,
            background: 'rgba(255,255,255,0.04)',
            color: '#ffffff',
            textDecoration: 'none',
            border: '1px solid rgba(247,201,72,0.25)',
            transition: 'all 0.3s ease',
        },

        socialIcon: {
            width: isMobile ? 15 : 18,
            height: isMobile ? 15 : 18,
            display: 'block'
        },

        statsWrapper: {
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? "0.5rem" : "0.75rem",
            marginTop: isMobile ? "0.6rem" : "1rem",
            flexWrap: 'wrap',

        },
        statsCard: {
            background: "radial-gradient(circle at top left, #0e1b2e, #070c18 70%)",
            border: "1px solid #f7c948",
            borderRadius: 8,
            boxSizing: "border-box",
            textAlign: "center",

            /* 🔽 MOBILE COMPACT */
            padding: isMobile ? "0.4rem 0.6rem" : "0.6rem 1rem",
            minHeight: isMobile ? "52px" : "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: isMobile ? "0.3rem" : "0.3rem",
        },

        statNumber: {
            color: '#f7c948',
            fontWeight: 800,
            fontSize: isMobile ? "1rem" : "1.6rem",
            marginBottom: 4
        },
        statLabel: {
            color: '#9fb0bd',
            fontSize: isMobile ? "0.65rem" : "0.9rem",
        },
        divider: {
            width: 1,
            height: 36,
            background: 'rgba(255,255,255,0.06)',
            alignSelf: 'center'
        },

        right: {
            width: isMobile ? "100%" : 360,
            flexShrink: 0,
            display: "flex",
            justifyContent: "center",
        },
        imageWrap: {
            width: isMobile ? 180 : 360,
            height: isMobile ? 180 : 360,
            borderRadius: "50%",
            border: "3px solid #f7c948",


            /* ✨ Soft glow */
            boxShadow: `
        0 0 12px rgba(247,201,72,0.6),
        0 0 28px rgba(247,201,72,0.35)
    `,
        },

        imageContainer: {
            position: 'relative',
            width: isMobile ? '100%' : 420,
            height: isMobile ? 260 : 420,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },

        decorCircle: {
            position: 'absolute',
            right: isMobile ? '-12%' : '-28%',
            top: isMobile ? '-8%' : '-12%',
            width: isMobile ? 160 : 420,
            height: isMobile ? 160 : 420,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 30%, rgba(24,64,80,0.35), rgba(7,20,30,0))',
            zIndex: 1
        },


        decorSquare: {
            position: 'absolute',
            left: isMobile ? '-8%' : '-12%',
            bottom: isMobile ? '-6%' : '-6%',
            width: isMobile ? 120 : 160,
            height: isMobile ? 120 : 160,
            background: 'rgba(7,48,74,0.12)',
            transform: 'rotate(-12deg)',
            borderRadius: 8,
            zIndex: 1
        },

        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
        },


        floatingIcon: {
            position: 'absolute',
            width: 54,
            height: 54,
            zIndex: 3,
            background: 'transparent',
            boxShadow: '0 10px 30px rgba(0,0,0,0.45)',
            borderRadius: 10,
            padding: 8,
            display: 'inline-block'
        }
    };

    return (
        <div className="container">
            <section id="home" style={styles.section} aria-label="Home hero">

                <div style={styles.wrapper}>
                    <div style={styles.left}>
                        <div style={styles.leftCard}>
                            <div
                                style={{
                                    display: "inline-flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "fit-content",
                                    padding: "0.55rem 1.2rem",
                                    borderRadius: 10,
                                    background: "linear-gradient(90deg, #f7c948 0%, #0b1220 50%, #383837ff 100%)",
                                    border: "2px solid #f7c948",
                                    boxShadow: "0 0 14px rgba(247,201,72,0.6)",

                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    marginBottom: "1rem",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-3px)";
                                    e.currentTarget.style.boxShadow =
                                        "0 0 20px rgba(247,201,72,0.7)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow =
                                        "0 0 12px rgba(247,201,72,0.4)";
                                }}
                                onClick={() =>
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                            >
                                <div style={{ color: "#f7c948", fontWeight: 800, fontSize: "1.2rem" }}>
                                    <span style={{ fontSize: "1.1rem" }}>⚡</span> Hire Me
                                </div>

                            </div>

                            <h1 style={{ ...styles.title, color: '#ffffff', cursor: "pointer" }}>I'm Shruti Narware</h1>
                            <p style={{ ...styles.desc, color: '#ffffff', cursor: "pointer" }}>
                                I'm a passionate <span style={{ color: "#f7c948", fontWeight: "bold", fontSize: "20px" }}>React.js Developer</span> focused on building modern, responsive, and user-friendly web applications.
                                I love turning ideas into clean, functional interfaces using React, JavaScript, and modern UI practices.
                            </p>
                            <div style={{ marginTop: '1rem' }}>

                                <div style={styles.socialRow}>
                                    <a
                                        href="https://instagram.com/__shruuu.narware__"
                                        // target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                        style={styles.socialLink}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = "rgba(247,201,72,0.15)";
                                            e.currentTarget.style.boxShadow =
                                                "0 0 12px rgba(247,201,72,0.6)";
                                            e.currentTarget.style.transform = "scale(1.12)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                                            e.currentTarget.style.boxShadow = "none";
                                            e.currentTarget.style.transform = "scale(1)";
                                        }}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={styles.socialIcon} aria-hidden="true">
                                            <rect x="3" y="3" width="18" height="18" rx="5" stroke="#f7c948" strokeWidth="1.5" />
                                            <circle cx="12" cy="11" r="3.2" stroke="#f7c948" strokeWidth="1.5" />
                                            <circle cx="17.5" cy="6.5" r="0.5" fill="#f7c948" />
                                        </svg>
                                    </a>

                                    <a
                                        href="mailto:shrutinarware03@gmail.com"
                                        aria-label="Send email"
                                        style={styles.socialLink}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = "rgba(247,201,72,0.15)";
                                            e.currentTarget.style.boxShadow =
                                                "0 0 12px rgba(247,201,72,0.6)";
                                            e.currentTarget.style.transform = "scale(1.12)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                                            e.currentTarget.style.boxShadow = "none";
                                            e.currentTarget.style.transform = "scale(1)";
                                        }}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={styles.socialIcon} aria-hidden="true">
                                            <rect x="3" y="6" width="18" height="12" rx="2" stroke="#f7c948" strokeWidth="1.5" />
                                            <path d="M4 7.5L12 13L20 7.5" stroke="#f7c948" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/shruti-narware?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                        // target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                        style={styles.socialLink}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = "rgba(247,201,72,0.15)";
                                            e.currentTarget.style.boxShadow =
                                                "0 0 12px rgba(247,201,72,0.6)";
                                            e.currentTarget.style.transform = "scale(1.12)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                                            e.currentTarget.style.boxShadow = "none";
                                            e.currentTarget.style.transform = "scale(1)";
                                        }}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={styles.socialIcon} aria-hidden="true">
                                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="#f7c948" strokeWidth="1.5" />
                                            <path d="M8 11.5V17" stroke="#f7c948" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M8 9.5V9.5" stroke="#f7c948" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M12 17V12.5" stroke="#f7c948" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M12 12.5C12 11.67 13.34 11.5 14.1 11.5C15.7 11.5 16 12.6 16 13.5V17" stroke="#f7c948" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://github.com/shrutinarware"
                                        // target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub"
                                        style={styles.socialLink}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = "rgba(247,201,72,0.15)";
                                            e.currentTarget.style.boxShadow =
                                                "0 0 12px rgba(247,201,72,0.6)";
                                            e.currentTarget.style.transform = "scale(1.12)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                                            e.currentTarget.style.boxShadow = "none";
                                            e.currentTarget.style.transform = "scale(1)";
                                        }}
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={styles.socialIcon}
                                        >
                                            <path
                                                d="M22.2 11.3L12.7 1.8c-.4-.4-1-.4-1.4 0l-2 2 2.5 2.5c.6-.2 1.3-.1 1.8.4.6.6.7 1.4.3 2.1l2.4 2.4c.7-.2 1.5 0 2 .5.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.6-.6-.7-1.5-.4-2.2l-2.3-2.3v6.1c.2.1.4.2.6.4.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.8-.8-.8-2.1 0-2.9.2-.2.4-.3.7-.4V8.6c-.2-.1-.4-.2-.6-.4-.6-.6-.7-1.4-.4-2.1L7.5 3.6 1.8 9.3c-.4.4-.4 1 0 1.4l9.5 9.5c.4.4 1 .4 1.4 0l9.5-9.5c.4-.4.4-1 0-1.4z"
                                                fill="#f7c948"
                                            />
                                        </svg>
                                    </a>
                                </div>                        </div>

                            <div style={styles.statsWrapper} aria-hidden="false">
                                <div style={styles.statsCard}>
                                    <div style={styles.statNumber}>1+</div>
                                    <div style={styles.statLabel}>Experiences</div>
                                </div>
                                <div style={styles.divider} />
                                <div style={styles.statsCard}>
                                    <div style={styles.statNumber}>2+</div>
                                    <div style={styles.statLabel}>Project done</div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div style={styles.right}>
                        <div style={styles.imageContainer}>
                            {/* <div style={styles.decorCircle} />
                        <div style={styles.decorSquare} /> */}

                            <div style={styles.imageWrap}>
                                <img
                                    src={Profile}
                                    alt="Profile"
                                    style={styles.image}
                                />
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
