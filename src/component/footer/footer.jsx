import React from 'react';
import "./footer.css";
import logo from "@/assets/logoWhite.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="current-container">
                <div className="footer_logo text-center mt-4">
                    <img src={logo} alt="logo" />
                </div>
                <div className="footer_main">
                    <div className="row justify-content-between mt-5">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-3">
                            <Link to={"#"} className="footer_btn">Contact</Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 mb-3">
                            <ul>
                                <li><Link to={"#"}>Product 1</Link></li>
                                <li><Link to={"#"}>Product 2</Link></li>
                                <li><Link to={"#"}>Product 3</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 mb-3">
                            <ul>
                                <li><Link to={"#"}>Service 1</Link></li>
                                <li><Link to={"#"}>Service 2</Link></li>
                                <li><Link to={"#"}>Service 3</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 mb-3">
                            <ul>
                                <li><Link to={"#"}>Support 1</Link></li>
                                <li><Link to={"#"}>Support 2</Link></li>
                                <li><Link to={"#"}>Support 3</Link></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <ul>
                                <li><Link to={"#"}>About Us</Link></li>
                                <li><Link to={"#"}>Careers</Link></li>
                                <li><Link to={"#"}>Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
