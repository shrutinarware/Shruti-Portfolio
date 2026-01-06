import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import useResponsive from "../hooks/useResponsive";


export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [hovered, setHovered] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    // ✅ SINGLE RESPONSIVE SOURCE
    const { isMobile, isTablet } = useResponsive();

    const links = [
        "Home",
        "Skills",
        "About",
        "Academics",
        "Experiences",
        "Projects",
        "Achievements",
        "Contact",
    ];

    const handleNavClick = (id) => {
        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: id } });
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(false);
    };





    const showToggle = isMobile || isTablet;
    const isMenuOpen = showToggle ? open : true;

    const styles = {
        navbar: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 64,
            background: "#071428",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 1.25rem",
            zIndex: 9999,
            borderBottom: "3px solid #123e5a",
        },

        brand: {
            fontWeight: 800,
            fontSize: "1.1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
        },

        brandDot: { color: "#f7c948" },

        rightGroup: {
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
        },

        downloadBtn: {
            background: "#f7c948",
            color: "#07304a",
            border: "none",
            padding: "0.45rem 0.85rem",
            borderRadius: 8,
            fontWeight: 700,
            fontSize: "0.8rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
        },

        navToggle: {
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "1.5rem",
            cursor: "pointer",
            display: showToggle ? "block" : "none",
        },

        navLinks: {
            listStyle: "none",
            display: isMenuOpen ? "flex" : "none",
            gap: showToggle ? "0.50rem" : "0.90rem",
            margin: 0,
            padding: showToggle ? "0.75rem 1rem" : 0,
            flexDirection: showToggle ? "column" : "row",
            position: showToggle ? "absolute" : "absolute",
            top: showToggle ? 64 : "50%",
            left: showToggle ? 0 : "50%",
            transform: showToggle
                ? "none"
                : "translateX(-50%) translateY(-50%)",
            background: showToggle ? "#071428" : "transparent",
            width: showToggle ? "100%" : "auto",
            zIndex: 1000,
        },

        link: {
            color: "#bfcbd6",
            background: "transparent",
            border: "none",
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontSize: "0.9rem",
            padding: "0.35rem 0.25rem",
            cursor: "pointer",
            borderBottom: "2px solid transparent",
        },

        linkHover: {
            color: "#ffffff",
            borderBottom: "2px solid #f7c948",
        },
    };

    return (
        <nav style={styles.navbar}>
            <div style={styles.brand}>
                SHRUTI<span style={styles.brandDot}>.Dev</span>
            </div>

            <div style={styles.rightGroup}>
                <a
                    href="/Certificates/resume.pdf"
                    download
                    style={{
                        ...styles.downloadBtn,
                        textDecoration: "none",
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <FiDownload size={14} /> Resume
                </a>

                <button
                    style={styles.navToggle}
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            <ul style={styles.navLinks}>
                {links.map((label, i) => {
                    const id = label.toLowerCase();
                    return (
                        <li key={label}>
                            <button
                                style={{
                                    ...styles.link,
                                    ...(hovered === i ? styles.linkHover : {}),
                                }}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                                onClick={() => handleNavClick(id)}
                            >
                                {label}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
