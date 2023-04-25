import React, { Component } from 'react'
import Header from '../../../component/commonheader/Header'
import HeadingImage from '../../../component/HeadingImage'
import BestMobileCompany from './BestMobileApplication'
import Build from './Build'
import Footer from '../../../component/shared/Footer'
import SocialButton from '../../../component/SocialButton'
import Accordion from './Accordion'
import PageHelmet from '../../../component/shared/PageHelmet'
export default class Appdevelopment extends Component {
    render() {
        return (
            <>
                <PageHelmet 
                    // pageTitle="About Us | We Digitalize Your Dreams with Our Designing Skills"
                    // description="H&M Innovance LLP is a digital marketing firm that builds and promotes brands to turn your sites' visualizations into reality. Trust us; we are aware of the pulse of your company."
                    // keywords="About US Website Designing, Digital Agency, Digital Marketing, Internet Marketing"
                    canonical= "https://www.hminnovance.com/app-development"
                />
                {/* <PageHelmet pageTitle="H&M Innovance LLP - Best App Development in Delhi NCR" /> */}
                <Header />
                {/* <!-- web design section start --> */}
                <HeadingImage
                    image='assets/image/app_development.webp'
                    title='App Development'
                    previous='Home'
                    next='Software Development'
                />
                {/* <!-- web design section end --> */}
                <SocialButton />
                <BestMobileCompany />
                
                <Build />
                <Accordion />
                {/* <Work /> */}
                <Footer />
            </>
        )
    }
}
