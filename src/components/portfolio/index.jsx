
import React, { useEffect, useState } from 'react';
import ProjectCard from './project-card';
import data from '../../data/projects-data.json';
import imgVoyage from '../../assets/voyage.png';

function PortfolioProjects() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Chargement des données du fichier JSON
    setCards(data);
  }, []);

  return (
    <section className="portfolio">
      <div className="space">
      </div>
      <div id="portfolio-title">
        <h2>PROJETS REALISES</h2>
        <p> dans le cadre de ma formation Openclassrooms : </p>
        
        <div className="portfolio-img">
            <img  src={imgVoyage} alt="Icone voyage" />
        </div>
      </div>

      <div className="portfolio-list">
      {cards.map((card, index) => (
          <ProjectCard 
          key={index} 
          id={card.id}
          // Ajout de PUBLIC_URL pour avoir le chemin correct de l'image projet suite deploiement gitpages
          img={`${process.env.PUBLIC_URL}${card.img}`} 
          title={card.title} 
          summary={card.summary} 
          developmentIcons={card.developmentIcons}

          />
      ))}
      </div>

    </section>
   
  );
}

export default PortfolioProjects;
