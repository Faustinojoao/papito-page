import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './compunent/NavBar';
import JobsPage from './compunent/JobsPage';
import VidioPage from './compunent/VidioPage';
import Nav from './compunent/Nav';
import Footer from './compunent/Footer';


function App() {


  return (
    <>
        <Nav/>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/all-jobs" element={<JobsPage />} />
          <Route path="/videos-page" element={<VidioPage />} />
        </Routes>
        <Footer/>
   
    </>
  );
}

export default App;
