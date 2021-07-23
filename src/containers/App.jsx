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
            {/* <ScrollToTop smooth component={<i class="fas fa-arrow-up"></i>} /> */}
        </div>
  );
};

export default App;
