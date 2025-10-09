import React from 'react'
import HoverEffectCard from './HoverEffectCard'

function Features() {
    const paragraphs = [
        {
            describe: 'Websites I design contain Intuitive navigation, clear typography, consistent design, error prevention and feedback mechanisms.'
        },
        {
            describe: 'Mobile firendly, tablet friendly, desktop friendly, flexible layouts are the common features of my websites.'
        },
        {
            describe: 'I also focus on features like fast loading speed, caching, manification and regular updates.'
        },
        {
            describe: 'I focus on screen reader campatibility, high contrast mode, keyboard navigation, closed caption and accessbile form.'
        },
    ]

    return (
        <section id='features'>
            <div className="card-container">
                <HoverEffectCard number='01:' animations='animate__fadeInUp animate__slower' head='User Experience' description={paragraphs[0].describe}/>
                <HoverEffectCard number='02:' animations='animate__fadeInUp animate__slower' head='Responsive Design' description={paragraphs[1].describe}/>
                <HoverEffectCard number='03:' animations='animate__fadeInUp animate__slower' head='Performance' description={paragraphs[2].describe}/>
                <HoverEffectCard number='04:' animations='animate__fadeInUp animate__slower' head='Accessibility' description={paragraphs[3].describe}/>
            </div>
        </section>
    )
}

export default Features