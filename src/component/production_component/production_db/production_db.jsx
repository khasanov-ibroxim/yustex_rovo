import h_s2_1 from "@/assets/production/production_s2/image_2025-07-07_21-35-45.png";
import h_s2_2 from "@/assets/production/production_s2/image_2025-07-07_21-36-02.png";

import pr_s2_1 from "@/assets/production/production_s2/DEW05776.jpg"
import pr_s2_2 from "@/assets/production/production_s2/DEW06167.jpg"
import pr_s2_3 from "@/assets/production/production_s2/DEW06318.jpg"

import pr_s4_1 from "@/assets/production/production_s4/image_2025-07-07_21-48-18.png"
import pr_s4_1_element from "@/assets/production/production_s4/image_2025-07-07_21-48-31.png"

import pr_s4_2 from "@/assets/production/production_s4/image_2025-07-07_21-48-44.png"
import pr_s4_2_element from "@/assets/production/production_s4/image_2025-07-07_21-48-54.png"

import pr_s4_3 from "@/assets/production/production_s4/image_2025-07-07_21-49-26.png"
import pr_s4_3_element from "@/assets/production/production_s4/image_2025-07-07_21-49-38.png"


export const Production_s2_ind_db = [
    {
        img_url:h_s2_1,
        // title:"Classic T-shirt 200",
        // price:"500"
    } ,
    {
        img_url:h_s2_2,
        // title:"Classic T-shirt 200",
        // price:"500"
    }
]

export const Production_s2_db =[
    {
        h1:"Customize it in the Studio",
        paragraphs:[
            "After recovering from the shock of widely surpassed expectations, it’s time to materialize your vision and head to the Assembly Studio to design your products.",
            "Our proprietary software is very intuitive to use, allowing you to fully customize each item to meet your requirements. Choose the color, upload graphic and logo files and get a preview of the final product before ordering.",
            "The software automatically applies quantity discounts and provides an estimated shipping date depending on the selected options.",
        ],
        photo:pr_s2_1
    },
    {
        h1:"Submit Production Order",
        paragraphs:[
            "Once your design is finalized and your order has been placed, our sales team will contact you to confirm that your order has gone into production and to go over any questions you may have.",

            "Our software integrates directly with our supplier network, meaning the moment you place your order they receive a customized tech pack with all the information, ready to go into production.",

            "This optimized process along with a dedicated team of experts is part of why we are able to provide so quick lead times.",
        ],
        photo:pr_s2_2
    },
    {
        h1:"Receive your premium goods",
        paragraphs:[
            "We provide fast lead times ranging from 3 to 4 weeks depending on the level of customization of your items. You will receive periodical updates throughout the production process as your order goes through different stages.",

            "Our supply chain integration allows for full traceability of the process, meaning you know where your goods are at all times. Once your order is ready, we will ship it to the address provided at the time of your order.",

        ],
        photo:pr_s2_3
    },
]


export const Production_s4_db = [
    {
        img_url:[pr_s4_1_element , pr_s4_1]
    },
    {
        img_url:[pr_s4_2_element , pr_s4_2]
    },
    {
        img_url:[pr_s4_3_element , pr_s4_3]
    },

]