import React from 'react';
import {Link} from 'react-router-dom';
import production_headerImg from "@/assets/production/production_header/DEW06245.jpg"
import {useTranslation} from "react-i18next";

const ProductionHeader = () => {
    const {t } = useTranslation();
    return (
        <div className={"production_header"}>
            <div className="row">
                <div className="col-lg-6 ">
                    <div className="production_header_text ">
                        <h1 className={"production_title"}>{t("production.production_header.h1")}</h1>
                        <p>{t("production.production_header.p")}</p>
                        <Link to={"#"}>{t("production.production_header.link")}</Link>
                    </div>
                </div>
                <div className="col-lg-6 h-100">
                    <div className="production_header_img">
                        <img src={production_headerImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductionHeader;