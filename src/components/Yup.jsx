import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(2, "Nombre muy corto")
        .max(50, "Nombre muy largo")
        .required("Nombre requerido"),
    email: Yup.string()
        .email("Email invalido")
        .required("Email requerido"),
    mensaje: Yup.string()
        .min(2, "Mensaje muy corto")
});

export default ContactSchema;