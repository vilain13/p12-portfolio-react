
import React, { useEffect } from 'react';
import imgHero from '../../assets/matrix-1735640_1280.webp';

function Hero() {
  // Ajout de l'effet de parallaxe avec useEffect
  useEffect(() => {
    const handleScroll = () => {
      const overlay = document.querySelector('.hero-overlay');
      if (overlay) {
        const scrollPosition = window.scrollY;
        overlay.style.transform = `translateY( ${scrollPosition * 0.25}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero">
      <img className="hero-img" src={imgHero} alt="hero Matrix" />
      <div className="hero-overlay">
        <h1>GUILLERMIN GILL<br />Développeur Intégrateur Web</h1>
        <button
          className="hero-button"
          onClick={() => window.location.href='mailto:guillerg680@gmail.com'}
        >
          CONTACTEZ MOI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
        </button>
      </div>
    </section>
  );
}

export default Hero;
