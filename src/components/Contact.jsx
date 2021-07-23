import React, { useEffect } from "react";
import Aos from "aos";
import Formik from "formik";
import ContactSchema from "./Yup";
import "aos/dist/aos.css";
import "../assets/styles/components/Contact.css";

const Contact = (props) => {

    // FORMIK VALUES
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
    } = props;

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="contact" data-aos="fade-up" id="contact">
            <h2 className="contact__title">Contacto</h2>
            <span className="separator">•</span>
            <form className="contact__form" onSubmit={handleSubmit}>
                <p>Envianos tu consulta y nos pondremos en contacto!</p>
                <div className="contact__inputs">
                    <input
                        type="nombre"
                        placeholder="Nombre"
                        name="nombre"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <textarea
                    name="mensaje"
                    className="contact__textarea"
                    placeholder="Mensaje"
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                </textarea>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting" : "Submit"}
                </button>
            </form>
        </section>
    )
};

export default Contact;