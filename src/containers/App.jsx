import Header from "../components/Header";
import Services from "../components/Services";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";
/* import ScrollToTop from "react-scroll-to-top"; */
import "../assets/styles/App.css";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Services />
            <About />
            <Contact />
            <Footer />
            <a
                href="https://wa.me/5491133236103"
                className="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i class="fa fa-whatsapp whatsapp-icon"></i>
            </a>
            {/* <ScrollToTop smooth component={<i class="fas fa-arrow-up"></i>} /> */}
        </div >
    );
};

export default App;
