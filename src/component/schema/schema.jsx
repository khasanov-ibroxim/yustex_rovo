import {BRAND_AKYUS, BRAND_LIBERTY, COMPANY, CONTACT, HOME, PRODUCT, PRODUCTION} from "@/utils/consts.jsx";


export const schemas = {
    [HOME]: {
        canonical: "https://yustex.uz/",
        schema: {
            "@context": "https://schema.org",
            "@type": ["Organization", "WebSite"],
            "name": "Yustex",
            "url": "https://yustex.uz/",
            "logo": "./src/assets/logoYustex.png",
            "sameAs": [
                "https://www.facebook.com/yustex",
                "https://www.instagram.com/yustex"
            ]
        }
    },
    [PRODUCTION]: {
        canonical: "https://yustex.uz/production",
        schema: {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Yustex Production",
            "url": "https://yustex.uz/production",
            "image": "./src/assets/production/production_s3/DEW06362.jpg",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "г.Ташкент , Мирзо-Улугбекский район, МФУ Чингильды, улица Милий Бог",
                "addressCountry": "UZ"
            },
            "openingHours": "Mo-Fr 09:00-18:00"
        }
    },
    [PRODUCT]: {
        canonical: "https://yustex.uz/product",
        schema: {
            "@context": "https://schema.org",
            "@type": "review",
            "name": "Yustex Products",
            "image": "./src/assets/product/product_s2/p-s2-db-elements/DSC08836.jpg",
            "description": "Yuqori sifatli mato va tekstil mahsulotlari",
            "brand": {
                "@type": "Brand",
                "name": "Yustex"
            }
        }
    },
    [COMPANY]: {
        canonical: "https://yustex.uz/company",
        schema: {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "url": "https://yustex.uz/company",
            "mainEntity": {
                "@type": "Organization",
                "name": "Yustex",
                "url": "https://yustex.uz/",
                "logo": "./src/assets/logoYustex.png",
            }
        }
    },
    [CONTACT]: {
        canonical: "https://yustex.uz/contact",
        schema: {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "url": "https://yustex.uz/contact",
            "mainEntity": {
                "@type": "Organization",
                "name": "Yustex",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+998-55-502-09-90",
                    "contactType": "customer service",
                    "areaServed": "UZ",
                    "availableLanguage": ["Uzbek", "Russian", "English"]
                }
            }
        }
    },
    [BRAND_AKYUS]: {
        canonical: "https://yustex.uz/akyus",
        schema: {
            "@context": "https://schema.org",
            "@type": "Brand",
            "name": "Akyus",
            "url": "https://yustex.uz/akyus",
            "logo": "https://yustex.uz/images/akyus.png"
        }
    },
    [BRAND_LIBERTY]: {
        canonical: "https://yustex.uz/company",
        schema: {
            "@context": "https://schema.org",
            "@type": "Brand",
            "name": "Liberty",
            "url": "https://yustex.uz/company",
            "logo": "https://yustex.uz/images/liberty.png"
        }
    }
};
