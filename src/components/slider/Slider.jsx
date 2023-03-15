import "./slider.scss";
import React, { useRef, useState } from "react";
import Slider from 'infinite-react-carousel';



export default function Slide() {
    return (
        <div className="slider" >
           <div className="sliderWrapper">
                <Slider className="slide" arrowsScroll={1} autoplaySpeed={3000} autoplay={true} slidesToShow={1} centerMode={true}>
                    <div className="sliderItem">
                        <div className="slideContent">
                            <h1>Pizza</h1>
                            <p>50% OFF</p>
                            <a href="#">Order Now</a>
                            <span>kawsar</span>
                        </div>
                        <img src="/imgs/p1.png" alt="" />
                    </div>
                    <div className="sliderItem">
                        <div className="slideContent">
                            <h1>Pizza</h1>
                            <p>50% OFF</p>
                            <a href="#">Order Now</a>
                            <span>kawsar</span>
                        </div>
                        <img src="/imgs/p3.png" alt="" />
                    </div>
                    <div className="sliderItem">
                        <div className="slideContent">
                            <h1>Pizza</h1>
                            <p>50% OFF</p>
                            <a href="#">Order Now</a>
                            <span>kawsar</span>
                        </div>
                        <img src="/imgs/p4.png" alt="" />
                    </div>
                </Slider> 
           </div>
        </div>
    );
}