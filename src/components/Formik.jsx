import Contact from "./Contact";
import ContactSchema from "./Yup";

const WithFormik = () => (
    {
        mapPropsToValues: () => ({ name: "", email: "", mensaje: "" }),
        validationSchema: { ContactSchema },
        handleSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
            }, 1000);
        },
        displayName: "Contact"
    }
)(Contact);

export default WithFormik;
