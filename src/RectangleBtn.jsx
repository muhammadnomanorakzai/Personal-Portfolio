import React from 'react';
import './assets/rectangleBtn.css';

function RectangleBtn({ content, width, upwork }) {
  return (
    <button className="portfolio-btn" style={{ '--btn-text': `"${content}"`, width: width}}>
      <a className='btn-text' href={upwork} target='_blank'>{content}</a>
    </button>
  );
}

export default RectangleBtn;
