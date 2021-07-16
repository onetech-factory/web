import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";
import ScrollToTop from "react-scroll-to-top";
import Particles from "react-particles-js";
import "../assets/styles/App.css";

const App = () => {
    return (
        <div className="app">
            <Particles
                className="header__particles"
                options={{
                    background: {
                        color: {
                            value: "#ff0000",
                        }
                    }
                }}
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        },
                        "color": {
                            "value": "#000000"
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        }
                    },
                    detectRetina: true,
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} />
            <Header />
            <Main />
            <About />
            <Contact />
            <Footer />
            <ScrollToTop smooth component={<i class="fas fa-arrow-up"></i>} />
        </div>
  );
};

export default App;
