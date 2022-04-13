import Header from "../components/Header";
import Services from "../components/Services";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";
import Whatsapp from "../components/Whatsapp"
import Proyects from "../components/Proyects";
import Brands from "../components/Brands";
/* import ScrollToTop from "react-scroll-to-top"; */
import "../assets/styles/App.css";


const App = () => {

    return (
        <div className="app">
            <Header />
            <Services />
            <Proyects />
            <About />
            <Brands />
            <Contact />
            <Footer />
            <Whatsapp />
            {/* <ScrollToTop smooth component={<i class="fas fa-arrow-up"></i>} /> */}
        </div >
    );
};

export default App;
