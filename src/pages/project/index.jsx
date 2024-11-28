import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../../data/projects-data.json';
import imgGithub from '../../assets/icons8-github.png';

const Project = () => {
    const { id } = useParams(); // Récupération de l'id depuis l'URL
    const navigate = useNavigate(); // Hook pour naviguer vers une autre page
    const project = projectsData.find((project) => project.id === id); // Recherche du projet correspondant via l'id

    useEffect(() => {
        if (!project) {
            // Si le projet n'existe pas, redirection vers la page 404
            navigate('/404', { replace: true }); // `replace: true` évite d'empiler la redirection dans l'historique
        } else {
            // Défilement vers le haut lorsque le composant est monté
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [project, navigate]); // Exécute l'effet si `project` ou `navigate` change

    if (!project) {
        // Pendant que la redirection s'effectue, ne rien afficher
        return null;
    }

    return (
        <main>
            <section className="project">
                <div className="project-img">
                    {project.img && (
                        <img src={project.img} alt={`Illustration de ${project.title}`} />
                    )}
                </div>

                <h2>{project.title}</h2>

                {project.github && (
                    <a
                        className="project-button"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    
                    <img  src={imgGithub} alt="Icone Github" />
                
                        Voir code GitHub
                    </a>
                )}

                <h3>Contexte du projet</h3>
                <p>{project.context}</p>

                <h3>Compétences acquises</h3>
                <div className="project-competences">
                    {project.competences &&
                        project.competences.map((competence, index) => (
                            <p key={index}>{competence}</p>
                        ))}
                </div>
            </section>
        </main>
    );
};

export default Project;
