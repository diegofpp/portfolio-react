import React from 'react';
// import { motion } from 'framer-motion';
import '../src/index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skillz from './components/Skillz';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {


  return (

    <div className="App font-roboto">
        <Navbar />
        <Hero />
        <Projects />
        <Skillz />
        <Contact />
        <Footer />
    </div>


  );
}

export default App;



