import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { Home } from './component/Home';
import Footer from './component/Footer';
import SellerNav from './component/SellerHeader';
import SellerPage from './component/SellerPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Navbar />
      <div className='flex flex-col gap-40 bg-white xs:gap-20'>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Sellertools" element={<>
            <SellerNav />
            <SellerPage />
          </>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



