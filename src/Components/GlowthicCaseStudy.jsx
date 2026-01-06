import React, { useEffect } from "react";
import Home from "../Assests/Casestudy/Home.png";
import Categories from "../Assests/Casestudy/Categories.png";
import ProductPage from "../Assests/Casestudy/Products.png";



export default function GlowthicCaseStudy() {
    const styles = {
        section: {
            padding: "4rem 1.5rem",
            background: "#0b1220",
            color: "#cbd5e1",
        },
        container: {
            maxWidth: 1000,
            margin: "0 auto",
        },
        heading: {
            fontSize: "2.4rem",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "1rem",
        },
        highlight: {
            color: "#f7c948",
        },
        subHeading: {
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#f7c948",
            marginTop: "2.2rem",
            marginBottom: "0.75rem",
        },
        text: {
            fontSize: "0.95rem",
            lineHeight: 1.8,
            color: "#94a3b8",
            marginBottom: "1rem",
        },
        box: {
            background:
                "linear-gradient(90deg, rgba(247,201,72,0.08), rgba(0,0,0,0), rgba(247,201,72,0.08))",
            border: "1px solid rgba(247,201,72,0.25)",
            borderRadius: 14,
            padding: "1.0rem",
            marginTop: "1.5rem",
        },
        list: {
            paddingLeft: "1.2rem",
        },
        listItem: {
            marginBottom: "0.6rem",
            color: "#b6c7d6",
        },
        tagRow: {
            display: "flex",
            gap: "0.6rem",
            flexWrap: "wrap",
            marginTop: "0.5rem",
        },
        tag: {
            border: "1px solid #f7c948",
            padding: "0.3rem 0.75rem",
            borderRadius: 999,
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "#f7c948",
        },
        link: {
            display: "inline-block",
            marginTop: "1.5rem",
            padding: "0.6rem 1.3rem",
            borderRadius: 8,
            border: "1px solid #f7c948",
            color: "#f7c948",
            textDecoration: "none",
            fontWeight: 700,
        },
        imageCard: {
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid rgba(247,201,72,0.3)",
            background:
                "linear-gradient(180deg, rgba(247,201,72,0.08), rgba(0,0,0,0.1))",
            padding: "0.75rem",
        },
        imageGrid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            marginTop: "2rem",
        },
        image: {
            width: "100%",
            height: "180px",
            objectFit: "contain",
            display: "block",
        },
        caption: {
            padding: "0.75rem",
            fontSize: "0.8rem",
            color: "#f7c948",
            fontWeight: 600,
            textAlign: "center",
        },
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <section style={styles.section} id="glowthic-case-study">
            <div style={styles.container}>
                <h1 style={styles.heading}>
                    Glowthic <span style={styles.highlight}>Case Study</span>
                </h1>

                <p style={styles.text}>
                    <b>Glowthic</b> is a beauty-focused <span style={{ color: "#f7c948" }}>Amazon Affiliate web platform </span>
                    designed to showcase curated beauty products and redirect users to
                    Amazon for secure purchasing. The project focuses on user experience,
                    product discovery, and conversion-driven UI design.
                </p>

                {/* PROJECT OVERVIEW */}
                <div style={styles.box}>
                    <h2 style={styles.subHeading}>📌 Project Overview</h2>
                    <p style={styles.text}>
                        Glowthic is not a traditional e-commerce checkout platform.
                        Instead, it works as an <span style={{ color: "#f7c948" }}>affiliate-based product listing website </span>,
                        where users explore beauty products and are redirected to Amazon
                        through affiliate links to complete their purchase.
                    </p>
                </div>

                {/* 🔥 WEBSITE SCREENSHOTS */}
                <div style={styles.imageGrid}>
                    <div style={styles.imageCard}>
                        <img src={Home} alt="Glowthic Home" style={styles.image} />
                        <div style={styles.caption}>Home Page</div>
                    </div>

                    <div style={styles.imageCard}>
                        <img src={Categories} alt="Categories" style={styles.image} />
                        <div style={styles.caption}>Categories</div>
                    </div>

                    <div style={styles.imageCard}>
                        <img src={ProductPage} alt="Product Listing" style={styles.image} />
                        <div style={styles.caption}>Product Listing</div>
                    </div>


                </div>

                {/* MY ROLE */}
                <div style={styles.box}>
                    <h2 style={styles.subHeading}>👩‍💻 My Role</h2>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            Designed and developed the complete frontend using React.js
                        </li>
                        <li style={styles.listItem}>
                            Created reusable components for product cards and categories
                        </li>
                        <li style={styles.listItem}>
                            Integrated Amazon affiliate redirect links
                        </li>
                        <li style={styles.listItem}>
                            Used Firebase for data storage and content management
                        </li>
                        <li style={styles.listItem}>
                            Optimized UI for responsiveness and performance
                        </li>
                    </ul>
                </div>

                {/* FEATURES */}
                <div style={styles.box}>
                    <h2 style={styles.subHeading}>🚀 Key Features</h2>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            Beauty product listing with clean UI
                        </li>
                        <li style={styles.listItem}>
                            Product detail pages with descriptions & images
                        </li>
                        <li style={styles.listItem}>
                            “Buy on Amazon” affiliate redirection
                        </li>
                        <li style={styles.listItem}>
                            Mobile-first responsive design
                        </li>
                        <li style={styles.listItem}>
                            SEO-friendly structure for affiliate marketing
                        </li>
                    </ul>
                </div>

                {/* TECH STACK */}
                <div style={styles.box}>
                    <h2 style={styles.subHeading}>🛠️ Tech Stack</h2>
                    <div style={styles.tagRow}>
                        <span style={styles.tag}>React.js</span>
                        <span style={styles.tag}>JavaScript</span>
                        <span style={styles.tag}>Firebase</span>
                        <span style={styles.tag}>HTML</span>
                        <span style={styles.tag}>CSS</span>
                        <span style={styles.tag}>Material UI</span>
                    </div>
                </div>

                {/* CHALLENGES */}
                <div style={styles.box}>
                    <h2 style={styles.subHeading}>⚠️ Challenges</h2>
                    <p style={styles.text}>
                        The main challenge was designing an interface that encourages users
                        to explore products and click affiliate links without overwhelming
                        them, while maintaining fast load times and responsiveness.
                    </p>
                </div>

                {/* SOLUTION */}
                <div style={styles.box}>
                    <h2 style={styles.subHeading}>✅ Solutions</h2>
                    <p style={styles.text}>
                        I implemented a clean card-based layout, optimized images, and
                        ensured smooth navigation so users can easily browse products and
                        confidently proceed to Amazon for purchase.
                    </p>
                </div>

                {/* OUTCOME */}
                <div style={styles.box}>
                    <h2 style={styles.subHeading}>📈 Outcome</h2>
                    <p style={styles.text}>
                        Glowthic successfully demonstrates how an affiliate-based platform
                        can be built using React.js with a strong focus on UI, performance,
                        and conversion-oriented design.
                    </p>
                </div>

                {/* GITHUB */}
                <a
                    href="https://github.com/shrutinarware/glowthic_ecommerce_website.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link}
                >
                    View Code on GitHub →
                </a>
            </div>
        </section>
    );
}
