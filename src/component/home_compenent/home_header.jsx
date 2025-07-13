import React from 'react';
import {Link} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HomeHeader = () => {
    return (
        <div className={"home_header"}>
            <div className={"current-container"}>
                <div className="home_header_box">
                    <h1>Идеальное качество. <br/> Уникальный стиль</h1>
                    <p>Мы — одна из ведущих фабрик по производству хлопковой одежды, <br/> где каждый стежок говорит о
                        качестве, а каждая модель — об индивидуальности.</p>
                    <div className="home_header_box_btns">
                        <Link to={"#"}>Оставить заявку</Link>
                        <Link to={"#"}> Связаться с нами  <ArrowForwardIcon/> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;