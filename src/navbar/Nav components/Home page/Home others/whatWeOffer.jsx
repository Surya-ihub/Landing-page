import React from 'react';
import './whatWeOffer.css';


let WhatWeOffer = () => {
    return (
        <div className="what-we-offer py-12">
            <div className="mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-white">What We Offer</h2>
                <p className="text-lg mb-12 text-slate-100">
                    Discover our unique features designed to enhance your learning experience.
                </p>
                <div className="features-grid bg-black">
                    <div className="feature-item p-6 bg-zinc-900 rounded shadow-md transition-transform transform hover:scale-105 flex flex-col justify-evenly">
                        <h3 className="text-xl font-semibold mb-4 text-slate-100">Personalized Learning Paths</h3>
                        <p className='text-slate-100'>
                            Our platform tailors learning content based on your progress and goals, ensuring you receive
                            the most relevant material at the right time.
                        </p>
                    </div>
                    <div className="feature-item p-6 bg-zinc-900 rounded shadow-md transition-transform transform hover:scale-105 flex flex-col justify-evenly">
                        <h3 className="text-xl font-semibold mb-4 text-slate-100">Real-World Problems</h3>
                        <p className='text-slate-100'>
                            Engage with practice problems based on real-world scenarios to develop relevant skills and
                            prepare for challenges you'll face in your career.
                        </p>
                    </div>
                    <div className="feature-item p-6 bg-zinc-900 rounded shadow-md transition-transform transform hover:scale-105 flex flex-col justify-evenly">
                        <h3 className="text-xl font-semibold mb-4 text-slate-100">Instant Feedback and Progress Tracking</h3>
                        <p className='text-slate-100'>
                            Receive immediate feedback on your code and track your improvement over time with detailed
                            analytics to help you stay on the right path.
                        </p>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default WhatWeOffer;



// let data = [
//     {
//       image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjgyMTkyMXw&ixlib=rb-4.0.3&q=80&w=1080",
//       msg: "Create a collaborative coding environment by generating a unique room link with a single click. Share the link with others to edit code together in real-time.",
//       title:"Code Collaborator"
//     },
//     {
//       image: "https://img.freepik.com/free-vector/human-robot-interaction-experience-with-programmable-platform-isometric-background-composition-with-humanoid-smartphone-screen_1284-32433.jpg",
      
//       msg:" Our website features intelligent AI that provides helpful code suggestions, automatically finds and fixes common errors, and offers easy-to-understand explanations and tutorials to support your learning. ",
//       title: "AI Assistance",
//     },
//     {
//       image: "https://res.cloudinary.com/di0bpbikl/image/upload/v1729254818/jq8foegrdrgdi2lecnqz.png",
//       msg: "Tackle real-world coding challenges with our curated set of problems that simulate actual scenarios you may encounter in the tech industry. Our platform provides hands-on experience in solving practical coding issues, preparing you for job interviews and real-life projects.",
//       title:"Real World problems"
//     },
//     {
//       image: "https://img.freepik.com/free-vector/gradient-glossary-illustration_23-2150261254.jpg",
//       msg: "Enhance your coding skills with our interactive platform, where you can practice coding in real-time. Our website offers a variety of coding challenges and exercises designed to help you learn and improve your programming abilities, all while receiving instant feedback and guidance.",
//       title:"Learn and Practice"
//     }
//   ]

{/* <div className="code-collab">
<div className="image-slider">
  <div className="image-container">
    {data.map((value, ind) => (
      <div key={ind} className="image-card">
        <div className="left-card">
          <img src={value.image} alt="Image" />
        </div>
        <div className="right-card">
          <h2>{value.title}</h2>
          <p>{value.msg}</p>
        </div>
      </div>
    ))}
  </div>
</div>
</div> */}