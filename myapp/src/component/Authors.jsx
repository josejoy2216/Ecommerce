import React, { useState, useEffect } from 'react';
import './assets/css/bgtxt.css'; // Ensure the correct path to your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SmallCard from './SmallCard';

const Authors = () => {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch data from backend
    fetch("http://localhost:5000/all-author")
      .then(response => response.json())
      .then(data => {
        console.log('Fetched Data:', data);
        setCards(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
    
  const handleNext = () => {
    if (currentIndex + 3 < cards.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };
    
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };
    
  const displayedCards = cards.slice(currentIndex, currentIndex + 3);
  console.log('Displayed Cards:', displayedCards);
    
  return (
    <div className="container cardcss">
      <div className="row">
        <div className="col-md-6 mt-4">
          <h1>Authors</h1>
        </div>
      </div>
      <div className="card-containerA">
        <FontAwesomeIcon 
          icon={faArrowLeft} 
          onClick={handlePrev} 
          className={`arrow ${currentIndex === 0 ? 'disabled' : ''}`} 
        />
        <div className="cards">
          {displayedCards.map((card, index) => (
            <SmallCard key={index} card={card} />
          ))}
        </div>
        <FontAwesomeIcon 
          icon={faArrowRight} 
          onClick={handleNext} 
          className={`arrow ${currentIndex + 3 >= cards.length ? 'disabled' : ''}`} 
        />
      </div>
    </div>
  );
}

export default Authors;
