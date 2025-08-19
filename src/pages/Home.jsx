import React from 'react'
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import Services from '../components/Home/Services';
import Statistics from '../components/Home/Statistics';
import Partners from '../components/Home/Partners';
import CallToAction from '../components/Home/CallToAction';
function Home() {


  return (
    <div>
      <Hero/>
      <Features/>
      <Services/>
      <Statistics/>
      <Partners/>
      <CallToAction/>

    </div>
  )
}

export default Home
