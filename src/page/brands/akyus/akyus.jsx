import React, {useState} from 'react';
import "./akyus.css"
import {Akyus_db} from "@/page/brands/akyus/akyus_db.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import Slider_home from "@/page/brands/akyus/slide/slider_home.jsx";

const Akyus = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null); // ✅ fixed
    const [activeCat, setActiveCat] = useState("all")


    const imgChecker = (product, index) => {
        if (Array.isArray(product)) {
            return hoveredIndex === index ? product[1] : product[0];
        } else {
            return product;
        }
    };
    return (
        <div style={{position: "relative", background: "white", marginBottom: "100vh", paddingBottom: "100px"}}>
            <Slider_home/>
            <div className="current-container">
                <div className="akyus_text">
                    <h1>AKYUS</h1>
                    <p>запущенный в 2024 году, предлагает элегантные трикотажные решения для взрослых и комфортные
                        образы
                        для детей. Его философия — «Одежда, которая сопровождает вас в каждый момент жизни». AKYUS
                        сочетает
                        модные тенденции с классическим стилем, использует только натуральный хлопок и придерживается
                        принципов экологичного производства.</p>
                </div>
            </div>

            <div className={"current-container"}>
                <div className="akyus_content">
                    <div className="row">
                        {Akyus_db.filter(item => activeCat === "all" || item.cat_name === activeCat)
                            .map((item, index) => (
                                <div className="col-lg-4 col-6" key={index}
                                     onMouseEnter={() => setHoveredIndex(index)}
                                     onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div className="product_item">
                                        <img src={imgChecker(item.img_path, index)} alt="product"/>
                                    </div>
                                </div>
                            ))}

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Akyus;