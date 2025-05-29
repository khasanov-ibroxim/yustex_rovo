import React from 'react';
import {Link} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import header_element_img from "@/assets/home/h_s4/h_s4_1.jpg"

const HomeHeader = () => {
    return (
        <div className={"home_header"}>
            <div className={"current-container"}>
                <div className="home_header_box">
                    <h1>Premium merch <br/> for your business</h1>
                    <p>Assembly simplifies merch by combining a powerful digital <br/> platform with a fully integrated supply
                        chain. </p>
                    <div className="home_header_box_btns">
                        <Link to={"#"}>Start designing</Link>
                        <Link to={"#"}>Get in touch <ArrowForwardIcon/> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;