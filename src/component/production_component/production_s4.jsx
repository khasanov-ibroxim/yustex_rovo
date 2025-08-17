import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import ProductCard from "@/component/product_card/product_card.jsx";
import {FreeMode} from "swiper/modules";
import {Home_s2_db} from "@/component/home_compenent/home_db/home_s2_db.jsx";
import {Link} from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {Production_s4_db} from "@/component/production_component/production_db/production_db.jsx";
import {useTranslation} from "react-i18next";

const ProductionS4 = () => {
    const swiperRef = useRef(null); // Swiper uchun ref
    const {t} = useTranslation();
    return (
        <section style={{position:"relative"}} className={"current-container"}>
            <div className="home_s2_box"style={{padding:"0 40px"}} >
                <h2 dangerouslySetInnerHTML={{__html:t("production.production_s4")}}></h2>
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
                {Production_s4_db.slice(0, 5).map((product, index) => (
                    <SwiperSlide key={index} className={"col-lg-5"}>
                        <ProductCard product={product} key={index}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default ProductionS4;