import React from 'react'
import Header from '../components/header'
import HeroSection from './components/heroSection'
import Footer from '../components/footer'
import WhoWeAre from './components/whoWeAre'

// type Props = {}

const HomePage = () => {
    return (
      <div className='bg-[#111111] min-h-screen overflow-hidden text-white'>
            <Header />
            <HeroSection /> 
            <WhoWeAre /> 
            <Footer />
        </div>
    )
}

export default HomePage