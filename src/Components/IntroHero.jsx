import { useTypewriter, Cursor } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import useResponsive from "../hooks/useResponsive";
import { useEffect } from "react";

export default function IntroHero({ onDone }) {
    const { isMobile } = useResponsive();

    const [text, helper] = useTypewriter({
        words: [
            "Hi, I’m Shruti Narware",
            "React.js Developer",
            "I build modern web experiences",
        ],
        loop: 1,
        typeSpeed: 50,
        deleteSpeed: 30,
        delaySpeed: 1200,
    });

    useEffect(() => {
        if (helper.isDone && typeof onDone === "function") {
            const t = setTimeout(onDone, 600);
            return () => clearTimeout(t);
        }
    }, [helper.isDone, onDone]);

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                background: "#070c18",
                overflow: "hidden",
            }}
        >
            <Particles
                options={{
                    particles: {
                        number: { value: 40 },
                        color: { value: "#61dafb" },
                        links: { enable: true, color: "#61dafb", opacity: 0.25 },
                        move: { enable: true, speed: 1 },
                    },
                }}
            />

            {/* 🔥 MAIN CONTENT */}
            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: isMobile ? "0.4rem" : "4rem",
                    padding: isMobile ? "1.5rem" : "3rem",
                    textAlign: isMobile ? "center" : "left",
                }}
            >
                {/* 🔷 REACT LOGO */}
                <svg
                    viewBox="0 0 841.9 595.3"
                    width={isMobile ? 200 : 280}
                    height={isMobile ? 200 : 280}
                    style={{
                        animation: "spin 14s linear infinite",
                        filter: "drop-shadow(0 0 28px rgba(97,218,251,0.45))",
                    }}
                >
                    <g fill="none" stroke="#61DAFB" strokeWidth="22">
                        <ellipse rx="165" ry="64" cx="420.9" cy="296.5" />
                        <ellipse
                            rx="165"
                            ry="64"
                            cx="420.9"
                            cy="296.5"
                            transform="rotate(60 420.9 296.5)"
                        />
                        <ellipse
                            rx="165"
                            ry="64"
                            cx="420.9"
                            cy="296.5"
                            transform="rotate(120 420.9 296.5)"
                        />
                    </g>
                    <circle
                        cx="420.9"
                        cy="296.5"
                        r="34"
                        fill="#61DAFB"
                        style={{ animation: "pulse 2.2s ease-in-out infinite" }}
                    />
                </svg>

                {/* 🔤 TEXT (LOGO KE BILKUL NICHE ON MOBILE) */}
                <div style={{
                    minWidth: isMobile ? "260px" : "520px",   // 🔥 width reserve
                    textAlign: isMobile ? "center" : "left",
                    marginTop: isMobile ? "-0.4rem" : "0",
                }}>
                    <h1
                        style={{
                            color: "#fff",
                            fontSize: isMobile ? "1.4rem" : "3rem",
                            fontWeight: 800,
                            lineHeight: 1.25,
                            margin: 0,
                            minHeight: isMobile ? "2.2em" : "1.5em", // 🔥 vertical lock
                            whiteSpace: isMobile ? "normal" : "nowrap",
                        }}
                    >
                        {text}
                        <span style={{
                            display: "inline-block",
                            width: "10px",
                            verticalAlign: "baseline",
                        }}>
                            <Cursor />
                        </span>

                    </h1>

                    <p
                        style={{
                            color: "#f7c948",
                            marginTop: isMobile ? "0.2rem" : "0.4rem",
                            fontSize: isMobile ? "0.85rem" : "1.1rem",
                            letterSpacing: "0.08em",
                            minHeight: "1.4em",
                        }}
                    >
                        Frontend • React • UI
                    </p>
                </div>
            </div>

            {/* 🔥 Animations */}
            <style>
                {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0% { r: 30; opacity: 0.6; }
            50% { r: 36; opacity: 1; }
            100% { r: 30; opacity: 0.6; }
          }
        `}
            </style>
        </div>
    );
}
