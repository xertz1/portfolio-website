import '../components/Contact.css'
import * as motion from "motion/react-client"

const Contact = () => {
    return (
        <section className="contact-section">
            <motion.div 
            className="form-section"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1],
            }}
            >

                <form className="contact-form" action="https://formspree.io/f/xrbqwjog" method="POST">
                    <h2>Send Me a Message</h2>

                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" required />

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" required/>

                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" required />

                    <label htmlFor="message">Message</label>
                    <input type="text" name="message" id="message" required />

                    <button type="submit">Submit</button>

                </form>
            </motion.div>
        </section>
    );
};

export default Contact;