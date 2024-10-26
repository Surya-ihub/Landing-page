import { Route, Routes } from "react-router-dom";
import HomePage from "./navbar/Nav components/Home page/NavHome";
import HowItWorks from "./navbar/Nav components/How it works/HowItWorks";
import Features from "./navbar/Nav components/Features/Features";
import Base from "./Home/Home";
import Contact from "./navbar/Nav components/contact/Contact";
import About from "./navbar/Nav components/About/About";

let Routers = ()=>{
    return (
        <div className="router">
            <Base>
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route path="/how-it-works" element={<HowItWorks/>}/>
                    <Route path="/features" element={<Features/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </Base>
        </div>
    )
}

export default Routers;