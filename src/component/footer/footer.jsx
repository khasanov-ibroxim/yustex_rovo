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
const Footer = () => {
    return (<footer>
        <div className="current-container">
            <div className=" pt-5 pb-5">
                <div className="row" style={{justifyContent: "space-between"}}>
                    <div className="col-lg-3">
                        <div className="footer_item_1">
                            <img src={logo} alt=""/>
                           <ul>
                               <li><LocalPhoneIcon/>+998 (55) 502-09-90</li>
                               <li><EmailIcon/>info@yustex.uz</li>
                               <li><LocationOnIcon/>г.Ташкент , Мирзо-Улугбекский район, МФУ Чингильды, улица Милий Бог</li>

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
                            <h4>Меню</h4>
                            <ul>
                                <li><Link to={"#"}>Главная</Link></li>
                                <li><Link to={"#"}>Производство</Link></li>
                                <li><Link to={"#"}>Продукция</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer_item_def">
                            <h4>Покупателям</h4>
                            <ul>
                                <li><Link to={"#"}>Доставка и оплата</Link></li>
                                <li><Link to={"#"}>Вопросы</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer_item_def">
                            <h4>Следите за нами</h4>
                            <p>Будьте в курсе новинок и акций</p>
                            <ul className={"d-flex flex-row"}>
                                <li><Link to={"#"}><InstagramIcon/></Link></li>
                                <li><Link to={"#"}><TelegramIcon/></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer_last_item">
                            <h3>Связаться с нами</h3>
                            <p>Задайте вопрос или оформите заказ — мы всегда на связи</p>
                            <Link to={'#'} onClick={() => window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })}>Контакты <EastIcon/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>);
};

export default Footer;
