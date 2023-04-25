import React, { Component } from 'react'
import Header from '../../../component/commonheader/Header'
import HeadingImage from '../../../component/HeadingImage'
import AnalysisService from './AnalysisService'
import Benefit from './Benefit'
import Footer from '../../../component/shared/Footer'
import SocialButton from '../../../component/SocialButton'
import PageHelmet from '../../../component/shared/PageHelmet'
export default class BusinessAnalysis extends Component {
    render() {
        return (
            <>
                <PageHelmet 
                    // pageTitle="About Us | We Digitalize Your Dreams with Our Designing Skills"
                    // description="H&M Innovance LLP is a digital marketing firm that builds and promotes brands to turn your sites' visualizations into reality. Trust us; we are aware of the pulse of your company."
                    // keywords="About US Website Designing, Digital Agency, Digital Marketing, Internet Marketing"
                    canonical= "https://www.hminnovance.com/business-analysis"
                />
                <Header />
                {/* <!-- web design section start --> */}
                <HeadingImage
                    image='assets/image/business.png'
                    title='Business Analysis'
                    previous='Home'
                    next='Social Media Marketing'
                />
                {/* <!-- web design section end --> */}
                <SocialButton />
                <AnalysisService />
                <Benefit />
                <Footer />
            </>
        )
    }
}
