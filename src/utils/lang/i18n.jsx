import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {home_translate} from "@/utils/lang/translates/home_translate.jsx";
import {company_translate} from "@/utils/lang/translates/company_translate.jsx";
import {contact_translate} from "@/utils/lang/translates/contact_translate.jsx";
import {product_translate} from "@/utils/lang/translates/product_translate.jsx";
import {production_translate} from "@/utils/lang/translates/production_translate.jsx";
import {brand_translate} from "@/utils/lang/translates/brand_translate.jsx";


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
                    company: company_translate.ru,
                    contact: contact_translate.ru,
                    product: product_translate.ru,
                    production: production_translate.ru,
                    brand: brand_translate.ru,
                    navbar: {
                        home: "Главная",
                        company: "О Компании",
                        brand: "Бренд",
                        production: "Производство",
                        product: "Продукция",
                        vacancy: "Вакансии",
                        contact: "Контакты"
                    },
                    footer_form: {
                        h3: "Заинтересовались?",
                        p: `Это только начало.
                        Советы по выбору тканей, идеи дизайна, примеры нашей продукции и закулисье процесса печати — всё
                        это вы найдёте в нашей рассылке. Подпишитесь и будьте ближе к миру стильной и качественной
                        одежды.`,
                        placeholder: "Телефон",
                        send: "Отправить"
                    },
                    footer:{
                        i1:"г.Ташкент , Мирзо-Улугбекский район, МФУ Чингильды, улица Милий Бог",
                        i2:{
                            title:"Меню",
                            l1:"Главная",
                            l2:"Производство",
                            l3:"Продукция"
                        },
                        i3:{
                            title:"Покупателям",
                            l1:"Доставка и оплата",
                            l2:"Вопросы"
                        },
                        i4:{
                            title:"Следите за нами",
                            p:"Будьте в курсе новинок и акций"
                        },
                        i5:{
                            title:"Связаться с нами",
                            p:"Задайте вопрос или оформите заказ — мы всегда на связи",
                            link:"Контакты"
                        }
                    },
                    errors: {
                        success: "A message has been sent, we will contact you shortly",
                        name_empty: "Your name cannot be empty",
                        name_error: "You typed your name incorrectly",
                        tell_error: "Your phone number is incorrect",
                        server_error: "A system error has occurred"
                    }
                }
            },
            en: {
                translation: {
                    home: home_translate.en,
                    company: company_translate.en,
                    contact: contact_translate.en,
                    product: product_translate.en,
                    production: production_translate.en,
                    brand: brand_translate.en,
                    navbar: {
                        home: "home",
                        company: "About Us",
                        brand: "Brand",
                        production: "Production",
                        product: "Products",
                        vacancy: "Careers",
                        contact: "Contacts"
                    },
                    footer_form: {
                        h3: "Interested?",
                        p: `This is just the beginning. Fabric selection tips, design ideas, examples of our products, and a behind-the-scenes look at the printing process — you’ll find it all in our newsletter. Subscribe and get closer to the world of stylish, high-quality clothing.`,
                        placeholder: "Phone",
                        send: "Send"
                    },
                    footer:{
                        i1:"Tashkent, Mirzo-Ulugbek District, Chingildy MFI, Milliy Bog Street",
                        i2:{
                            title:"Menu",
                            l1:"Home",
                            l2:"Production",
                            l3:"Products",
                        },
                        i3:{
                            title:"For Customers",
                            l1:"Delivery & Payment",
                            l2:"FAQ"
                        },
                        i4:{
                            title:"Follow Us",
                            p:"Stay updated on new arrivals and special offers"
                        },
                        i5:{
                            title:"Contact Us",
                            p:"Ask a question or place an order — we’re always here for you",
                            link:"Contacts"
                        }
                    },
                    errors: {
                        success: "A message has been sent, we will contact you shortly",
                        name_empty: "Your name cannot be empty",
                        name_error: "You typed your name incorrectly",
                        tell_error: "Your phone number is incorrect",
                        server_error: "A system error has occurred"
                    }
                }
            },
            uz: {
                translation: {
                    home: home_translate.uz,
                    company: company_translate.uz,
                    contact: contact_translate.uz,
                    product: product_translate.uz,
                    production: production_translate.uz,
                    brand: brand_translate.uz,
                    navbar: {
                        home: "Bosh sahifa",
                        company: "Kompaniya haqida",
                        brand: "Brend",
                        production: "Ishlab chiqarish",
                        product: "Mahsulotlar",
                        vacancy: "Bo‘sh ish o‘rinlari",
                        contact: "Aloqa"
                    },
                    footer_form: {
                        h3: "Qiziqyapsizmi?",
                        p: `Bu faqat boshlanishi. Mato tanlash bo‘yicha maslahatlar, dizayn g‘oyalari, mahsulotlarimiz namunalari va bosma jarayonining ichki tafsilotlari — bularning barchasini bizning xabarnomamizda topasiz. Obuna bo‘ling va uslubli hamda sifatli kiyim-kechak olamiga yaqinroq bo‘ling.`,
                        placeholder: "Telefon",
                        send: "Yuborish"
                    },
                    footer:{
                        i1:"Toshkent shahri, Mirzo Ulug‘bek tumani, MFY Chingildi, Milliy Bog‘ ko‘chasi",
                        i2:{
                            title:"Menyu",
                            l1:"Bosh sahifa",
                            l2:"Ishlab chiqarish",
                            l3:"Mahsulotlar"
                        },
                        i3:{
                            title:"Xaridorlarga",
                            l1:"Yetkazib berish va to‘lov",
                            l2:"Savollar"
                        },
                        i4:{
                            title:"Bizni kuzating",
                            p:"Yangiliklar va aksiyalardan xabardor bo‘ling"
                        },
                        i5:{
                            title:"Biz bilan bog‘lanish",
                            p:"Savolingizni bering yoki buyurtma qoldiring — biz har doim aloqadamiz",
                            link:"Kontaktlar"
                        }
                    },
                    errors: {
                        success: "A message has been sent, we will contact you shortly",
                        name_empty: "Your name cannot be empty",
                        name_error: "You typed your name incorrectly",
                        tell_error: "Your phone number is incorrect",
                        server_error: "A system error has occurred"
                    }
                }
            },
            es: {
                translation: {
                    home: home_translate.es,
                    company: company_translate.es,
                    contact: contact_translate.es,
                    product: product_translate.es,
                    production: production_translate.es,
                    brand: brand_translate.es,
                    navbar: {
                        home: "home",
                        company: "Sobre Nosotros",
                        brand: "Marca",
                        production: "Producción",
                        product: "Productos",
                        vacancy: "Carreras",
                        contact: "Contactos"
                    },
                    footer_form: {
                        h3: "¿Interesado?",
                        p: `Esto es solo el comienzo. Consejos para elegir telas, ideas de diseño, ejemplos de nuestros productos y una mirada detrás de escena al proceso de impresión: todo lo encontrarás en nuestro boletín.`,
                        placeholder: "Teléfono",
                        send: "Enviar"
                    },
                    footer:{
                        i1:"Tashkent, Distrito Mirzo-Ulugbek, Barrio Chingildy, C/ Milliy Bog",
                        i2:{
                            title:"Menú",
                            l1:"Inicio",
                            l2:"Producción",
                            l3:"Productos",
                        },
                        i3:{
                            title:"Para Clientes",
                            l1:"Envío y Pago",
                            l2:"Preguntas Frecuentes (FAQ)"
                        },
                        i4:{
                            title:"Síguenos",
                            p:"Mantente al día con las novedades y ofertas especiales."
                        },
                        i5:{
                            title:"Contáctanos",
                            p:"Haz una pregunta o realiza un pedido — siempre estamos aquí para usted",
                            link:"Contactos"
                        }
                    },
                    errors: {
                        success: "A message has been sent, we will contact you shortly",
                        name_empty: "Your name cannot be empty",
                        name_error: "You typed your name incorrectly",
                        tell_error: "Your phone number is incorrect",
                        server_error: "A system error has occurred"
                    }
                }
            },
        },
    });

export default i18n;
