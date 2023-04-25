import React from 'react'
import Header from '../../component/commonheader/Header'
import HeadingImages from '../../component/HeadingImage'
import Footer from '../../component/shared/Footer'
import BlogBody from './BlogBody'
import PageHelmet from '../../component/shared/PageHelmet'

const Blogs = () => {
  return (
    <>
      <PageHelmet 
          pageTitle="Blogs"
          // description="H&M Innovance LLP is a digital marketing firm that builds and promotes brands to turn your sites' visualizations into reality. Trust us; we are aware of the pulse of your company."
          // keywords="About US Website Designing, Digital Agency, Digital Marketing, Internet Marketing"
          canonical= "https://www.hminnovance.com/blogs"
      />
      <Header />
      <HeadingImages
          image='/assets/image/blogImage.jpg'
          title='Blogs'
          previous='Home'
          next='About'
      />
      <BlogBody />
      <Footer />
    </>
  )
}

export default Blogs