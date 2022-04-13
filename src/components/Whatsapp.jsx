import { useState } from "react";

const Whatsapp = () => {

    const [scroll, setScroll] = useState(0);;

    window.onscroll = () => {
        let y = window.scrollY;
        setScroll(y);
    };

    return (
        <>
            {
                scroll > 600 && (
                    <a
                        href="https://wa.me/5491133236103"
                        className="whatsapp_float"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-whatsapp whatsapp-icon"></i>
                    </a>
                )
            }
        </>
    )
}

export default Whatsapp;