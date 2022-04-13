import { useEffect, useState } from 'react'
import Header from "../components/Header";
import Services from "../components/Services";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";
import Whatsapp from "../components/Whatsapp"
/* import ScrollToTop from "react-scroll-to-top"; */
import "../assets/styles/App.css";


const App = () => {

    const [scroll, set_scroll] = useState(0);

    window.onscroll = () => {
        let y = window.scrollY;
        set_scroll(y)
    };

    return (
        <div className="app">
            <Header />
            <Services />
            <About />
            <Contact />
            <Footer />
            {
                scroll > 600 && <Whatsapp />
            }

            {/* <ScrollToTop smooth component={<i class="fas fa-arrow-up"></i>} /> */}
        </div >
    );
};

export default App;
