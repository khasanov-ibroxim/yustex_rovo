import React from 'react';
import "./company_s3.css"

import img1 from "@/assets/company/company_s3/DEW06056.jpg"
import {useTranslation} from "react-i18next";


const CompanyS3 = () => {
    const {t} = useTranslation();
    return (
        <div className={"current-container"}>
            <div className="row s3_row">
                <div className="col-6">
                    <div className="company_s3_text">
                        <h2>{t("company.company_s3.h2")}</h2>
                        <p dangerouslySetInnerHTML={{__html:t("company.company_s3.p")}}></p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="company_s3_img">
                        <img src={img1} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyS3;