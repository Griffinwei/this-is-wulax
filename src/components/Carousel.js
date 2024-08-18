import React, { useState } from 'react';
import './Carousel.css'; // Import the CSS for styling
import img1 from '../griffinwebsite.JPG';
import img2 from '../magronewebsite.JPG';
import img3 from '../robwebsite.JPG';
import img4 from '../parkerwebsite.JPG';
import img5 from '../grantwebsite.JPG';
import img6 from '../lancewebsite.JPG';


// Sample array of staff photos and captions
const staffPhotos = [
  { src: img1, caption: 'Griffin Wei - President' },
  { src: img2, caption: 'Will Magrone - Vice President' },
  { src: img3, caption: 'Rob Fuller - Treasurer' },
  { src: img4, caption: 'Parker Robinson - Treasurer' },
  { src: img5, caption: 'Grant Schwartz - Social Chair' },
  { src: img6, caption: 'Lance Berryman - Social Chair' },

  // Add more photos and captions as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next photo
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % staffPhotos.length);
  };

  // Function to go to the previous photo
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? staffPhotos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="left-arrow" onClick={goToPrevious}>❮</button>
      <div className="carousel-content">
        <img src={staffPhotos[currentIndex].src} alt="Staff" />
        <p>{staffPhotos[currentIndex].caption}</p>
      </div>
      <button className="right-arrow" onClick={goToNext}>❯</button>
    </div>
  );
};

export default Carousel;
