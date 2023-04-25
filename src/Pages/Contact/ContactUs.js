import React, { Component } from 'react'
// import PageHelmet from '../../component/shared/Pagehelmet'
import Header from '../../component/commonheader/Header'
// import ContactUs from './ContactSection'
import HeadingImage from '../../component/HeadingImage'
import Adress from './Adress'
import Footer from '../../component/shared/Footer'
import Map from './Map'
import SocialButton from '../../component/SocialButton'
import ContactSection from './ContactSection'
import PageHelmet from '../../component/shared/PageHelmet'

export default class ContactUs extends Component {
    render() {
        return (
            <>
                <PageHelmet 
                    pageTitle="Digital Marketing and Web Designing Company in India | Contact Us" 
                    description="UG-21, First Floor, Bestech City Center Mall, Dharuhera, Haryana 123106,CONTACT US: 080594 65353"
                    keywords="Web Designing Company"
                    canonical= "https://www.hminnovance.com/contactUs"
                />
                <Header />
                {/* <!-- about section start --> */}
                <HeadingImage
                    image='assets/image/contactus/contactus.webp'
                    title='Contact Us'
                    previous='Home'
                    next='About'
                />
                {/* <!-- about section end --> */}
                {/* <!-- social buttons start --> */}
                <SocialButton />
                {/* <!-- about text start --> */}
                <ContactSection />
                <Adress />
                <Map />
                <Footer />
            </>
        )
    }
}
