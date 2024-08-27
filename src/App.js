import React from 'react'
import { Navbar } from './Components/Navbar';
import { Hero } from './Components/Hero';
import { Features } from './Components/Features';
import { USP } from './Components/USP';
import { CTA } from './Components/CTA';
import { Footer } from './Components/Footer';

export const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <USP></USP>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  )
}

export default App;