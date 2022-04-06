import React, { useEffect, useState } from "react";
import Aos from "aos";
import axios from "axios"
import "aos/dist/aos.css";
import "../assets/styles/components/Contact.css";

const Contact = () => {

    const [sent, setSent] = useState(false)
    const [message, setMessage] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSend = async (e) => {
        setSent(true)
        try {
            await axios.post("http://localhost:3005/send-email", {
                message, name, email
            })
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


    return (
        <section className="contact" data-aos="fade-up" id="contact">
            <h2 className="contact__title">Contacto</h2>
            <span className="separator">•</span>

            {!sent ? (
                <form className="contact__form" onSubmit={handleSend}>
                    <p>Envianos tu consulta y nos pondremos en contacto!</p>
                    <div className="contact__inputs">
                        <input
                            type="text"
                            placeholder="Nombre"
                            name="nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <textarea
                        name="mensaje"
                        className="contact__textarea"
                        placeholder="Mensaje"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    >
                    </textarea>
                    <button type="submit">Enviar</button>
                </form>
            ) : (
                <h1>Email Sent</h1>
            )}

        </section>
    )
};

export default Contact;