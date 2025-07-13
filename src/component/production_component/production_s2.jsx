import React from 'react';
import {Link} from 'react-router-dom';
import Product_card from "@/component/product_card/product_card.jsx";
import {Production_s2_db, Production_s2_ind_db} from "@/component/production_component/production_db/production_db.jsx";

const ProductionS2 = () => {
    return (
        <section className={"current-container"}>
            <div className="production_s2_title">
                <h1 className={"production_title"}>Каждый этап под контролем</h1>
            </div>
            <div className="production_s2_content_box">
                <div className="production_s2_content">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="production_s2_content_text">
                                <h1>1.Мощности, проверенные делом</h1>
                                <div className="production_s2_content_text_box">
                                    <p>Наша фабрика — это стабильное производство, отлаженные процессы и десятилетний
                                        опыт в создании трикотажной одежды.</p>
                                    <p>25 производственных линий и команда из более чем 950 сотрудников позволяют нам
                                        выпускать до 50 000 изделий в день.
                                        Мы производим мужскую, женскую и детскую одежду: от футболок и костюмов до пижам
                                        и блузок, экспортируя продукцию в более чем 5 стран.
                                        12+ лет мы растём, развиваемся и доказываем: качество — это результат системной
                                        работы.</p>

                                    <div className="production_s2_content_link">
                                        <Link to={"#"}>Продукция</Link>
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
                                            <Link to={"#"}>{product.btn}</Link>
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