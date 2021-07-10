import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";

import "../assets/styles/App.css";


const App = () => {
    return (
        <div className="app">
            <Header />
            <Main />
            <About />
            <Contact />
            <Footer />
        </div>
  );
};

export default App;
