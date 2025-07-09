import React from 'react';
import {Link} from 'react-router-dom';
import production_headerImg from "@/assets/production/production_header/DEW06241.jpg"

const ProductionHeader = () => {
    return (
        <div className={"production_header"}>
            <div className="row">
                <div className="col-lg-6 ">
                    <div className="production_header_text ">
                        <h1 className={"production_title"}>A streamlined production process</h1>
                        <p>Our proprietary Studio software seamlessly integrates with our supply chain in Portugal,
                            meaning your order goes into production at the push of a button. </p>
                        <Link to={"#"}>Start designing</Link>
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