import React from 'react';
import "./home_corusel.css"
import p1 from "@/assets/home/partnior/partners-1.9cb8b575_256.png"
import p2 from "@/assets/home/partnior/partners-2.5a925345_256.png"
import p3 from "@/assets/home/partnior/partners-3.361353a6_256.jpg"
import p4 from "@/assets/home/partnior/partners-4.f768dbbb_256.png"
import p5 from "@/assets/home/partnior/partners-5.ae7e059f_3840.jpg"
import p6 from "@/assets/home/partnior/partners-6.d9127a7f_256.png"
import p7 from "@/assets/home/partnior/partners-7.929acbcb_256.jpg"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {useTranslation} from "react-i18next";


const HomeCorusel = () => {
    const {t} = useTranslation();
    return (
        <div className="HomeCorusel current-container">
            <div className="logo_text">{t("home.home_header.corusel")}</div>
            <div className="logos">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    autoplay={{delay:2000}}
                    loop={true}
                    modules={[Autoplay]}
                    className={"partnior_swiper"}
                >
                    <SwiperSlide><img src={p1} alt="С нами работают Yustex"/></SwiperSlide>
                    <SwiperSlide><img src={p2} alt="С нами работают Yustex"/></SwiperSlide>
                    <SwiperSlide><img src={p3} alt="С нами работают Yustex"/></SwiperSlide>
                    <SwiperSlide><img src={p4} alt="С нами работают Yustex"/></SwiperSlide>
                    <SwiperSlide><img src={p5} alt="С нами работают Yustex"/></SwiperSlide>
                    <SwiperSlide><img src={p6} alt="С нами работают Yustex"/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HomeCorusel;