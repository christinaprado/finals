import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Goals from './components/Goals';
import ITExperience from './components/ITExperience';
import PhotoGallery from './components/PhotoGallery';
import Feedback from './components/Feedback';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', label: 'About Me', component: <AboutMe /> },
    { id: 'education', label: 'Education', component: <Education /> },
    { id: 'hobbies', label: 'Hobbies', component: <Hobbies /> },
    { id: 'goals', label: 'Goals', component: <Goals /> },
    { id: 'experience', label: 'IT Experience', component: <ITExperience /> },
    { id: 'gallery', label: 'Photo Gallery', component: <PhotoGallery /> },
    { id: 'feedback', label: 'Feedback', component: <Feedback /> }
  ];

  // Add scroll listener to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Get all section elements
      const sectionElements = sections.map(section => {
        const element = document.getElementById(section.id);
        if (element) {
          // Get the position and height of each section
          const rect = element.getBoundingClientRect();
          return {
            id: section.id,
            top: rect.top + scrollPosition,
            bottom: rect.bottom + scrollPosition
          };
        }
        return null;
      }).filter(Boolean);
      
      // Find the section that is currently in view
      if (sectionElements.length > 0) {
        const viewportHeight = window.innerHeight;
        const currentSection = sectionElements.find(section => {
          const sectionMiddle = section.top + (section.bottom - section.top) / 2;
          return scrollPosition <= sectionMiddle && sectionMiddle <= scrollPosition + viewportHeight;
        }) || sectionElements[0];
        
        setActiveSection(currentSection.id);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <Layout>
      <Navigation 
        sections={sections} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      <main className="main-content">
        {sections.map(section => (
          <section 
            key={section.id} 
            id={section.id} 
            className={`section ${activeSection === section.id ? 'active' : ''}`}
          >
            {section.component}
          </section>
        ))}
      </main>
    </Layout>
  );
}

export default App; 