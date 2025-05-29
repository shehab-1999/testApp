import React from 'react'
import HeroSection from './herosection'

import WhatWeCreate from '../WhatWeCreate'
import Footer from '../footer'
import VisionSection from './VisionSection'
import ProjectSlider from './Projects'

export default function HomePage() {
  return (
    <>

    <HeroSection/>
    <VisionSection/>
    <WhatWeCreate/>
    <ProjectSlider/>
    <Footer/>
    </>
  )
}
