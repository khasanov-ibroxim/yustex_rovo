import React from 'react';
import "./footer_form.css"

const FooterForm = () => {
    return (
        <div className={"current-container"}>
            <div className="footer_form_box">
                <div className="footer_form_box_text">
                    <h1>Interested? <br/>
                        That’s just the start.
                    </h1>
                    <p>Exclusive news, sneak peaks on new launches...and more. Signing up is the only way to find out!
                        Join our list and stay tuned.</p>
                </div>
                <div className="footer_form_box_input">
                    <input type="email" placeholder={"E-mail address"}/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default FooterForm;