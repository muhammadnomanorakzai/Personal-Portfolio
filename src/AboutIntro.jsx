import React, { useRef, useState } from 'react';
import "./assets/aboutIntro.css";

function AboutIntro() {
    const containerRef = useRef(null);
    const [borderState, setBorderState] = useState({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    });

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate distance from each edge (0 to 1)
        const topDist = y / rect.height;
        const rightDist = (rect.width - x) / rect.width;
        const bottomDist = (rect.height - y) / rect.height;
        const leftDist = x / rect.width;

        // Only show border when cursor is near that specific edge
        setBorderState({
            top: Math.max(0, 1 - topDist * 4),  // Multiplier makes it appear closer to edge
            right: Math.max(0, 1 - rightDist * 4),
            bottom: Math.max(0, 1 - bottomDist * 4),
            left: Math.max(0, 1 - leftDist * 4)
        });
    };

    const handleMouseLeave = () => {
        setBorderState({
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        });
    };

    return (
        <div
            ref={containerRef}
            className="about-intro"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Gradient border elements */}
            <div
                className="border-gradient top"
                style={{ opacity: borderState.top }}
            />
            <div
                className="border-gradient right"
                style={{ opacity: borderState.right }}
            />
            <div
                className="border-gradient bottom"
                style={{ opacity: borderState.bottom }}
            />
            <div
                className="border-gradient left"
                style={{ opacity: borderState.left }}
            />

            <div className="content-wrapper">
                <div className="intro-header">
                    <h2 className="section-title">
                        <span className="title-accent">Who</span> I Am
                    </h2>
                </div>
                <ul className="intro-list">
                    <li>Passionate <span className="text-highlight">JavaScript Engineer</span> skilled in modern web development.</li>
                    <li>Expertise in <span className="skill-tag">HTML</span>, <span className="skill-tag">CSS</span>, <span className="skill-tag">JavaScript</span>, and <span className="skill-tag">React.js</span>.</li>
                    <li>Specialize in building <span className="text-highlight">responsive, user-friendly interfaces</span> with great performance.</li>
                    <li>Focused on writing <span className="text-highlight">clean, maintainable, and efficient code</span>.</li>
                    <li>Committed to continuous learning and applying best practices in web development.</li>
                </ul>
            </div>
        </div>
    );
}

export default AboutIntro;