import React from "react";
import "../assets/styles/components/Contact.css";

const Contact = () => (
    <section className="contact">
        <h2 className="contact__title">Contacto</h2>
        <form action="/" className="contact__form">
            <p>Envianos tu consulta</p>
            <div className="contact__inputs">
                <input type="text" placeholde="Nombre" />
                <input type="text" placeholde="Asunto" />
            </div>
            <input type="textarea" placeholder="Mensaje" />
            <button>Enviar</button>
        </form>
    </section>
);

export default Contact;