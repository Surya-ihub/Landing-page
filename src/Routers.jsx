
import HomePage from "./navbar/Nav components/Home page/NavHome";
import HowItWorks from "./navbar/Nav components/How it works/HowItWorks";
import Features from "./navbar/Nav components/Features/Features";
import Base from "./Home/Home";
import Contact from "./navbar/Nav components/contact/Contact";
import About from "./navbar/Nav components/About/About";

let Routers = () => {
    return (
        <div className="router">
            <Base>

                <HomePage />
                <HowItWorks />
                <Features />
               
                <About />
                <Contact />

            </Base>
        </div>
    )
}

export default Routers;