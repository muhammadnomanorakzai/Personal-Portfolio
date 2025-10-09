import React from 'react'
import './assets/experienceCard.css'
import PrimaryBtn from './PrimaryBtn';

function ExperienceCard(props) {
  const cards = document.querySelectorAll('.card')

  window.addEventListener('scroll', checkCards)

  checkCards()
  function checkCards() {
    const triggerButton = (window.innerHeight / 5) * 4

    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top
      if (cardTop < triggerButton) {
        card.classList.add('show')
      }
      else {
        card.classList.remove('show')
      }
    })
  }
  return (
    <div className="card experienceCard">
      <h4><span>0</span> 2025 - Present</h4>
      <h3>Frontend Developer</h3>
      <p>
        Business consulting consultants provide expert advice and guide
        businesses to help them improve their performance efficiency.
      </p>
    </div>
  );
}

export default ExperienceCard