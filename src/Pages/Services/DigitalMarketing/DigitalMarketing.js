import React, { Component } from 'react'
import Header from '../../../component/commonheader/Header'
import HeadingImage from '../../../component/HeadingImage'
import BestDigital from './BestDegital'
import DigitalServices from './DigitalServices'
import WhyChoose from './WhyChoose'
import Footer from '../../../component/shared/Footer'
import SocialButton from '../../../component/SocialButton'
import PageHelmet from '../../../component/shared/PageHelmet'
export default class DigitalMarketing extends Component {
    render() {
        return (
            <>
                <PageHelmet 
                    // pageTitle="About Us | We Digitalize Your Dreams with Our Designing Skills"
                    // description="H&M Innovance LLP is a digital marketing firm that builds and promotes brands to turn your sites' visualizations into reality. Trust us; we are aware of the pulse of your company."
                    // keywords="About US Website Designing, Digital Agency, Digital Marketing, Internet Marketing"
                    canonical= "https://www.hminnovance.com/digital-marketing"
                />
                <Header />
                {/* <!-- web design section start --> */}
                <HeadingImage
                    image='assets/image/dgtm.png'
                    title='Digital Marketing'
                    previous='Home'
                    next='Automated System'
                />
                {/* <!-- web design section end --> */}
                <SocialButton />
                <BestDigital />
                <DigitalServices />
                {/* <DigitalAgency /> */}
                <WhyChoose />
                <Footer />
            </>
        )
    }
}
