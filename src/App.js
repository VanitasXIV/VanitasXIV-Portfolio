import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './assets/styles.css';

const App = () => {
  return (
    <div>
      
      <Header />
      <Hero />
      <About />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
