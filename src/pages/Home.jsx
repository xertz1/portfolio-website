import * as motion from "motion/react-client"
import '../components/Home.css';
import leGoat from '../components/le_goat.png';
import { SiJavascript, SiPython, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiGit } from "react-icons/si"
import { DiJava } from "react-icons/di"

const Home = () => {
    return (
        <section className="about-section">
            <div className="about-wrapper">
        
            <div className="image-wrapper">
                <motion.img
                src={leGoat}
                alt="profile"
                className="profile"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                />
            </div>
        
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              }}>
                <div className="text-wrapper">
                    <h1 className="intro-text">Welcome to my Portfolio Website 👋</h1>
                    <p>Hi I'm Kishore, a Computer Science student at Western University. I am passionate about full-stack development and AI.</p>
                    <hr className="section-divider" />
                        
                    <div className="skills-section">
                        <h2>Technical Skills</h2>
                        <div className="skills-grid">
                            <div className="skill">
                                <div className="circle-skill-icon"><SiJavascript className="skill-icon" /></div>
                            </div>
                            <div className="skill">
                                <div className="circle-skill-icon"><SiPython className="skill-icon" /></div>
                            </div>
                            <div className="skill">
                                <div className="circle-skill-icon"><SiReact className="skill-icon" /></div>
                            </div>
                            <div className="skill">
                                <div className="circle-skill-icon"><SiNodedotjs className="skill-icon" /></div>
                            </div>
                            <div className="skill">
                                <div className="circle-skill-icon"><SiHtml5 className="skill-icon" /></div>

                            </div>
                            <div className="skill">
                                <div className="circle-skill-icon"><SiCss3 className="skill-icon" /></div>
                            </div>
                            <div className="skill">
                                <div className="circle-skill-icon"><DiJava className="skill-icon" /></div>
                            </div>
                            <div className="skill">
                                <div className="circle-skill-icon"><SiGit className="skill-icon" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        
            </div>
        </section>
      
    );
}

export default Home;