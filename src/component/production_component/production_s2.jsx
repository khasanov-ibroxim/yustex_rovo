import React from 'react';
import {Link} from 'react-router-dom';
import Product_card from "@/component/product_card/product_card.jsx";
import {Production_s2_db, Production_s2_ind_db} from "@/component/production_component/production_db/production_db.jsx";
import Production_s1 from "@/component/production_component/production_s1.jsx";

const ProductionS2 = () => {
    return (
        <section className={"current-container"}>
            <div className="production_s2_title">
                <h1 className={"production_title"}>Каждый этап под контролем</h1>
            </div>
            <div className="production_s2_content_box">
                <div className="production_s2_content">
                    <div className={"row mt-5"}>
                        <div className="col-lg-5">
                            <div className="production_s2_content_text">
                                <h1>{Production_s2_db.i1.h1}</h1>
                                <div className="production_s2_content_text_box">
                                    <p>{Production_s2_db.i1.paragraphs}</p>
                                    <div className="production_s2_content_link">
                                        <Link to={"#"}>{Production_s2_db.i1.btn}</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="production_s2_ind_item_img">
                                <img src={Production_s2_db.i1.photo} alt={Production_s2_db.i1.h1}/>
                            </div>
                        </div>
                    </div>
                    <div className={"row mt-5"}>
                        <div className="col-lg-5">
                            <div className="production_s2_content_text">
                                <h1>{Production_s2_db.i2.h1}</h1>
                                <div className="production_s2_content_text_box">
                                    <p>{Production_s2_db.i2.paragraphs}</p>
                                    <div className="production_s2_content_link">
                                        <Link to={"#"}>{Production_s2_db.i2.btn}</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="production_s2_ind_item_img">
                                <img src={Production_s2_db.i2.photo} alt={Production_s2_db.i2.h1}/>
                            </div>
                        </div>
                    </div>
                </div>
                <Production_s1/>

                <div className="production_s2_content">
                    <div className={"row mt-5"}>
                        <div className="col-lg-5">
                            <div className="production_s2_content_text">
                                <h1>{Production_s2_db.i3.h1}</h1>
                                <div className="production_s2_content_text_box">
                                    <p>{Production_s2_db.i3.paragraphs}</p>
                                    <div className="production_s2_content_link">
                                        <Link to={"#"}>{Production_s2_db.i3.btn}</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="production_s2_ind_item_img">
                                <img src={Production_s2_db.i3.photo} alt={Production_s2_db.i3.h1}/>
                            </div>
                        </div>
                    </div>
                    <div className={"row mt-5"}>
                        <div className="col-lg-5">
                            <div className="production_s2_content_text">
                                <h1>{Production_s2_db.i4.h1}</h1>
                                <div className="production_s2_content_text_box">
                                    <p dangerouslySetInnerHTML={{__html:Production_s2_db.i4.paragraphs}}></p>
                                    <div className="production_s2_content_link">
                                        <Link to={"#"}>{Production_s2_db.i4.btn}</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="production_s2_ind_item_img">
                                <img src={Production_s2_db.i4.photo} alt={Production_s2_db.i4.h1}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductionS2;