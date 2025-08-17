import React from 'react';
import {Link} from 'react-router-dom';
import {Production_s2_db} from "@/component/production_component/production_db/production_db.jsx";
import Production_s1 from "@/component/production_component/production_s1.jsx";
import {useTranslation} from "react-i18next";

const ProductionS2 = () => {
    const {t} = useTranslation();
    const productDB = Production_s2_db(t);

    return (
        <section className="current-container">
            <div className="production_s2_title">
                <h2 className="production_title">{t("production.production_s2.title")}</h2>
            </div>

            <div className="production_s2_content_box">
                {/* Har bir itemni map bilan aylantiramiz */}
                {productDB.map((item, index) => (
                    <div key={index} className="production_s2_content">
                        <div className="row mt-5">
                            <div className="col-lg-5">
                                <div className="production_s2_content_text">
                                    <h2>{item.h1}</h2>
                                    <div className="production_s2_content_text_box">
                                        {/* agar HTML bo'lsa */}
                                        {index === 3 ? (
                                            <p dangerouslySetInnerHTML={{__html: item.paragraphs}}></p>
                                        ) : (
                                            <p>{item.paragraphs}</p>
                                        )}
                                        <div className="production_s2_content_link">
                                            <Link to={item.link} onClick={()=>window.scrollTo({top: 0, behavior: "smooth"})}>{item.btn}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="production_s2_ind_item_img">
                                    <img src={item.photo} alt={item.h1}/>
                                </div>
                            </div>
                        </div>
                        {index === 1 && <Production_s1/>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductionS2;
