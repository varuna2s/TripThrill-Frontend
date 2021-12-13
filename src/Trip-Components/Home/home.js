import React from 'react'
import Main from '../../Images/main.jpg';
import './home.css';
import Carousel1 from './textscroll';
// import Navbar from "./Navbar"
// import "animate.css/animate.min.css";
// import ScrollAnimation from 'react-animate-on-scroll';
import FeaturedCities from "../Featured-Cities/index"
// import Footer from "./Footer";
// import TestiMonial from './Testimonial/index';
// import FeaturedProperties from "../Featured-properties/index";
// import SearchBox from "./searchdummy";
// import Explore from "../Explore";

function MainPage() {
    return (
        <>
            {/* <Navbar /> */}
            <div className="home-container">
                <img className="main-img" src={Main} alt='main' />
                {/* <SearchBox /> */}
                <div className="centered">
                    <Carousel1 />
                </div>
            </div>
            <div className="First-Text-Container">
                    <div className="head">Featured Cities & Areas</div>
                    <div className="text1">Skip the cookie-cutter hotel stays for the charm and warmth of our luxury holiday homes and personalized experiences. With over 500+ homes in 50+ destinations, invite you to experience the authenticity of India without compromising on hospitality.</div>
                </div>
            {/* <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                <div className="First-Text-Container">
                    <div className="head">Featured Cities & Areas</div>
                    <div className="text1">Skip the cookie-cutter hotel stays for the charm and warmth of our luxury holiday homes and personalized experiences. With over 500+ homes in 50+ destinations, invite you to experience the authenticity of India without compromising on hospitality.</div>
                </div>
            </ScrollAnimation> */}
                <FeaturedCities />
                {/* <FeaturedProperties /> */}
                {/* <Explore /> */}
                {/* <TestiMonial textOnLeft={true} /> */}
            {/* <Footer /> */}
        </>
    );
}
export default MainPage;
