import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Home_s1_db} from "@/component/home_compenent/home_db/home_s1_db.jsx";
import ProductCard from "@/component/product_card/product_card.jsx";
import {FreeMode} from "swiper/modules";
import {Home_s2_db} from "@/component/home_compenent/home_db/home_s2_db.jsx";
import {Link} from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ProductionS4 = () => {
    const swiperRef = useRef(null); // Swiper uchun ref

    return (
        <section style={{position:"relative"}} className={"container-fluid"}>
            <div className="home_s2_box"style={{padding:"0 40px"}} >
                <h1>Get started, explore <br/> our products!</h1>

            </div>
            <div className="custom-nav" data-aos="fade-up" style={{top:"12%"}}>
                <button
                    className="swiper-button-prev"
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                >

                </button>
                <button
                    className="swiper-button-next"
                    onClick={() => swiperRef.current.swiper.slideNext()}
                >
                </button>
            </div>
            <Swiper
                ref={swiperRef} // Swiperga ref qo'shamiz
                slidesPerView={3}
                spaceBetween={20}
                pagination={{clickable: true}}
                modules={[FreeMode]}
                grabCursor={true}
                loop={true}
                breakpoints={{
                    320: {slidesPerView: 1,},  // Mobil (<= 320px)
                    576: {slidesPerView: 2,},  // Kichik ekran (<= 576px)
                    768: {slidesPerView: 3,},  // O‘rta ekran (<= 768px)
                    1024: {slidesPerView: 3,},
                }}
                className="production_s4_swiper"
                data-aos="fade-up"

            >
                {Home_s2_db.slice(0, 5).map((product, index) => (
                    <SwiperSlide key={index} className={"col-lg-5"}>
                        <ProductCard product={product} key={index}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default ProductionS4;