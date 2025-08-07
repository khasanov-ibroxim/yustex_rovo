import React, {useState, useRef} from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination, FreeMode, Mousewheel} from 'swiper/modules';
import {Home_s1_db} from "@/component/home_compenent/home_db/home_s1_db.jsx";

const HomeS1 = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleItems = showAll ? Home_s1_db.slice(0, 20) : Home_s1_db.slice(0, 15);
    const swiperRef_s1 = useRef(null);

    const handleHover = (index) => {
        if (swiperRef_s1.current && swiperRef_s1.current.slideTo) {
            swiperRef_s1.current.slideTo(index - 1); // -1 markazga to‘g‘ri kelsin
        }
    };

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
                    <Link to={"#"}>Связаться с нами <ArrowForwardIcon/></Link>
                </div>
            </div>
        </section>
    );
};

export default HomeS1;
