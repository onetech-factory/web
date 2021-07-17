import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../assets/styles/components/About.css";

const About = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="about" data-aos="fade-up" id="about">
            <h2 className="about__title">Quiénes somos</h2>
            <span className="separator">•</span>
            <div className="about__container">
                <div className="about__images">
                    <img src="https://images.pexels.com/photos/7429467/pexels-photo-7429467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="onetech team" className="about__images--background" />
                </div>

                <div className="about__content">
                    <div className="about__text">
                        <h3>Equipo onetech</h3>
                        <p>
                            Somos un equipo de profesionales enamorados de nuestro trabajo: brindar soluciones digitales en Internet. Nos involucramos totalmente y acompañamos a cada uno de nuestros clientes para obtener el mejor resultado. <br /> <span>¡Trabajemos juntos!</span>.
                        </p>
                    </div>

                    <div className="about__text">
                        <h3>Nuestra misión</h3>
                        <p>
                            Nuestra filosofía de trabajo consiste en estar comprometidos con nuestros clientes, resolviendo sus problemas, asesorandolo y llevando su idea al siguiente nivel. Por eso ofrecemos nuestros servicios con un valor agregado: el trato cercano, transparente y eficaz.
                        </p>
                        <div className="about__links">
                            <a href="/"><i className="fab fa-linkedin"></i></a>
                            <a href="/"><i className="fas fa-envelope-square"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;