import React from 'react';
import "./company_s2.css"
import img1 from "@/assets/company/company_s2/DEW05748.jpg"
import img2 from "@/assets/company/company_s2/DEW05864.jpg"
import img3 from "@/assets/company/company_s2/DEW06128.jpg"
import img4 from "@/assets/company/company_s2/DEW06094.jpg"
import {useTranslation} from "react-i18next";


const CompanyS2 = () => {
    const {t} = useTranslation();
    return (
        <div className="company_s2">
            <div className="current-container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-5">
                        <div className="company_s2_item">
                            <div className="company_s2_img">
                                <img src={img1} alt=""/>
                                <div className="company_s2_opacity"></div>
                                <h3>{t("company.company_s2.i1.t")}</h3>
                            </div>
                            <div className="company_s2_text">
                                <p>{t("company.company_s2.i1.d")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="company_s2_item">
                            <div className="company_s2_img">
                                <img src={img2} alt=""/>
                                <div className="company_s2_opacity"></div>
                                <h3>{t("company.company_s2.i2.t")}</h3>
                            </div>
                            <div className="company_s2_text">
                                <p>{t("company.company_s2.i2.d")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-5">
                        <div className="company_s2_item">
                            <div className="company_s2_img">
                                <img src={img3} alt=""/>
                                <div className="company_s2_opacity"></div>
                                <h3>{t("company.company_s2.i3.t")}</h3>
                            </div>
                            <div className="company_s2_text">
                                <p>{t("company.company_s2.i3.d")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="company_s2_item">
                            <div className="company_s2_img">
                                <img src={img4} alt=""/>
                                <div className="company_s2_opacity"></div>
                                <h3>{t("company.company_s2.i4.t")}</h3>
                            </div>
                            <div className="company_s2_text">
                                <p>{t("company.company_s2.i4.d")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyS2;