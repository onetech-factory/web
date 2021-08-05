import React, { useEffect } from "react";
import Aos from "aos";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import "aos/dist/aos.css";
import "../assets/styles/components/Contact.css";

const contactSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(2, "Mínimo 2 caracteres")
        .max(50, "Máximo 50 caracteres")
        .required("Campo obligatorio"),
    email: Yup.string()
        .email("Correo invalido")
        .required("Campo obligatorio"),
    mensaje: Yup.string()
        .min(10, "Mínimo 10 caracteres")
        .max(400, "Máximo 50 caracteres")
        .required("Campo obligatorio")
});

const handleClick = (e) => {
    e.preventDefault();
    console.log("Se detuvo el envio");
}

const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="contact" data-aos="fade-up" id="contact">
            <h2 className="contact__title">Contacto</h2>
            <span className="separator">•</span>

            <Formik
                initialValues={{ nombre: "", email: "", mensaje: "" }}
                validationSchema={contactSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {
                    ({
                        values,
                        errors,
                        touched,
                        isSubmitting
                    }) => (
                        <form className="contact__form">
                            <p>Envianos tu consulta y nos pondremos en contacto!</p>
                            <div className="contact__inputs">
                                <Field name="nombre" input="input" placeholder="Nombre" />
                                {
                                    errors.nombre && touched.nombre ? (
                                        <span>{errors.name}</span>
                                    ) : null
                                }
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Field name="email" input="input" placeholder="Correo electronico" />
                                {
                                    errors.email && touched.email ? (
                                        <small>{errors.email}</small>
                                    ) : null
                                }
                            </div>
                            <Field name="mensaje" input="textarea" placeholder="Mensaje" className="contact__textarea" />
                            {
                                errors.mensaje && touched.mensaje ? (
                                    <small>{errors.mensaje}</small>
                                ) : null
                            }
                            <small>{errors.mensaje}</small>
                            <button type="submit" disabled={isSubmitting} onClick={handleClick}>
                                Enviar
                            </button>
                        </form>
                    )
                }
            </Formik>
        </section>
    )
};

export default Contact;