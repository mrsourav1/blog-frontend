import React, { Component } from 'react'
// import PageHelmet from '../../component/shared/Pagehelmet'
import Header from '../../component/commonheader/Header'
import SocialButton from '../../component/SocialButton'
import Section from './Section'
import Footer from '../../component/shared/Footer'
import About from './About'
// import Whyhm from './Whyhm'
import Test from './Test'
import Service from './Service'
import Sample from './Sample/Sample'
import Hmprocess from './Hmprocess'
import PageHelmet from '../../component/shared/PageHelmet'



export default class Home extends Component {
    render() {
        return (
            <>
                <PageHelmet 
                    pageTitle="Website Designing Company in Delhi NCR | Best Web Design Services company"
                    description="A team of 50 experts at h&m innovance llp is trying to become the top website design firm in Delhi NCR. Call us right away at 80594 65353 for affordable creative web design and development services."
                    keywords="Web Designing Company, Website Designing Company, Website Designing Company in Delhi, Web Designing Company in India, Website Designing Company in India, Web Designing Company in Delhi, Web Designing Agency, Web Designing Agency in India, Website Designing Agency, Website Designing Services in Delhi"
                    canonical="https://www.hminnovance.com/"
                />
                <Header />
                <Section />
                <SocialButton />
                <About />
                {/* <Whyhm /> */}
                <Service />
                <Sample />
                <Hmprocess />
                <Test />
                <Footer />
            </>
        )
    }
}
