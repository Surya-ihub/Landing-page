import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState, useEffect } from "react";

let NavBar = () => {
    let [bgColor, setBgColor] = useState("bg-transparent-clr");

    let handleScroll = () => {
        if (window.scrollY > 50) {
            setBgColor("bg-black-clr");
        } else {
            setBgColor("bg-transparent-clr");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`p-0 m-0 w-full fixed top-0 z-50 `}>
            <div className={`main-nav ${bgColor}`}>
                <div className="flex flex-row justify-start gap-20 items-center h-20 px-6">
                    <div>
                        <h2 className="text-white text-2xl font-bold">Learn XP!</h2>
                    </div>
                    <nav className="flex space-x-6">
                        <NavLink 
                            exact="true"
                            to="/"
                            className={({ isActive }) => 
                                isActive ? "text-white font-semibold active border-b-2" : "text-neutral-300 hover:text-neutral-50"
                            }
                        >
                            <span>Home</span>
                        </NavLink>
                        <NavLink 
                            to="/how-it-works" 
                            className={({ isActive }) => 
                                isActive ? "text-white font-semibold active border-b-2" : "text-neutral-300 hover:text-neutral-50"
                            }
                        >
                            <span>How it works</span>
                        </NavLink>
                        <NavLink 
                            to="/features" 
                            className={({ isActive }) => 
                                isActive ? "text-white font-semibold active border-b-2" : "text-neutral-300 hover:text-neutral-50"
                            }
                        >
                            <span>Features</span>
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => 
                                isActive ? "text-white font-semibold active border-b-2" : "text-neutral-300 hover:text-neutral-50"
                            }
                        >
                            <span>About</span>
                        </NavLink>
                        <NavLink 
                            to="/contact" 
                            className={({ isActive }) => 
                                isActive ? "text-white font-semibold active border-b-2" : "text-neutral-300 hover:text-neutral-50"
                            }
                        >
                            <span>Contact</span>
                        </NavLink>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
