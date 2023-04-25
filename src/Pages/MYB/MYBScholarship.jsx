import React from 'react'
import Header from '../../component/commonheader/Header';
// import PageHelmet from '../../component/shared/Pagehelmet';
import HeadingImages from '../../component/HeadingImage';
import SocialButton from '../../component/SocialButton';
import Footer from '../../component/shared/Footer';
import Registration from './RegistrationForm';
import PageHelmet from '../../component/shared/PageHelmet';

const MYBScholarship = () => {
  return (
    <>
    {/* <PageHelmet pageTitle="H&M Innovance LLP - is one of the Best IT Solution Comapny in Delhi NCR" /> */}
      <PageHelmet 
          // pageTitle="Digital Marketing and Web Designing Company in India | Contact Us" 
          // description="UG-21, First Floor, Bestech City Center Mall, Dharuhera, Haryana 123106,CONTACT US: 080594 65353"
          // keywords="Web Designing Company"
          canonical= "https://www.hminnovance.com/MYB-Scholarship"
      />
      <Header />
      <HeadingImages
          image='assets/image/slide3.webp'
          title='MYB Scholarship'
          previous='Home'
          next='Contact Us'
      />
      <SocialButton />
      <Registration />
      <Footer />

    </>
  )
}

export default MYBScholarship;