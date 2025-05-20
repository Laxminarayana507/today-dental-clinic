import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
          Welcome to Todays Dental Services, where your comfort, health, and smile are our top priorities. 
          Located at the heart of the community, we combine state-of-the-art technology with compassionate care to
           create a dental experience unlike any other. Whether you're visiting for a routine check-up or a complete smile transformation, 
           our mission is to make every patient feel confident and cared for from the moment they walk through our doors.
        </p>
        <p className="text-justify lg:text-start">
          Our clinic is led by a team of highly skilled and friendly dental professionals who
           are passionate about providing personalized treatment plans tailored to each patient’s
            unique needs. We believe in educating our patients and building trust through transparency 
            and empathy. Our philosophy centers around preventive care and minimally invasive procedures, 
            ensuring long-term oral health while keeping our patients comfortable at every step of their dental journey.
        </p>
        <p className="text-justify lg:text-start">
          We offer a comprehensive range of dental services to meet the needs of individuals and
           families alike. These include preventive care like teeth cleanings and exams, restorative
            treatments such as fillings and crowns, cosmetic dentistry including teeth whitening and 
            veneers, orthodontic solutions like clear aligners and braces, as well as surgical procedures such
             as tooth extractions and implants. At Todays Dental Services, we are committed to delivering beautiful, 
             healthy smiles through safe, effective, and modern dental care.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
