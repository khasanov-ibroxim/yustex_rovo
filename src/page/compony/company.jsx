import React from 'react';
import "./company.css"
import CompanyS1 from "@/page/compony/company_component/company_s1/company_s1.jsx";
import CompanyS2 from "@/page/compony/company_component/company_s2/company_s2.jsx";
import CompanyS3 from "@/page/compony/company_component/company_s3/company_s3.jsx";
import {Helmet} from "react-helmet";

const Company = () => {
    return (
        <div style={{position:"relative" , background:"white" , marginBottom:"100vh" , paddingBottom:"100px"}}>
            <Helmet>
                <link rel="canonical" href="https://yustex.uz/company"/>
            </Helmet>
            <CompanyS1/>
            <CompanyS2/>
            <CompanyS3/>
        </div>
    );
};

export default Company;