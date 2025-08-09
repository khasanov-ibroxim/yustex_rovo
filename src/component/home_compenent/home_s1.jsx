import React, {useState, useRef} from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from "react-router-dom";

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
                    <Link to={"#"}>Связаться с нами <ArrowForwardIcon/></Link>
                </div>
            </div>
        </section>
    );
};

export default HomeS1;
