import React, { useEffect } from "react";
import Card from "./Card";
import Aos from "aos";
import "aos/dist/aos.css";
import "../assets/styles/components/Main.css";

const Main = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <section className="main" data-aos="fade-up" id="main">
            <h2 className="main__title">Servicios</h2>
            <div className="main__cards">
                <Card 
                    icon="fas fa-desktop"
                    title="Paginas web"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae commodi architecto voluptas eum quo quibusdam, totam nostrum exercitationem magnam, repellat mollitia rerum id nisi impedit ut nihil rem omnis optio reiciendis cupiditate doloremque. Dignissimos sit id temporibus vitae nobis, incidunt, maiores ipsam sint soluta impedit harum blanditiis aut laboriosam assumenda."
                />
                <Card 
                    icon="fas fa-mobile-alt"
                    title="Adaptadas a móviles"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae commodi architecto voluptas eum quo quibusdam, totam nostrum exercitationem magnam, repellat mollitia rerum id nisi impedit ut nihil rem omnis optio reiciendis cupiditate doloremque. Dignissimos sit id temporibus vitae nobis, incidunt, maiores ipsam sint soluta impedit harum blanditiis aut laboriosam assumenda."
                />
                <Card 
                    icon="fas fa-clipboard-check"
                    title="Excelente calidad"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae commodi architecto voluptas eum quo quibusdam, totam nostrum exercitationem magnam, repellat mollitia rerum id nisi impedit ut nihil rem omnis optio reiciendis cupiditate doloremque. Dignissimos sit id temporibus vitae nobis, incidunt, maiores ipsam sint soluta impedit harum blanditiis aut laboriosam assumenda."
                />
            </div>
        </section>
    );
};

export default Main;