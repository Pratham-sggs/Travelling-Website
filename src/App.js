import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import VideoPlayerPage from './components/VideoPlayerPage'; 

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/products' exact element={<Products />} />
          <Route path='/sign-up' exact element={<SignUp />} />
          <Route path='/video' exact element={<VideoPlayerPage videoSrc="./Video1.mp4" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

