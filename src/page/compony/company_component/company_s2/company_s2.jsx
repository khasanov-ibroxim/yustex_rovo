import React from 'react';
import "./company_s2.css"
import img1 from "@/assets/company/company_s2/DEW05748.jpg"
import img2 from "@/assets/company/company_s2/DEW05864.jpg"
import img3 from "@/assets/company/company_s2/DEW06128.jpg"
import img4 from "@/assets/company/company_s2/DEW06094.jpg"


const CompanyS2 = () => {
    return (
        <div className="company_s2">
            <div className="current-container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-4">
                        <div className="company_s2_item">
                            <div className="company_s2_img">
                                <img src={img1} alt=""/>
                                <div className="company_s2_opacity"></div>
                                <h1> Безупречное Качество</h1>
                            </div>
                            <div className="company_s2_text">
                                <p>От выбора сырья до финишной обработки, каждый этап производства проходит строжайший
                                    контроль, гарантируя превосходные характеристики и долговечность готовой
                                    продукции.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="company_s2_item">
                            <div className="company_s2_img">
                                <img src={img2} alt=""/>
                                <div className="company_s2_opacity"></div>
                                <h1>Современные Технологии</h1>
                            </div>
                            <div className="company_s2_text">
                                <p>Мы постоянно инвестируем в передовое оборудование и инновационные процессы, что
                                    позволяет нам эффективно масштабировать производство, повышать его точность и
                                    предлагать рынку актуальные решения.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-4">
                        <div className="company_s2_item">
                            <div className="company_s2_img">
                                <img src={img3} alt=""/>
                                <div className="company_s2_opacity"></div>
                                <h1>Профессионализм и Опыт</h1>
                            </div>
                            <div className="company_s2_text">
                                <p>Команда "YUSTEX" – это высококвалифицированные специалисты, объединенные общей целью
                                    и глубоким пониманием всех тонкостей текстильного производства.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="company_s2_item">
                            <div className="company_s2_img">
                                <img src={img4} alt=""/>
                                <div className="company_s2_opacity"></div>
                                <h1> Гибкость и Ориентация на Клиента</h1>
                            </div>
                            <div className="company_s2_text">
                                <p>Мы оперативно реагируем на рыночные тенденции и потребности наших партнеров,
                                    предлагая широкий ассортимент трикотажной продукции, отвечающей самым разнообразным
                                    запросам. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyS2;