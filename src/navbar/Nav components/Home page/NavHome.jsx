import bg from "./images/bg-3.jpg";
import "./HomePage.css";
import { useEffect } from "react";
import WhatWeOffer from "./Home others/whatWeOffer";
import HowItWorks from "../How it works/HowItWorks";

let HomePage = () => {
    useEffect(() => {
        let videoElement = document.getElementById("bg-video");
        if (videoElement) {
            videoElement.playbackRate = 0.9;
        }
        let handleScroll = () => {
            let scrollPosition = window.scrollY;
            let parallaxElement = document.querySelector('.home-page');
            let speedFactor = 0.4;
            parallaxElement.style.backgroundPositionY = `${scrollPosition * speedFactor}px`;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="home-page min-h-screen flex justify-center items-center flex-col">
                <div className="overlay"></div>

                <div className="home-inside home-page-content">
                    <div className="heading mt-16">
                        <h2 className="text-white font-bold text-2xl text-center">Unlock Your Learning Potential with AI-Powered Solutions</h2>
                        <p className="text-white text-center mt-5 text-lg">Personalized learning paths, real-world problem-solving, and AI-driven insights to help you succeed faster.</p>
                    </div>
                    <div className="key-features">
                        <div>
                        </div>
                    </div>
                </div>
            </div>
            <WhatWeOffer />
            <HowItWorks/>
        </div>
    );
};

export default HomePage;
