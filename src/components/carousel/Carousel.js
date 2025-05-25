import React, { useState, useEffect, useRef } from 'react';
import carouselStyle from './carousel.module.css';

export default function Carousel ({ images, index }) {
  const [currentIndex, setCurrentIndex] = useState(index);
  const carouselRef = useRef(null);

  function goToPrevious() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1);
    }
  };

  function goToNext() {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    //setInterval(goToNext, 3000);
  });

  useEffect(() => {
    if (!carouselRef.current) return;
    carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex]);

  return (
    <div className={carouselStyle.container}>
      <button className={carouselStyle.Pcontrol} onClick={goToPrevious}>←</button>
      <div className={carouselStyle.carousel} ref={carouselRef}>
        {images.map((imageUrl, index) => (
          <div key={index} className={carouselStyle.item}>
            <img className={carouselStyle.image} src={imageUrl} alt={'text'} />
          </div>
        ))}
      </div>
      <button className={carouselStyle.Ncontrol} onClick={goToNext}>→</button>
    </div>
  );
};
