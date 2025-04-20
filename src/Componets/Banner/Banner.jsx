import React, { useState, useEffect } from 'react';
import img1 from '../../assets/imagem1.jpg';
import img2 from '../../assets/imagem1.jpg';
import img3 from '../../assets/imagem1.jpg';
import './Banner.css';

const images = [img1, img2, img3];
const texts = [
  'Seja Bem-Vinda, Doutora Beatriz Vilela',
  'Transforme ideias em soluções',
  'Seu projeto, nosso compromisso',
];

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 segundos parados

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="slide"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="text-overlay">{texts[i]}</div>
          </div>
        ))}
      </div>

      <div className="indicator-buttons">
        {images.map((_, i) => (
          <button
            key={i}
            className={`indicator ${i === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
