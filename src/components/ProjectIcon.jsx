const ProjectIcon = ({ title, image, link}) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
            <img src={image} alt={title} className="project-image" />
            <h3 className="project-title">{title}</h3>
        </a>
    );
};

export default ProjectIcon;