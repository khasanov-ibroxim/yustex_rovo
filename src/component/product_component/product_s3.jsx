import React from 'react';
import Timeline from "./timeline.jsx"
import pr_s3_gif from "@/assets/product/product_s3/product_s3_gif.gif"
import {useTranslation} from "react-i18next";
const ProductS3 = () => {
    const {t} = useTranslation();
    return (
        <section style={{background: "#efefef" , marginBottom:"0 !important" , paddingBottom:"100px"}} >
            <div className="current-container pt-5 pb-5">
                <div className="row flex-wrap">
                    <div className="col-lg-5 ">
                        <div className="pr-s3-title">
                            <span dangerouslySetInnerHTML={{__html:t("product.product_s3.span")}}></span>
                            <h2>{t("product.product_s3.h2")}</h2>
                        </div>
                    </div>
                    <div className="col-lg-7 ">
                        <Timeline/>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <img src={pr_s3_gif} alt="" className={"pr-s3-gif"}/>
            </div>
        </section>
    );
};

export default ProductS3;