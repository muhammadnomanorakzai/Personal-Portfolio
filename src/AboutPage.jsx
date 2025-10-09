import React from 'react'
import PagesHeader from './PagesHeader'
import Skills from './Skills'
import "./assets/aboutPages.css"
import AboutIntro from './AboutIntro'
import AboutDetails from './AboutDetails'
import AboutPation from './AboutPassion'

function AboutPage() {
    return (
        <>
            <PagesHeader pageTitle='About Me' />

            <div className="about-content">
                <AboutIntro />
                <AboutDetails />
                <AboutPation />
            </div>

            <Skills />
        </>
    )
}

export default AboutPage