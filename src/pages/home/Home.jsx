import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Products from '../../components/products/Products'
import Slider from '../../components/slider/Slider'

import "./home.scss"

const Home = () => { 
  return (
    <div className='home'>
        <Navbar />
        <Slider />

        <div className="productsContainer" id='products'>
            <h1>The Best Pizza In the Town </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur harum voluptatem eum. Amet, quasi? Quibusdam, nihil! Tempore nam distinctio reprehenderit quae consectetur voluptates voluptas magnam ullam, iure velit doloremque aperiam?</p>
            <Products />
        </div>
        <Footer />

    </div>
  )
}

export default Home