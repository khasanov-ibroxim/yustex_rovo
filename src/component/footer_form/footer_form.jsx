import React, {useState} from 'react';
import "./footer_form.css"
import axios from "axios";
import {message} from "antd";
import {useTranslation} from "react-i18next";

const FooterForm = () => {
    const [tell, setTell] = useState("");
    const [messageApi, contextHolder] = message.useMessage();
    const [disabled, setDisabled] = useState(false);
    const {t} = useTranslation();
    const checkForm = () => {
        setDisabled(true);

        if (!tell || tell.trim().length < 11) {
            messageApi.open({
                type: 'error',
                content: t('errors.tell_error'),
            });
            setDisabled(false);
            return;
        }


        let msg = `Номер телефона: ${tell}\n`;

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
                    setTell('');
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
        <div className={"current-container"}>
            {contextHolder}
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
                    <input type="tel"
                           value={tell}
                           onChange={(e) => setTell(e.target.value)}
                           placeholder={"Телефон"}/>
                    <button disabled={disabled} onClick={checkForm}>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default FooterForm;