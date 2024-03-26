import React from "react";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
    return (
        <>
        <h1 className="">Recommended Courses</h1>
        <div className="w-34 m-auto">
            <div className="mt-20">
                <Slider {...settings}>
                    {Sdata.map((d) => (
                        <div className="bg-white h-[450] text-black rounded-xl" >
                            <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                                <img src={d.source} alt="pic" className="h-44 w-44 "/>
                            </div>
                            <div className="flex  flex-col justify-center items-center gap-4 p-4">
                                <p>{d.description}</p>
                                <p>{d.price}</p>
                                <a href="hh" className="buy-now-link">Buy Now</a>
                            </div>
                        </div>
                    ))}
                </Slider>    
            </div>
        </div>
        </>
    )
}
export default Carousel;