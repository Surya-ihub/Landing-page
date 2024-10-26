// import teamImage from "./images/team.jpg";
import Contact from "../contact/Contact";
import "./About.css";
import Timeline from "./TimeLine";

let About = () => {
  return (
    <div>
      <div className="about-us-div bg-dark min-h-screen py-12 px-8">
        <h1 className="text-white text-2xl font-bold text-center mb-8">Our Mission is to Empowering Learners with AI</h1>
        <p className="text-white text-md text-center mb-16">
          We believe in the power of AI to transform education and equip learners with the skills they need to succeed.
        </p>

        {/* <section className="our-story mb-16 flex justify-center items-center">
        <h2 className="text-white text-3xl font-semibold mb-6 text-center w-1/2">Our Story</h2>
        <p className=" leading-relaxed story-cont w-1/2">
          Our platform was born out of the desire to revolutionize learning. With a focus on personalization and real-world application, we have built an AI-powered platform that adapts to the needs of each learner, helping them achieve their goals faster and more effectively. Our journey started with a vision to tackle traditional educational challenges by making learning accessible, engaging, and results-driven.
        </p>
      </section>

      <section className="our-team mb-16">
        <h2 className="text-white text-3xl font-semibold mb-6">Our Team</h2>
     
        <p className="text-slate-100 text-lg leading-relaxed">
          Behind our platform is a dedicated team of technology experts and AI innovators. 
          Our mission is to continually push the boundaries of education technology to 
          provide better learning experiences and results for all. Each team member brings expertise in artificial intelligence, 
          machine learning, and education, making our platform a trusted choice for learners worldwide.
        </p>
      </section>

      <section className="our-values">
        <h2 className="text-white text-3xl font-semibold mb-6">Our Values</h2>
        <ul className="list-disc list-inside text-slate-100 text-lg leading-relaxed">
          <li>Personalized Learning: We believe every learner is unique and deserves tailored learning experiences.</li>
          <li>Innovation: We are constantly pushing the boundaries of AI and education to provide cutting-edge solutions.</li>
          <li>Results-Driven Education: Our focus is on delivering measurable outcomes that help learners succeed.</li>
        </ul>
      </section> */}
        <Timeline />
      </div>
    </div>
  );
};

export default About;