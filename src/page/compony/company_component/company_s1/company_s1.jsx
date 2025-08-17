import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import img1 from "@/assets/company/company_s1/DEW06442.jpg"
import img2 from "@/assets/company/company_s1/DEW05999.jpg"
import {Autoplay} from "swiper/modules";
import {useTranslation} from "react-i18next";


const CompanyS1 = () => {
    const {t} = useTranslation();
    return (
        <div>
            <div className={"company_header"}>
                <div className="company_header_opacity"></div>
                <div className="company_header_box">
                    <div className="company_header_title">
                        <h1>{t("company.company_s1.h1")}</h1>
                    </div>
                </div>

                <Swiper
                    autoplay={{delay: 3000}}
                    loop={true}
                    modules={[Autoplay]}
                    className={"company_header_swiper"}
                >
                    <SwiperSlide>
                        <img src={img2} alt=""/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="current-container">
                <div className="akyus_text" style={{marginTop:"30px"}}>
                    <h2>{t("company.company_s1.h2")}</h2>
                    <p>{t("company.company_s1.p")}</p>
                </div>
            </div>

        </div>
    );
};

export default CompanyS1;