import React, { Component } from 'react'
import Header from '../../../component/commonheader/Header'
import HeadingImage from '../../../component/HeadingImage'
import BestSoftware from './BestSoftware'
import Provide from './Provide'
import DevelopmentServices from './DevelopmentServices'
import Footer from '../../../component/shared/Footer'
import SocialButton from '../../../component/SocialButton'
import PageHelmet from '../../../component/shared/PageHelmet'
export default class SoftwareDevlopement extends Component {
    render() {
        return (
            <>
                <PageHelmet 
                    // pageTitle="About Us | We Digitalize Your Dreams with Our Designing Skills"
                    // description="H&M Innovance LLP is a digital marketing firm that builds and promotes brands to turn your sites' visualizations into reality. Trust us; we are aware of the pulse of your company."
                    // keywords="About US Website Designing, Digital Agency, Digital Marketing, Internet Marketing"
                    canonical= "https://www.hminnovance.com/software-development"
                />
                <Header />
                {/* <!-- web design section start --> */}
                <HeadingImage
                    image='assets/image/software.png'
                    title='Software Development'
                    previous='Home'
                    next='Digital Marketing'
                />
                {/* <!-- web design section end --> */}
                <SocialButton />
                <BestSoftware />
                <Provide />
                <DevelopmentServices />
                <Footer />
            </>
        )
    }
}
