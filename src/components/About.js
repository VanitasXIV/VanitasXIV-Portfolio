import React from 'react';
import '../styles.css';

const About = () => {
    return (
        <section className="about" id="about">
            <img src="path/to/photo.jpg" alt="About me" className="about-image" />
            <div className="about-text">
                <h2>About Me</h2>
                <p>I am a Data Science student who loves to express through code. Currently looking for job opportunities as a software developer.</p>
            </div>
        </section>
    );
};

export default About;
