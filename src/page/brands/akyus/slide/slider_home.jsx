import React from 'react';
import slide_1 from "./home_header_1.png";
import slide_2 from "./home_header_2.jpg";
import slide_3 from "./home_header_3.jpg";
import "./slider_home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const SliderHome = () => {
    return (
        <div id="home_sliderID" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2000">
            <ol className="carousel-indicators">
                <li data-target="#home_sliderID" data-bs-slide-to="0" className="active"></li>
                <li data-target="#home_sliderID" data-bs-slide-to="1"></li>
                <li data-target="#home_sliderID" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slide_1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={slide_2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={slide_3} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#home_sliderID" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>

            </a>
            <a className="carousel-control-next" href="#home_sliderID" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>

        </div>

    );
};

export default SliderHome;