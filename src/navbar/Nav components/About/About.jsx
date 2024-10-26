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
        <Timeline />
      </div>
    </div>
  );
};

export default About;