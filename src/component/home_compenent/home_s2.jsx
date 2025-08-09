import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import ProductCard from "@/component/product_card/product_card.jsx";
import {FreeMode} from "swiper/modules";
import {Home_s2_db} from "@/component/home_compenent/home_db/home_s2_db.jsx";
import {Link} from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HomeS2 = () => {
    const swiperRef = useRef(null); // Swiper uchun ref

    return (
        <section className={"current-container"}
                 style={{position: "relative", marginTop: "100px", marginBottom: "100px"}}>
            <div className="home_s2_box ">
                <h1>Где качество встречает <br/> индивидуальность</h1>
                <p>Наша продукция — это гармония качества и индивидуального подхода. <br/>
                    Мы объединяем современные технологии, безупречный вкус и <br/>
                    ответственное производство в каждой детали.</p>
                <div className="home_header_box_btns">
                    <Link to={"#"}>Start designing</Link>
                    <Link to={"#"}>Get in touch <ArrowForwardIcon/> </Link>
                </div>
            </div>
            {/*<div className="custom-nav" data-aos="fade-up">*/}
            {/*    <button*/}
            {/*        className="swiper-button-prev"*/}
            {/*        onClick={() => swiperRef.current.swiper.slidePrev()}*/}
            {/*    >*/}

            {/*    </button>*/}
            {/*    <button*/}
            {/*        className="swiper-button-next"*/}
            {/*        onClick={() => swiperRef.current.swiper.slideNext()}*/}
            {/*    >*/}
            {/*    </button>*/}
            {/*</div>*/}
            <Swiper
                ref={swiperRef} // Swiperga ref qo'shamiz
                slidesPerView={3}
                spaceBetween={20}
                // pagination={{clickable: true}}

                modules={[FreeMode]}
                // grabCursor={true}
                loop={true}
                breakpoints={{
                    320: {slidesPerView: 1,},  // Mobil (<= 320px)
                    576: {slidesPerView: 2,},  // Kichik ekran (<= 576px)
                    768: {slidesPerView: 3,},  // O‘rta ekran (<= 768px)
                    1024: {slidesPerView: 3,},
                }}
                className="mySwiper"
                data-aos="fade-up"
            >
                {Home_s2_db.slice(0, 5).map((product, index) => (
                    <SwiperSlide key={index} className={"col-lg-5"} style={{cursor:"pointer"}}>
                        <ProductCard product={product} key={index}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HomeS2;