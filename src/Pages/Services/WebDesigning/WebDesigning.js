import React, { Component } from 'react'
import Header from '../../../component/commonheader/Header'
import HeadingImage from '../../../component/HeadingImage'
import Content from './Content'
import Offer from './Offer'
import WhyWeDo from './WhyWeDo'
import Video from './Video'
import Footer from '../../../component/shared/Footer'
import SocialButton from '../../../component/SocialButton'
import SeveralWebDesignAccordion from './SeveralWebDesignAccordion'
import PageHelmet from '../../../component/shared/PageHelmet'
export default class WebDesigning extends Component {
    render() {
        return (
            <>
                <PageHelmet 
                    // pageTitle="About Us | We Digitalize Your Dreams with Our Designing Skills"
                    // description="H&M Innovance LLP is a digital marketing firm that builds and promotes brands to turn your sites' visualizations into reality. Trust us; we are aware of the pulse of your company."
                    // keywords="About US Website Designing, Digital Agency, Digital Marketing, Internet Marketing"
                    canonical= "https://www.hminnovance.com/web-designing"
                />
                <Header />
                {/* <!-- web design section start --> */}
                <HeadingImage
                    image='assets/image/webDesign.webp'
                    title='Web Design'
                    previous='Home'
                    next='Web Development'
                />
                {/* <!-- web design section end --> */}
                <Content />
                <SeveralWebDesignAccordion />
                <SocialButton />
                <Offer />
                <WhyWeDo />
                <Video />
                <Footer /> 
            </>
        )
    }
}
