import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../assets/styles/components/Main.css";

const Main = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <section className="main" data-aos="flip-left">
            <h2 className="main__title">Servicios</h2>
            <div className="main__cards">
                <div className="main__card">
                    <i class="fas fa-desktop"></i>
                    <h3>Paginas web</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae commodi architecto voluptas eum quo quibusdam, totam nostrum exercitationem magnam, repellat mollitia rerum id nisi impedit ut nihil rem omnis optio reiciendis cupiditate doloremque. Dignissimos sit id temporibus vitae nobis, incidunt, maiores ipsam sint soluta impedit harum blanditiis aut laboriosam assumenda.</p>
                </div>
                <div className="main__card">
                    <i class="fas fa-mobile-alt"></i>
                    <h3>Adaptadas a móviles</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae commodi architecto voluptas eum quo quibusdam, totam nostrum exercitationem magnam, repellat mollitia rerum id nisi impedit ut nihil rem omnis optio reiciendis cupiditate doloremque. Dignissimos sit id temporibus vitae nobis, incidunt, maiores ipsam sint soluta impedit harum blanditiis aut laboriosam assumenda.</p>
                </div>
                <div className="main__card">
                    <i class="fas fa-clipboard-check"></i>
                    <h3>Excelente calidad</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae commodi architecto voluptas eum quo quibusdam, totam nostrum exercitationem magnam, repellat mollitia rerum id nisi impedit ut nihil rem omnis optio reiciendis cupiditate doloremque. Dignissimos sit id temporibus vitae nobis, incidunt, maiores ipsam sint soluta impedit harum blanditiis aut laboriosam assumenda.</p>
                </div>
            </div>
        </section>
    );
};

export default Main;