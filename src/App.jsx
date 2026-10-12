import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedSpeciality, setSelectedSpeciality] = useState('distribution');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-bangla selection:bg-red-600 selection:text-white">
      
      {/* Navbar */}
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setSelectedSpeciality={setSelectedSpeciality}
      />

      {/* Main Dynamic View */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <Home 
            setCurrentPage={setCurrentPage}
            setSelectedSpeciality={setSelectedSpeciality}
          />
        )}

        {currentPage === 'about' && (
          <About 
            setCurrentPage={setCurrentPage}
          />
        )}

        {currentPage === 'services' && (
          <Services 
            selectedSpeciality={selectedSpeciality}
            setSelectedSpeciality={setSelectedSpeciality}
            setCurrentPage={setCurrentPage}
          />
        )}

        {currentPage === 'contact' && (
          <Contact />
        )}
      </main>

      {/* Footer */}
      <Footer 
        setCurrentPage={setCurrentPage}
        setSelectedSpeciality={setSelectedSpeciality}
      />

    </div>
  );
}
