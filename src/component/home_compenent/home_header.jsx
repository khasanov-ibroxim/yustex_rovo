import React from 'react';
import {Link} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {CONTACT} from "@/utils/consts.jsx";
import {useTranslation} from "react-i18next";

const HomeHeader = () => {
    const {t} = useTranslation();
    return (
        <div className={"home_header"}>
            <div className={"current-container"}>
                <div className="home_header_box">
                    <h1 dangerouslySetInnerHTML={{__html:t("home.home_header.h1")}}></h1>
                    <p dangerouslySetInnerHTML={{__html:t("home.home_header.p")}}></p>
                    <div className="home_header_box_btns">
                        <Link to={CONTACT}>{t("home.home_header.link_1")}</Link>
                        <Link to={CONTACT}> {t("home.home_header.link_2")}  <ArrowForwardIcon/> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;