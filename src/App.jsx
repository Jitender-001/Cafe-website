import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Rout from './components/Routes';

const App = () =>{

  useEffect(()=>{
    AOS.init({
      offset : 100,
      duration : 700,
      easing : 'ease-in',
      delay : 100,
    });
  });

  return(
    <>
      <BrowserRouter>
        <Navbar />
        <Rout />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;