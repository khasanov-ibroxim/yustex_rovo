import h_s2_1 from "@/assets/production/production_s2/DSC08836.jpg";
import h_s2_2 from "@/assets/production/production_s2/DSC09008.jpg";

import pr_s2_1_edited from "@/assets/production/production_s2/DEW05948.jpg"
import pr_s2_1 from "@/assets/production/production_s2/DEW05789.jpg"
import pr_s2_2 from "@/assets/production/production_s2/DEW06167.jpg"
import pr_s2_3 from "@/assets/production/production_s2/DEW06320.jpg"

import pr_s4_1 from "@/assets/production/production_s4/image_2025-07-07_21-48-18.png"
import pr_s4_1_element from "@/assets/production/production_s4/image_2025-07-07_21-48-31.png"

import pr_s4_2 from "@/assets/production/production_s4/image_2025-07-07_21-48-44.png"
import pr_s4_2_element from "@/assets/production/production_s4/image_2025-07-07_21-48-54.png"

import pr_s4_3 from "@/assets/production/production_s4/image_2025-07-07_21-49-26.png"
import pr_s4_3_element from "@/assets/production/production_s4/image_2025-07-07_21-49-38.png"
import {CONTACT, PRODUCT} from "@/utils/consts.jsx";


export const Production_s2_ind_db = [
    {
        img_url: h_s2_1,
        // title:"Classic T-shirt 200",
        // price:"500"
    },
    {
        img_url: h_s2_2,
        // title:"Classic T-shirt 200",
        // price:"500"
    }
]

export const Production_s2_db = (t) => [
    {
        h1: t("production.production_s2.i1.h1"),
        paragraphs: t("production.production_s2.i1.p"),
        btn: t("production.production_s2.i1.btn"),
        link:CONTACT,
        photo: pr_s2_1_edited
    },
    {
        h1: t("production.production_s2.i2.h1"),
        paragraphs: t("production.production_s2.i2.p"),
        btn: t("production.production_s2.i2.btn"),
        link:PRODUCT,
        photo: pr_s2_1
    },
    {
        h1: t("production.production_s2.i3.h1"),
        paragraphs:t("production.production_s2.i3.p"),
        btn: t("production.production_s2.i3.btn"),
        link:CONTACT,
        photo: pr_s2_2
    },
    {
        h1: t("production.production_s2.i4.h1"),
        paragraphs: t("production.production_s2.i4.p"),
        btn: t("production.production_s2.i4.btn"),
        link:CONTACT,
        photo: pr_s2_3
    }
];


export const Production_s4_db = [
    {
        img_url: [pr_s4_1_element, pr_s4_1]
    },
    {
        img_url: [pr_s4_2_element, pr_s4_2]
    },
    {
        img_url: [pr_s4_3_element, pr_s4_3]
    },

]