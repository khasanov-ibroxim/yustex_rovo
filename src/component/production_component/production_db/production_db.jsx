import h_s2_1 from "@/assets/production/production_s2/DSC08836.jpg";
import h_s2_2 from "@/assets/production/production_s2/DSC09008.jpg";

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

export const Production_s2_db = [
    {
        h1: "Закройный отдел",
        paragraphs: [
            `Наш закройный цех оснащён тремя передовыми технологиями: автоматической раскройной машиной, ручной резкой и системой автоматического настила.
Здесь каждый день выполняется до 70 000 раскроев — это сердце будущей одежды, где важна каждая линия.`,
            `Перед началом работы специалисты тщательно проверяют качество полотна и проводят тесты совместно с модельно-конструкторским отделом, строго соблюдая международные стандарты.`,
            `Ответственность за безупречный результат начинается с первого разреза — и мы это прекрасно знаем.`,
        ],
        btn:"Продукция",
        photo: pr_s2_1
    },
    {
        h1: "Швейный отдел",
        paragraphs: [
            `Наш швейный цех ежедневно выпускает от 40 000 до 70 000 готовых изделий базовых моделей — быстро, чётко и стабильно.`,

            `За качеством следят квалифицированные специалисты, а в производстве используются современные швейные машины последних моделей.`,

            `Мы создаём весь спектр трикотажной одежды для женщин, мужчин и детей: от футболок и спортивных костюмов до пижам, юбок, поло и легинсов.
Каждое изделие проходит путь от точного кроя до идеального шва — с вниманием к деталям и высоким стандартом качества.`,
        ],
        btn:"Свяжитесь",
        photo: pr_s2_2
    },
    {
        h1: "Гладильный отдел",
        paragraphs: [
            `Гладильный участок — это заключительный этап, где каждая деталь обретает безупречный вид.
Здесь работают профессионалы, владеющие современным оборудованием и точной технологией обработки.`,

            `Благодаря правильной температуре, давлению и аккуратности, изделия приобретают презентабельный вид и готовы к упаковке или отправке.
Мы придаём значение каждому изгибу ткани — ведь именно из мелочей складывается ощущение качества.`,

        ],
        btn:"Контакты",
        photo: pr_s2_3
    },
]


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