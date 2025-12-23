"use client"

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
import BlogSection from './components/blogSection'
import ContactModal from './components/contactModal'
import { EnquiryProvider } from '../components/enquiryContext'

// type Props = {}

const HomePage = () => {
    return (
        <EnquiryProvider>
            <div className='min-h-screen overflow-hidden bg-white'>
                <Header />
                <HeroSection />
                <WhoWeAre />
                <ProjectList />
                <WhyInvest />
                <Gallery />
                <WhyInvestDubai />
                <PropertiesExpertise />
                <DownloadBrochure />
                <BlogSection />
                <Footer />
                <ContactModal />
            </div>
        </EnquiryProvider>
    )
}

export default HomePage