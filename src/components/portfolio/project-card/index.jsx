import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconsContainer from '../icons-container';

function ProjectCards({ id, img, title, summary, developmentIcons }) {
  const [isVisible, setIsVisible] = useState(false); // État pour savoir si l'élément est visible

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Quand la carte devient visible, activation de  l'animation
            observer.unobserve(entry.target); // Arrêt de l'observation de  l'élément
          }
        });
      },
      {
        threshold: 0.5, // L'élément doit être à 50% visible pour déclencher l'animation
      }
    );

    const card = document.querySelector('.card');
    if (card) {
      observer.observe(card); // début de l'observation de l'élément
    }

    return () => {
      if (card) {
        observer.unobserve(card); // Nettoyage de l'observateur à la destruction du composant
      }
    };
  }, []);

  return (
    <article className={`card ${isVisible ? 'active' : ''}`}>
      <div className="card__img">
        {/* Ajout du lien autour de l'image */}
        <Link to={`/project/${id}`}>
          <img src={img} alt={title} />
          <div className="overlay">
          <IconsContainer developmentIcons={developmentIcons} />
            
        
          </div>
        </Link>
      </div>

      <div className="card__text">
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </article>
  );
}

ProjectCards.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  developmentIcons: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCards;

