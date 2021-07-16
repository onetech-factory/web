import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../assets/styles/components/Contact.css";

const Contact = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <section className="contact" data-aos="fade-up" id="contact">
            <h2 className="contact__title">Contacto</h2>
            <span className="separator">•</span>
            <form action="/" className="contact__form">
                <p>Envianos tu consulta y nos pondremos en contacto!</p>
                <div className="contact__inputs">
                    <input type="text" placeholder="Nombre" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" placeholder="Asunto" />
                </div>
                <textarea name="message" className="contact__textarea" placeholder="Mensaje"></textarea>
                <button>Enviar</button>
            </form>
        </section>
    )
};

export default Contact;