import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import img1 from "@/assets/company/company_s1/DEW06442.jpg"
import img2 from "@/assets/company/company_s1/DEW05999.jpg"
import {Autoplay} from "swiper/modules";


const CompanyS1 = () => {
    return (
        <div>
            <div className={"company_header"}>
                <div className="company_header_opacity"></div>
                <div className="company_header_box">
                    <div className="company_header_title">
                        <h1>О КОМПАНИИ</h1>
                    </div>

                    <div className="company_s1_text">
                        <h3>ООО " YUSTEX "</h3>
                         по праву считается одним из наиболее ярких и динамично развивающихся текстильных
                        предприятий Узбекистана. Начиная с 2019 года, наша компания совершила впечатляющий прорыв,
                        утвердившись в статусе одного из лидеров в производстве высококачественной трикотажной одежды.
                    </div>
                </div>

                <Swiper
                    autoplay={{delay: 3000}}
                    loop={true}
                    modules={[Autoplay]}
                    className={"company_header_swiper"}
                >
                    <SwiperSlide>
                        <img src={img1} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt=""/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default CompanyS1;