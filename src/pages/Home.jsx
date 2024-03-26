import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import HomeHeader from "../component/HomeHeader";
import Whyy from "../component/Whyy";
// import MoveWords from "../component/MoveWords";
import Carousel from "../component/Carousel";
// import ClickToSlide from "../component/ClickToSlide";


const Home = () => {
    return (
        <>
            <Navbar/>
            <HomeHeader/>
            {/* <MoveWords/> */}
            <Whyy/>
            <Carousel/>
            <Footer/>
        </>
    )
}

export default Home;