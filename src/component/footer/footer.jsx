import React from 'react';
import "./footer.css";
import {Link} from "react-router-dom";
import logo from "@/assets/logoYustex.png"

import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EastIcon from '@mui/icons-material/East';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {useTranslation} from "react-i18next";
import {CONTACT, HOME, PRODUCT, PRODUCTION} from "@/utils/consts.jsx";


const Footer = () => {
    const {t} = useTranslation();
    return (<footer>
        <div className="current-container">
            <div className=" pt-5 pb-5">
                <div className="row" style={{justifyContent: "space-between"}}>
                    <div className="col-lg-3">
                        <div className="footer_item_1">
                            <Link to={HOME} onClick={()=>window.scrollTo({top: 0, behavior: "smooth"})}><img src={logo} alt=""/></Link>
                            <ul>
                               <li><LocalPhoneIcon/>+998 (55) 502-09-90</li>
                               <li><EmailIcon/>info@yustex.uz</li>
                               <li><LocationOnIcon/>{t("footer.i1")}</li>

                           </ul>
                            <div className="footer_social">
                                <a className="footer_social_circle"
                                   href={"#"}>
                                    <TelegramIcon/></a>
                                <a className="footer_social_circle"
                                   href={"#"}>
                                    <InstagramIcon/></a>

                                <Link className="footer_social_circle" to={"#"}><FacebookIcon/></Link>

                                <Link className="footer_social_circle" to={"#"}><WhatsAppIcon/></Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer_item_def">
                            <h4>{t("footer.i2.title")}</h4>
                            <ul>
                                <li><Link to={HOME} onClick={()=>window.scrollTo({top: 0, behavior: "smooth"})}>{t("footer.i2.l1")}</Link></li>
                                <li><Link to={PRODUCTION} onClick={()=>window.scrollTo({top: 0, behavior: "smooth"})}>{t("footer.i2.l2")}</Link></li>
                                <li><Link to={PRODUCT} onClick={()=>window.scrollTo({top: 0, behavior: "smooth"})}>{t("footer.i2.l3")}</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer_item_def">
                            <h4>{t("footer.i3.title")}</h4>
                            <ul>
                                <li><Link to={"#"} onClick={()=>window.scrollTo({top: 0, behavior: "smooth"})}>{t("footer.i3.l1")}</Link></li>
                                <li><Link to={"#"} onClick={()=>window.scrollTo({top: 0, behavior: "smooth"})}>{t("footer.i3.l2")}</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer_item_def">
                            <h4>{t("footer.i4.title")}</h4>
                            <p>{t("footer.i4.p")}</p>
                            <ul className={"d-flex flex-row"}>
                                <li><Link to={"#"} ><InstagramIcon/></Link></li>
                                <li><Link to={"#"}><TelegramIcon/></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer_last_item">
                            <h3>{t("footer.i5.title")}</h3>
                            <p>{t("footer.i5.p")}</p>
                            <Link to={CONTACT} onClick={() => window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })}>{t("footer.i5.link")} <EastIcon/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>);
};

export default Footer;
