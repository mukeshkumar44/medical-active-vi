import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import LeadingMedicine from './components/LeadingMedicine';
import OurActivity from './components/OurActivity';
import DoctorSpecialties from './components/DoctorSpecialties';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Partners />
        <LeadingMedicine />
        <OurActivity />
        <DoctorSpecialties />
        <Testimonials />
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;