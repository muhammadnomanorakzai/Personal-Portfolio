import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './SideBar';
import AsteroidsEffect from './AsteroidsEffect.jsx';
import ShadowFollowCursor from './ShadowFollowCursor.jsx';
import Footer from './Footer.jsx';
import HomePage from './HomePage.jsx';
import AboutPage from './AboutPage.jsx';
import ProjectsPage from './ProjectsPage.jsx';

function App() {
  return (
    <Router>
      <Sidebar />
      <main className='mainContainer'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </main>
      <AsteroidsEffect />
      <ShadowFollowCursor />
    </Router>
  );
}

export default App;
