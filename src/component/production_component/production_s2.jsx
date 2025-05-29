import React from 'react';
import {Link} from 'react-router-dom';
import Product_card from "@/component/product_card/product_card.jsx";
import {Production_s2_db, Production_s2_ind_db} from "@/component/production_component/production_db/production_db.jsx";

const ProductionS2 = () => {
    return (
        <section className={"current-container"}>
            <div className="production_s2_title">
                <h1 className={"production_title"}>Elevate your brand in 4 steps</h1>
            </div>
            <div className="production_s2_content_box">
                <div className="production_s2_content">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="production_s2_content_text">
                                <h1>1. Order a Sample</h1>
                                <div className="production_s2_content_text_box">
                                    <p>Try before you buy! We’re to make your merch dreams come true and want to make
                                        sure your new products are everything you hoped for.</p>
                                    <p>
                                        Our samples are always in stock and provide the perfect way for you to test fit
                                        and quality first-hand, before moving to production. Besides the samples, we
                                        advise on ordering our devkits as well, so you can have a clear vision of all
                                        the available colors, printing techniques and qualities of woven labels.
                                    </p>
                                    <p>
                                        Whether it’s an upcoming launch, event, collaboration or activation, you’ll find
                                        the best match for your business here.</p>
                                    <div className="production_s2_content_link">
                                        <Link to={"#"}>View all products</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 d-flex gap-3 flex-wrap">
                            {Production_s2_ind_db.map((product, index) => (
                                <div className={"production_s2_ind_item"}>
                                    <Product_card product={product} key={index} height={"500px"}/>
                                </div>

                            ))}
                        </div>
                    </div>
                    {Production_s2_db.map((product, index) => (
                        <div className={"row mt-5"}>
                            <div className="col-lg-5">
                                <div className="production_s2_content_text">
                                    <h1>{index + 2}. {product.h1}</h1>
                                    <div className="production_s2_content_text_box">
                                        {product.paragraphs.map((paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        ))}
                                        <div className="production_s2_content_link">
                                            <Link to={"#"}>View all products</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="production_s2_ind_item_img">
                                    <img src={product.photo} alt={product.h1}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductionS2;