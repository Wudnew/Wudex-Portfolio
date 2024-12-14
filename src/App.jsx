import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Work from './components/Work'
import Review from './components/Review'
import Contact from './components/Contact'
import Footer from './components/Footer'

import 'lenis/dist/lenis.css'

import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';
import { element } from 'prop-types'

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  useGSAP(()=>{
    const elements=gsap.utils.toArray('.reveal-up');
   elements.forEach((element)=>{
    gsap.to(element, {
      ScrollTrigger:{
        trigger:element,
        start:'-200 bottom',
        end:'bottom 80%',
        scrub:true
      },
      y:0,
      opacity:1,
      duration:1,
      ease:'power2.out'
    })
   })

  })
  return (
    <ReactLenis root>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
   
    </ReactLenis>
  )
}

export default App