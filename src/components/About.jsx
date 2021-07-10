import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../assets/styles/components/About.css";

const About = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="about" data-aos="fade-up">
            <h2 className="about__title">Acerca de</h2>
            <div className="about__container">
                <div className="about__images">
                    <img src="https://images.pexels.com/photos/7429467/pexels-photo-7429467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="onetech team" className="about__images--background" />
                </div>

                <div className="about__content">
                    <div className="about__text">
                        <h3>Equipo onetech</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio omnis praesentium aut ipsum debitis, excepturi ad nisi dicta asperiores animi possimus alias temporibus numquam blanditiis. Consequuntur fugiat illum voluptates cumque odio rem, molestias qui iure laborum? Possimus autem voluptatibus molestiae.
                        </p>
                    </div>

                    <div className="about__text">
                        <h3>Nuestra misión</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo hic fugit totam iusto, commodi atque doloremque, necessitatibus suscipit officiis autem magni quasi provident adipisci deserunt fuga non.
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