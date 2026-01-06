
import React, { useState, useEffect } from "react";

// Images (Images imports wese hi rahenge)
import RoboImage from "../Assests/Images/Robotronix.png";
import Oasis from "../Assests/Images/Oasis.png";
import OasisAppriciation from "../Assests/Images/Oasis Appriciation.png";
import GreatLearning from "../Assests/Images/GreatLearning.png";
import Bootcamp1 from "../Assests/Images/Bootcamp1.png";
import Bootcamp2 from "../Assests/Images/Bootcamp2.png";
import TCS1 from "../Assests/Images/TCS1.png";
import Eduversity from "../Assests/Images/Eduversity.png";

const certificates = [
    {
        title: "Frontend - Web Development",
        org: "Robotronix Engineering PVT LTD",
        date: "18 May 2023",
        type: "Internship",
        image: RoboImage,
        file: "/Certificates/Robotronix.pdf",
    },
    {
        title: "Web Development And Designing",
        org: "Oasis Infobyte",
        date: "15 December 2023",
        type: "Internship",
        image: Oasis,
        file: "/certificates/Oasis.pdf",
    },
    {
        title: "Web Development And Designing",
        org: "Oasis Infobyte",
        date: "15 December 2023",
        type: "Appreciation",
        image: OasisAppriciation,
        file: "/certificates/OasisAppreciation.pdf",
    },
    {
        title: "Front End Development - HTML",
        org: "Great Learning",
        date: "June 2023",
        type: "Course",
        image: GreatLearning,
        file: "/certificates/GreatLearning.pdf",
    },
    {
        title: "React.js Essentials Bootcamp",
        org: "Lets Upgrade",
        date: "29 July 2023",
        type: "Bootcamp",
        image: Bootcamp1,
        file: "/certificates/Bootcamp1.pdf",
    },
    {
        title: "Javascript Essentials Bootcamp",
        org: "Lets Upgrade",
        date: "22 July 2023",
        type: "Bootcamp",
        image: Bootcamp2,
        file: "/certificates/Bootcamp2.pdf",
    },
    {
        title: "Develop Soft Skills that Industries Demand",
        org: "TCS Ion",
        date: "15 January 2023",
        type: "Course",
        image: TCS1,
        file: "/certificates/TCS1.pdf",
    },
    {
        title: "Full Stack Web Development",
        org: "Edu-versity",
        date: "10 November 2022",
        type: "Internship",
        image: Eduversity,
        file: "/certificates/Eduversity.pdf",
    },
];

export default function Achievements() {
    const [showAll, setShowAll] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);
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
        },
        headerRow: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
            gap: "1rem",              // ⭐ add
            flexWrap: "wrap",
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

        downloadIcon: {
            width: 44,
            height: 44,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: selectedCert ? "#f7c948" : "rgba(255,255,255,0.12)",
            cursor: selectedCert ? "pointer" : "not-allowed",
            transition: "all 0.3s ease",
        },
        grid: {
            display: "grid",
            gridTemplateColumns: isMobile
                ? "repeat(2, 1fr)"
                : "repeat(auto-fit, minmax(220px, 1fr))",
            gap: isMobile ? "1.2rem" : "1.5rem",
        },
        card: (active) => ({
            position: "relative",
            background:
                "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
            borderRadius: 12,
            overflow: "hidden",
            border: active
                ? "1px solid rgba(56,189,248,0.8)"
                : "1px solid rgba(247,201,72,0.12)",
            boxShadow: active
                ? "0 14px 35px rgba(56,189,248,0.35)"
                : "none",
            transition: "all 0.3s ease",
            cursor: "pointer",
        }),

        cardDownload: {
            position: "absolute",
            top: 8,
            right: 8,
            width: 34,
            height: 34,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.55)",
            cursor: "pointer",
            zIndex: 5,
        },

        imageWrap: {

            overflow: "hidden",
            height: isMobile ? 110 : 120,
        },
        image: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            // Changed: Added this to align image to the top
            objectPosition: "top",
        },
        content: {
            padding: isMobile ? "0.7rem" : "0.8rem",
        },

        badge: (type) => ({
            position: "absolute",
            top: 8,
            left: 8,
            padding: "0.25rem 0.55rem",
            fontSize: "0.6rem",
            fontWeight: 700,
            borderRadius: 6,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            color: "#071428",
            background:
                type === "Internship"
                    ? "#38bdf8"
                    : type === "Bootcamp"
                        ? "#f7c948"
                        : type === "Course"
                            ? "#7e7e9cff"
                            : "#ea353b",
        }),

        title: {
            fontSize: "0.95rem", // Slightly smaller font
            fontWeight: 700,
            color: "#fff",
            marginBottom: 4,
            lineHeight: "1.3",
        },
        meta: {
            fontSize: "0.8rem",
            color: "#94a3b8",
        },

        showAllWrap: {
            textAlign: "center",
            marginTop: "2.5rem",
        },
        showAllBtn: {
            background: "#f7c948",
            border: "none",
            padding: isMobile ? "0.55rem 1.1rem" : "0.6rem 1.2rem",
            borderRadius: 8,
            fontWeight: 800,
            cursor: "pointer",
        },
    };

    return (
        <section style={styles.section} id="achievements" >
            <div className="container">

                {/* 🔹 HEADER WITH DOWNLOAD ICON */}
                <div style={styles.headerRow}>
                    <h2 style={styles.heading}>
                        My <span style={styles.highlight}>Achievements</span>
                    </h2>
                </div>
                {/* 🔹 CERTIFICATES GRID */}
                < div style={styles.grid} >
                    {/* Changed: slice(0, 3) -> slice(0, 4) */}
                    {(showAll ? certificates : certificates.slice(0, 4)).map(
                        (cert, i) => (
                            <div
                                key={i}
                                style={styles.card(selectedCert === cert)}
                                onClick={() => setSelectedCert(cert)}
                            >
                                {/* ⬇️ DOWNLOAD ICON */}
                                <a
                                    href={cert.file}
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.cardDownload}
                                    onClick={(e) => e.stopPropagation()} // ⭐ card select block
                                    title="Download Certificate"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="#f7c948"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 3a1 1 0 0 1 1 1v9.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42L11 13.59V4a1 1 0 0 1 1-1z" />
                                        <path d="M5 19a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z" />
                                    </svg>
                                </a>

                                <div style={styles.imageWrap}>
                                    <img src={cert.image} alt={cert.title} style={styles.image} />
                                </div>

                                <div style={styles.content}>
                                    <h3 style={styles.title}>{cert.title}</h3>
                                    <p style={styles.meta}>
                                        {cert.org} • {cert.date}

                                    </p>
                                    {/* 🔥 BADGE */}
                                    <div style={styles.badge(cert.type)}>
                                        {cert.type}
                                    </div>
                                </div>
                            </div>

                        )
                    )}
                </div>

                {/* 🔹 SHOW ALL BUTTON */}
                <div style={styles.showAllWrap}>
                    <button
                        style={styles.showAllBtn}
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "Show Less ↑" : "Show More →"}
                    </button>
                </div>
            </div>
        </section >
    );
}