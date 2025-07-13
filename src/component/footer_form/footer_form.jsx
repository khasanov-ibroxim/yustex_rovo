import React from 'react';
import "./footer_form.css"

const FooterForm = () => {
    return (
        <div className={"current-container"}>
            <div className="footer_form_box">
                <div className="footer_form_box_text">
                    <h1>Заинтересовались?
                    </h1>
                    <p>Это только начало.
                        Советы по выбору тканей, идеи дизайна, примеры нашей продукции и закулисье процесса печати — всё
                        это вы найдёте в нашей рассылке. Подпишитесь и будьте ближе к миру стильной и качественной
                        одежды.</p>
                </div>
                <div className="footer_form_box_input">
                    <input type="email" placeholder={"E-mail"}/>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default FooterForm;