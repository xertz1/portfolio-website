import '../components/Projects.css'
import stockImg from '../components/stock_market.jpg';
import portfolioImg from '../components/portfolio.png';
import sentimentImg from '../components/Sentiment-Analysis.png';
import ProjectIcon from '../components/ProjectIcon'
import objectImg from '../components/object.png'
import gameImg from '../components/game.png'
import quadraScaleImg from '../components/quadraScale.png'
import * as motion from "motion/react-client"

const projects = [
    {
        title: "Stock Price Predictor",
        image: stockImg,
        link: "https://github.com/xertz1/Stock_Price_Predictor_Website"
        
    },
    {
        title: "Portfolio Website",
        image: portfolioImg,
        link: "https://github.com/xertz1/portfolio-website"
    },
    {
        title: "Sentiment Analysis",
        image: sentimentImg,
        link: "https://github.com/xertz1/sentiment_analysis"
    },
    {
        title: "QuadraScale",
        image: quadraScaleImg,
        link: "https://github.com/xertz1/resolution_changer"
    },
    {
        title: "Tamagochi Game",
        image: gameImg,
        link: "https://github.com/xertz1/group_project_tamagochi_game/tree/main/CS2034_Group_Project_Tamagotchi_Game"
    },
    {
        title: "Object Detection",
        image: objectImg,
        link: "https://github.com/xertz1/object_detection"
    }
];

const Projects = () => {
    return (
        <section className="project-section full-height-page">
            <div className="project-wrapper">
                <div className="project-header">
                    <h1>My Projects</h1>
                    <hr className="project-section-divider"/>
                </div>

                <div className="project-grid">
                    {projects.map((proj, index) => (
                            <motion.div
                            key={index}
                            className='project-card'
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2}}
                            initial= {{opacity: 0, y: 40}}
                            animate= {{opacity: 1, y: 0}}
                            >
                                <ProjectIcon {...proj} />
                            </motion.div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;