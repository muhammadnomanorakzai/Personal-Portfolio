import React, { useState, useEffect } from 'react'
import "./assets/aboutPassion.css"

function AboutPassion() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.about-passion');
            if (element) {
                const top = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (top < windowHeight - 100) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on initial render

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`about-passion ${isVisible ? 'visible' : ''}`}>
            <div className="passion-container">
                <h2 className="section-title">
                    <span className="title-accent">My</span> Passion
                </h2>
                <div className="passion-content">
                    <p className="passion-text">
                        I'm deeply passionate about creating beautiful, functional websites that
                        provide exceptional user experiences. When I'm not coding, you can find me
                        contributing to open-source projects, learning new technologies, or solving
                        problems on coding platforms.
                    </p>
                    <div className="passion-decoration">
                        <div className="decoration-circle"></div>
                        <div className="decoration-line"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPassion