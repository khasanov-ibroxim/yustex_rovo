import React from 'react';
import {Link} from 'react-router-dom';
import production_headerImg from "@/assets/production/production_header/DEW06241.jpg"

const ProductionHeader = () => {
    return (
        <div className={"production_header"}>
            <div className="row">
                <div className="col-lg-6 ">
                    <div className="production_header_text ">
                        <h1 className={"production_title"}>Швейный отдел</h1>
                        <p>Наш швейный отдел — это 25 современных производственных линий, где более 800 мастеров своего
                            дела создают одежду с точностью и заботой. Надёжную работу обеспечивает команда из 40
                            профессионалов технической поддержки.</p>
                        <Link to={"#"}>Подробно</Link>
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