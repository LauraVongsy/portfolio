import { LanguageProvider } from "./containers/Language";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./index.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
    return (
        <LanguageProvider>
            <div>
                <Navbar />
                <Home />
                <About />
                <Skills />
                <Work />
                <Contact />
            </div>
        </LanguageProvider>
    );
}

export default App;
