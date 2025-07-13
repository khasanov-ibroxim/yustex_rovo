import React from 'react';
import {Link} from "react-router-dom";
import {Production_s2_ind_db} from "@/component/production_component/production_db/production_db.jsx";
import Product_card from "@/component/product_card/product_card.jsx";

const ProductS1 = () => {
    return (
        <div style={{paddingTop: "150px"}}>
            <div className="current-container">
                <div className="row">
                    <div className="col-lg-4 p-5 pt-0">
                        <div className="production_s2_content_text">
                            <span style={{fontSize: "16px", color: "#1e1e1e", fontWeight: "700"}}>Натуральность в каждой нити</span>
                            <h1>Мы выбираем то, что безопасно для вас и природы.</h1>
                            <div className="production_s2_content_text_box" style={{margin: "0"}}>
                                <p>В производстве мы используем 100% хлопок — дышащий, мягкий и гипоаллергенный материал.
                                    Это экологичный выбор, подходящий даже для чувствительной кожи.
                                    Качество ткани подтверждено стандартами, а комфорт ощущается с первого прикосновения.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex gap-3 flex-wrap">
                        {Production_s2_ind_db.map((product, index) => (
                            <div className={"production_s2_ind_item"} style={{width:'45%' , marginLeft:"10px"}}>
                                <Product_card product={product} key={index}/>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductS1;