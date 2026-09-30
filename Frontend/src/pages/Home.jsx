import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HowItWorks/>
      <Features/>
    </div>
  )
}

export default Home