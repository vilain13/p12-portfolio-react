import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';  // pour gérer les liens vers les ancrages id sur page home à partir du header quelquesoit la page sur laquelle on se trouve //
import { useState, useEffect } from 'react'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Fonction pour gérer la taille de l'écran  puis passage du menu navigation en colonne au menu navigation  en ligne 
    const handleResize = () => {
    if (window.innerWidth > 1024) {
        // Fermer le menu quand l'écran est plus large que 1024px
        setIsMenuOpen(false);
    }
};

    // Ajouter un écouteur d'événements pour la redimension
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        
        // Nettoyer l'écouteur quand le composant est démonté
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="header">
            <div className="header__logo">
                <Link className="header__logo__link" to="/">Guillergweb-dev</Link>
            </div>
            <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ''}`}>
                <ul className="header__nav__list">
                    <li className="header__nav__list__item">
                        <Link className="header__nav__list__item__link" to="/">Accueil</Link>
                    </li>
                    <li className="header__nav__list__item">
                        <HashLink className="header__nav__list__item__link" to="/#introducing">Qui suis je ?</HashLink>

                    </li>
                    <li className="header__nav__list__item">
                        <HashLink className="header__nav__list__item__link" to="/#competences-title">Compétences</HashLink>
                    </li>
                    <li className="header__nav__list__item">
                        <HashLink className="header__nav__list__item__link" to="/#portfolio-title">Projets</HashLink>
                    </li>
                    <li className="header__nav__list__item" id="nav-contact">
                        <a href="mailto:guillerg680@gmail.com">Contact</a>
                    </li>   
                </ul>
            </nav>
            <div className={`header__burger ${isMenuOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
                <div className="header__burger__line"></div>
                <div className="header__burger__line"></div>
                <div className="header__burger__line"></div>
            </div>
        </header>
    );
}

export default Header;



