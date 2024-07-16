import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import 'Router' instead of 'BrowserRouter'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>  {/* Use 'Router' here */}
      <div>
        <Header />
        <Routes>  {/* Use 'Routes' instead of wrapping individual 'Route' components directly */}
          <Route path="/" element={<Home />} />  {/* Use 'element' prop to specify the component */}
          <Route path="/about" element={<About />} />  {/* Use 'element' prop to specify the component */}
          <Route path="/contact" element={<Contact />} />  {/* Use 'element' prop to specify the component */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
