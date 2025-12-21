import React from 'react'
import Header from '../components/header'
import HeroSection from './components/heroSection'
import Footer from '../components/footer'
import WhoWeAre from './components/whoWeAre'
import ProjectList from './components/projectList'
import WhyInvest from './components/whyInvest'

// type Props = {}

const HomePage = () => {
    return (
        <div className='min-h-screen overflow-hidden bg-white'>
            <Header />
            <HeroSection />
            <WhoWeAre />
            <ProjectList />
            <WhyInvest />
            <Footer />
        </div>
    )
}

export default HomePage