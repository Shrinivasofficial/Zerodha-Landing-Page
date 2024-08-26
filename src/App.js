import React from 'react'
import { Navbar } from './Components/Navbar';
import { Hero } from './Components/Hero';
import { Features } from './Components/Features';
import { USP } from './Components/USP';

export const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <USP></USP>
    </div>
  )
}

export default App;