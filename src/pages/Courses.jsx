import React from "react";
import Card from "../component/Card";
import Sdata from "../component/Sdata";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "../cssStyling/course.css";
const Courses = () => {
    return (
      <>
        <div className="main-course-cont">
            <Navbar/>
            <div className="course-cont">
            {Sdata.map((val) => {
                    return(
                        <Card
                        key = {val.i_d}
                        source = {val.source}
                        description = {val.description}
                        price = {val.price}
                        />
                    )})
            }
            </div>
            <Footer/>
        </div>
      </>
    )

}

export default Courses;