import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import About from "../components/About";

import "../assets/styles/App.css";


const App = () => {
    return (
        <div className="app">
            <Header />
            <Main />
            <About />
            <Footer />
        </div>
  );
};

export default App;
