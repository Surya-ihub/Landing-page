import { useEffect } from "react";
import video from "./bg-video-page-2.mp4";
// import video from "./video-2.mp4";
import "./Feature.css";
import { data } from "./data";
import About from "../About/About";


let Features = () => {
    useEffect(() => {
        let videoElement = document.getElementById("bg-video");
        if (videoElement) {
            videoElement.playbackRate = 0.9;
        }
        let handleScroll = () => {
            let scrollPosition = window.scrollY;
            let parallaxElement = document.querySelector('.feature-page');
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
            <div className="feature-page min-h-screen relative flex flex-col">
                <div className="main-feature pt-14 mt-20 relative text-center">
                    <h2 className="text-white text-2xl">
                        Revolutionary Features for a Smarter Learning Experience
                    </h2>
                    <p className="text-white mt-2">Explore our AI-powered tools designed to accelerate your learning.</p>
                </div>

                <div className="code-collab mt-10">
                    <div className="image-slider">
                        <div className="image-container">
                            {data.map((value, ind) => (
                                <div key={ind} className="image-card">
                                    <div className="left-card">
                                        <img src={value.image} alt="Image" />
                                    </div>
                                    <div className="right-card">
                                        <h2 className="text-white text-2xl">{value.title}</h2>
                                        <p className="text-white transform translate-y-72 transition duration-300 ease-in-out">{value.msg}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>



    );
};

export default Features;
