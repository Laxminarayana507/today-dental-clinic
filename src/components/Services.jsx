import React from "react";
import Button from "../layouts/Button";
//import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
//import { MdHealthAndSafety } from "react-icons/md";
import { FaTooth, FaSmile, FaTeethOpen } from "react-icons/fa";
import { GiToothbrush } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";




const Services = () => {
  const icon1 = (
    <FaTooth size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
   const icon3 = (
    <GiToothbrush size={35} className=" text-backgroundColor" />
  );
  const icon4 = (
    <FaTeethOpen size={35} className=" text-backgroundColor" />
  );
  const icon5 = (
    <FaSmile size={35} className=" text-backgroundColor" />
  );
  const icon6 = <FaTeethOpen size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Advanced dental care for you and your family in a comfortable, modern environment.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className=" flex flex-col  lg:flex-row gap-10 pt-20">
        <ServicesCard icon={icon1} title="Prophylaxis" />
        <ServicesCard icon={icon2} title="Tooth Fillings" />
        <ServicesCard icon={icon3} title="Root Canal Treatment" />
        <ServicesCard icon={icon4} title="Orthodontics" />
        <ServicesCard icon={icon5} title="Teeth Whitening" />
        <ServicesCard icon={icon6} title="Dental Implants" />
      </div>
    </div>
  );
};

export default Services;
