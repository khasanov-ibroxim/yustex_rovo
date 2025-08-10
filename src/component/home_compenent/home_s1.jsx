import React, {useState, useRef} from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from "react-router-dom";

import obor_1 from "@/assets/home/h_s1/oborod/bulmer-fashion.com-14.svg"
import obor_2 from "@/assets/home/h_s1/oborod/d895774709bf356170b4d3451d4b5ded.png"
import obor_3 from "@/assets/home/h_s1/oborod/juki-4.svg"
import obor_4 from "@/assets/home/h_s1/oborod/ozbilimlogobeyaz.png"
import obor_5 from "@/assets/home/h_s1/oborod/sulfet.png"

import ser_1 from "@/assets/home/h_s1/sertf/46.png"
import ser_2 from "@/assets/home/h_s1/sertf/85beb0e98d62281da12a61c7b8863518.png"
import ser_3 from "@/assets/home/h_s1/sertf/45001.png"
import ser_4 from "@/assets/home/h_s1/sertf/oeko-tex-logo-2048x655.png"
import ser_5 from "@/assets/home/h_s1/sertf/sedex.png"
import ser_6 from "@/assets/home/h_s1/sertf/sertifikat-iso-90012015-round.png"
import {CONTACT} from "@/utils/consts.jsx";

const HomeS1 = () => {

    return (
        <section className={"home_s1"}>
            <div className="home_s1_top current-container">
                <div className="home_s1_top_left">
                    <span>Работаем с заботой о каждой детали</span>
                    <h2>Мы ценим доверие и строим партнёрство на качестве и ответственности.</h2>
                </div>
                <div className="home_s1_top_right">
                    <p>Мы используем только проверенные и сертифицированные материалы, соответствующие высоким
                        стандартам. Каждый этап — от закупки сырья до упаковки — проходит строгий контроль качества. Мы
                        гибко подходим к задачам любого масштаба и всегда остаёмся открытыми и честными в общении с
                        клиентами.</p>
                    <Link to={CONTACT}>Связаться с нами <ArrowForwardIcon/></Link>
                </div>
            </div>


            <div className="box_sertf">
                <h1>Оборудование</h1>
                <div className="box_oborod">
                    <img src={obor_1} alt=""/>
                    <img src={obor_2} alt=""/>
                    <img src={obor_3} alt=""/>
                    <img src={obor_4} alt=""/>
                    <img src={obor_5} alt=""/>
                </div>
                <h1>Сертификаты</h1>
                <div className="box_oborod">
                    <img src={ser_1} alt=""/>
                    <img src={ser_3} alt=""/>
                    <img src={ser_6} alt=""/>
                    <img src={ser_2} alt=""/>
                    <img src={ser_4} alt=""/>
                    <img src={ser_5} alt=""/>

                </div>
            </div>
        </section>
    );
};

export default HomeS1;
