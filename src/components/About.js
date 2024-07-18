import React from 'react';
import '../assets/styles.css';

const About = () => {
    return (
        <section className="about" id="about">
            <img src='src\assets\images\about\photo.jpg'></img>
            <div className="about-text">
                <h2>About Me</h2>
                <p>I am a Data Science student who loves to express through code is currently looking for job opportunities as a software developer.</p>
            </div>
        </section>
    );
};

export default About;
