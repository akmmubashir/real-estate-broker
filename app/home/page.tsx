import React from 'react'
import Header from '../components/header'
import HeroSection from './components/heroSection'
import Footer from '../components/footer'
import WhoWeAre from './components/whoWeAre'
import ProjectList from './components/projectList'
import WhyInvest from './components/whyInvest'
import Gallery from './components/gallery'
import PropertiesExpertise from './components/propertiesExpertise'
import WhyInvestDubai from './components/whyInvestDubai'
import DownloadBrochure from './components/downloadBrochure'

// type Props = {}

const HomePage = () => {
    return (
        <div className='min-h-screen overflow-hidden bg-white'>
            <Header />
            <HeroSection />
            <WhoWeAre />
            <PropertiesExpertise />
            <ProjectList />
            <WhyInvest />
            <Gallery />
            <WhyInvestDubai />
            <DownloadBrochure />
            <Footer />
        </div>
    )
}

export default HomePage