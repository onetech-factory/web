import React, { useEffect, useState } from "react";
import Aos from "aos";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs, { init } from 'emailjs-com';
import axios from 'axios'
import Swal from 'sweetalert2';
import "aos/dist/aos.css";
import "../assets/styles/components/Contact.css";

init("user_ItTEUboVgoO9qq6U1wSsJ");

const contactSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(2, "Nombre muy corto")
        .max(50, "Nombre: Maximo 50 caracteres")
        .required("Nombre Requerido"),
    correo: Yup.string()
        .email("Correo Invalido")
        .required("Correo Requerido"),
    mensaje: Yup.string()
        .min(10, "Mensaje muy corto")
        .max(400, "Mensaje: Maximo 400 caracteres")
        .required("Mensaje Requerido")
});

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

    const formik = useFormik({
        initialValues: { nombre: "", correo: "", mensaje: "", },
        validationSchema: contactSchema,
        onSubmit: (values, { setSubmitting, resetForm }) => {
            emailjs.send('gmail', 'template_nuyel5o', values)
                .then(function () {
                    console.log('SUCCESS!');
                    Swal.fire({
                        title: "Mensaje enviado!",
                        text: "Pronto nos pondremos en contacto",
                        icon: "success",
                        confirmButtonColor: "#fca311"
                    })
                    setSubmitting(false);
                    resetForm();
                }, function (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salio mal!',
                        confirmButtonColor: "#fca311"
                    })
                    setSubmitting(false);
                    resetForm();
                });
        }
    })

    return (
        <section className="contact" data-aos="fade-up" id="contact">
            <h2 className="contact__title">Contacto</h2>
            <span className="separator">•</span>

            <form onSubmit={formik.handleSubmit} className="contact__form">
                <div className="contact__inputs">
                    <input
                        name="nombre"
                        type="text"
                        placeholder="Nombre"
                        onChange={formik.handleChange}
                        value={formik.values.nombre}
                        className={formik.errors.nombre && formik.touched.nombre && "input-invalid"}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                        name="correo"
                        type="text"
                        placeholder="Correo electronico"
                        onChange={formik.handleChange}
                        value={formik.values.correo}
                        className={formik.errors.correo && formik.touched.correo && "input-invalid"}
                    />
                </div>
                <textarea
                    name="mensaje"
                    placeholder="Mensaje"
                    onChange={formik.handleChange}
                    value={formik.values.mensaje}
                    className={formik.errors.mensaje && formik.touched.mensaje ? "contact__textarea input-invalid" : "contact__textarea"}
                />
                <div className="contact__errors">
                    {formik.touched.nombre && formik.errors.nombre && <div>{formik.errors.nombre}</div>}
                    {formik.touched.correo && formik.errors.correo && <div>{formik.errors.correo}</div>}
                    {formik.touched.mensaje && formik.errors.mensaje && <div>{formik.errors.mensaje}</div>}
                </div>
                <button type="submit" disabled={formik.isSubmitting}>Enviar</button>
            </form>
        </section>
    )
};

export default Contact;