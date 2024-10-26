import login from "../../Nav components/Home page/images/login.png";
import career from "../../Nav components/Home page/images/path.png";

import "./HowItWorks.css"

import like from "./images/like.png"
import think from "./images/skill.png"
import path from "./images/path.png"
import test from "./images/testing.png"
import Features from "../Features/Features";

let HowItWorks = () => {
  return (
    <div>
    <div className="how-it-works bg-black min-h-screen min-w-screen">
      <div className="how-it-works-main">
        <h2 className="text-white text-3xl font-bold text-center pb-12 pt-8">Join us</h2>
        <div className="steps w-full mx-auto flex flex-col gap-8 justify-center items-center">
          <div className="flex flex-row items-center gap-8">
            <img src={login} className="log-img w-[500px] h-[400px] rounded-lg" alt="Login" />
            <div className="p-6 bg-dark rounded shadow-md transition-transform transform">
              <h3 className="text-white text-xl font-semibold">1. Sign Up</h3>
              <p className="text-white mt-2">Create an account to start your personalized learning journey.</p>
              <button className='rounded-lg bg-[#3E8989] border text-white  px-6 py-2 text-lg mt-2 hover:bg-[#3E8998] transition duration-300 ease-in-out shadow-lg hover:shadow-xl'>
                Signup
              </button>
            </div>
          </div>
          <div className="flex flex-row items-center gap-8 ">
            <div className="p-6 bg-dark rounded shadow-md transition-transform transform">
              <h3 className="text-white text-xl font-semibold">2. Choose Your Path</h3>
              <p className="text-white mt-2">Select from a variety of learning paths tailored to your goals.</p>
              <button className='rounded-lg bg-[#3E8989] border text-white px-6 py-2 text-lg mt-2 transition duration-300 ease-in-out shadow-lg hover:shadow-2xl hover:bg-[#3E8998]'>
                Learn
              </button>
            </div>
            <img src={career} className="log-img w-[500px] h-[400px] rounded-lg" alt="Choose Path" />

          </div>

          {/* Step 3 (Optional Step) */}
          {/* <div className="flex flex-row items-center gap-8">
            <img src={login} className="log-img w-[300px] h-[400px] rounded-lg" alt="Start Solving" />
            <div className="p-6 bg-dark rounded shadow-md transition-transform transform">
              <h3 className="text-white text-xl font-semibold">3. Start Solving</h3>
              <p className="text-white mt-2">Engage with real-world problems and track your progress.</p>
              <button className='rounded-lg bg-red-600 text-white px-6 py-2 text-lg mt-2 hover:bg-[#F15555] transition duration-300 ease-in-out shadow-lg hover:shadow-xl'>
                Solve
              </button>
            </div>
          </div> */}
        </div>

      </div>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 mt-20 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center pb-8">
    <div className="feat p-6 bg-zinc-900 rounded shadow-md transition-transform transform  flex flex-col justify-evenly h-70">
        <img src={test} className="w-20 mb-4 feat-img" />
        <h3 className="text-xl font-semibold mb-4 text-slate-100">Assessment</h3>
        <p className='text-slate-100'>AI assesses skills and knowledge levels</p>
    </div>
    
    <div className="feat p-6 bg-zinc-900 rounded shadow-md transition-transform transform  flex flex-col justify-evenly h-70">
        <img src={path} className="w-20 mb-4 feat-img" />
        <h3 className="text-xl font-semibold mb-4 text-slate-100">Personalized Learning Paths</h3>
        <p className='text-slate-100'>Learners are guided based on their needs.</p>
    </div>

    <div className="feat p-6 bg-zinc-900 rounded shadow-md transition-transform transform flex flex-col justify-evenly h-70">
        <img src={think} className="w-20 mb-4 feat-img" />
        <h3 className="text-xl font-semibold mb-4 text-slate-100">Real-World Challenges</h3>
        <p className='text-slate-100'>Solve problems that mimic industry scenarios.</p>
    </div>

    <div className="feat p-6 bg-zinc-900 rounded shadow-md transition-transform transform  flex flex-col justify-evenly h-70">
        <img src={like} className="w-20 mb-4 feat-img" />
        <h3 className="text-xl font-semibold mb-4 text-slate-100">Instant Feedback</h3>
        <p className='text-slate-100'>AI provides suggestions and tracks your progress.</p>
    </div>
</div>

      
            
    </div>
    <Features/>
    </div>
  );
};

export default HowItWorks;
