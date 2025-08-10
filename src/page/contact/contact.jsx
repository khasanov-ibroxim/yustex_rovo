import React, {useState} from 'react';
import "./contact.css"
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import {useTranslation} from "react-i18next";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import img1 from "@/assets/company/company_s1/DEW06442.jpg";
import img2 from "@/assets/company/company_s1/DEW05999.jpg";
import axios from "axios";
import {message} from "antd";


const Contact = () => {
    const {t} = useTranslation();
    const [username , setUsername] = useState("");
    const [tell , setTell] = useState("");
    const [email , setEmail] = useState("");
    const [userMessage , setMsg] = useState("");
    const [messageApi, contextHolder] = message.useMessage();
    const [disabled, setDisabled] = useState(false);

    const checkForm = () => {
        setDisabled(true);

        const hasNumber = /\d/;

        if (!username || username.trim().length === 0) {
            messageApi.open({
                type: 'error',
                content: t('errors.name_empty'),
            });
            setDisabled(false);
            return;
        }

        if (username.trim().length <= 3 || hasNumber.test(username)) {
            messageApi.open({
                type: 'error',
                content: t('errors.name_error'),
            });
            setDisabled(false);
            return;
        }

        if (!tell || tell.trim().length < 11) {
            messageApi.open({
                type: 'error',
                content: t('errors.tell_error'),
            });
            setDisabled(false);
            return;
        }

        // To'g'ri xabar tuzamiz
        let msg = "";
        msg += `Имя: ${username}\n`;
        msg += `Номер телефона: ${tell}\n`;
        msg += `Email: ${email || '-'}\n`;
        msg += `Сообщение: ${userMessage || '-'}\n`; // agar xohlasang textarea qiymatini ham qo‘shamiz

        const TOKEN = "AAFXIHuKxFz2v_WVGV8yyTzjhLn4pWtqhlE";
        const CHAT_ID = "240122844";

        axios.post(`https://api.telegram.org/bot6825177493:AAFXIHuKxFz2v_WVGV8yyTzjhLn4pWtqhlE/sendMessage`, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: msg
        }).then((res) => {
            if (res?.status === 200) {
                messageApi.open({
                    type: 'success',
                    content: t('errors.success'),
                });
                setTimeout(() => {
                    setMsg('');
                    setTell('');
                    setEmail('');
                    setUsername('');
                    setDisabled(false);
                }, 1800);
            }
        }).catch((e) => {
            messageApi.open({
                type: 'error',
                content: t('errors.server_error'),
            });
            setDisabled(false);
        });
    };



    return (
        <div style={{position: "relative", background: "white", marginBottom: "100vh", paddingBottom: "100px"}}>
            {contextHolder}
            <div className={"company_header"}>
                <div className="company_header_opacity"></div>
                <div className="company_header_box">
                    <div className="company_header_title">
                        <h1>Контакты</h1>
                    </div>
                </div>

                <Swiper
                    autoplay={{delay: 3000}}
                    loop={true}
                    modules={[Autoplay]}
                    className={"company_header_swiper"}
                >
                    <SwiperSlide>
                        <img src={img1} alt=""/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={"current-container"}>

                <div className="row pt-5 pb-5">
                    <div data-aos="fade-up" className="col-lg-3">
                        <div className="contact_top_item">
                            <div className="contact_circle">
                                <PlaceIcon/>
                            </div>
                            <h3>{t("contact.contact_box.address.title")}</h3>
                            <a href={"#"}>г.Ташкент , Мирзо-Улугбекский район, МФУ Чингильды, улица Милий Бог</a>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-lg-3">
                        <div className="contact_top_item">
                            <div className="contact_circle">
                                <LocalPhoneIcon/>
                            </div>
                            <h3>{t("contact.contact_box.tell")}</h3>
                            <a href="tel:+998555020990">+998 (55) 502-09-90</a>
                            <br/>

                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-lg-3">
                        <a href={"#"}
                           className="contact_top_item">
                            <div className="contact_circle">
                                <InstagramIcon/>
                            </div>
                            <h3>{t("contact.contact_box.instagram")}</h3>

                        </a>
                    </div>
                    <div data-aos="fade-up" className="col-lg-3">
                        <a href={"#"} className="contact_top_item">
                            <div className="contact_circle">
                                <TelegramIcon/>
                            </div>
                            <h3>{t("contact.contact_box.telegram")}</h3>
                        </a>
                    </div>
                </div>


                <div className="row pt-5 pb-5">
                    <div className="col-lg-6">
                        <div className="form">
                            <h3 data-aos="fade-up">{t("contact.form_box.title")}</h3>

                            <div className="form_input">
                                <input type="text"
                                       value={username}
                                       onChange={(e) => setUsername(e.target.value)}
                                       placeholder={t("contact.form_box.name")}/>
                            </div>
                            <div className="form_input">
                                <input type="tel" value={tell}
                                       onChange={e => setTell(e.target.value)}
                                       placeholder={t("contact.form_box.tell")}/>
                            </div>
                            <div className="form_input">
                                <input type="email"
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       placeholder={"email"}/>
                            </div>
                            <div className="form_input">
                                <textarea rows={8} type="text"
                                          value={userMessage}
                                          onChange={(e) => setMsg(e.target.value)}
                                          placeholder={t("contact.form_box.msg")}/>
                            </div>
                            <button type={"submit"} disabled={disabled} onClick={checkForm}>{t("contact.form_box.send")}</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact_map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2290.418950321312!2d69.25242879999999!3d41.31617310000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b48a35ed52f%3A0x6d868958ae00961!2sTashkent%20City%20Mall!5e1!3m2!1sru!2s!4v1742402926622!5m2!1sru!2s"
                                width="100%" height="100%" allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;