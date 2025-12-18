import React from 'react'
import Header from '../components/header'
import HeroSection from './components/heroSection'
import Footer from '../components/footer'

// type Props = {}

const HomePage = () => {
    return (
      <div className='bg-white min-h-screen overflow-hidden'>
            <Header />
            <HeroSection /> 
            <Footer />
        </div>
    )
}

export default HomePage