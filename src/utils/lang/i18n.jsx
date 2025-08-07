import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {home_translate} from "@/utils/lang/translates/home_translate.jsx";
import {about_translate} from "@/utils/lang/translates/about_translate.jsx";
import {faqs_translate} from "@/utils/lang/translates/faqs_translate.jsx";
import {contact_translate} from "@/utils/lang/translates/contact_translate.jsx";
import {products_translate} from "@/utils/lang/translates/products_translate.jsx";

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "ru",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            ru: {
                translation: {
                    home: home_translate.ru,
                    about: about_translate.ru,
                    faqs: faqs_translate.ru,
                    products:products_translate.ru,
                    contact: contact_translate.ru,
                    navbar: {
                        home: "Главная",
                        faqs: "Вопросы",
                        about: "О нас",
                        products:"Продукция",
                        contact: "Контакты"
                    },
                    footer: {
                        item_1: {
                            text: "Будь вы трендсеттером, поклонником минимализма или искателем приключений, в Akyus найдется стиль для каждого. Наш широкий ассортимент подчеркнет вашу уникальность.",

                        },
                        item_2:{
                            title:"О нас",
                            os:"Наша история",
                            om:"Наша миссия",
                            contact:"Свяжитесь с нами"
                        },
                        item_3:{
                            title:"Покупателям",
                            i1:"Доставка и оплата",
                            i2:"Вопросы"
                        },
                        item_4:{
                            title:"Следите за нами",
                            text:`Будьте в курсе новинок и акций`
                        },
                        item_5:{
                            title:"Связаться с нами",
                            text:"Задайте вопрос или оформите заказ — мы всегда на связи",
                            btn:"Контакты"
                        }
                    }
                }
            },
            en: {
                translation: {
                    home: home_translate.en,
                    about: about_translate.en,
                    faqs: faqs_translate.en,
                    products:products_translate.en,
                    contact: contact_translate.en,
                    navbar: {
                        home: "Home",
                        faqs: "FAQ",
                        about: "About us",
                        products:"Products",
                        contact: "Contact"
                    },
                    footer: {
                        item_1: {
                            text: `Whether you're a trendsetter, a minimalist, or an adventurer — at Akyus, there's a style for everyone.
Our wide range of products highlights your uniqueness.`
                        },
                        item_2:{
                            title:"About Us",
                            os:"Our Story",
                            om:"Our Mission",
                            contact:"Contact Us"
                        },
                        item_3:{
                            title:"For Customers",
                            i1:"Delivery & Payment",
                            i2:"FAQ"
                        },
                        item_4:{
                            title:"Follow Us",
                            text:`Stay updated on new arrivals and special offers.`
                        },
                        item_5:{
                            title:"Get in Touch",
                            text:"Have a question or want to place an order? We're always here for you.",
                            btn:"Contact"
                        }
                    }
                }
            },
        },
    });

export default i18n;
