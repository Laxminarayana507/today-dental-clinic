import React,{useState} from "react";
import Button from "../layouts/Button";
import Contact from "../models/Contact";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Your Smile, Our Priority
        </h1>
        <p>
          Advanced dental care for you and your family in a comfortable, modern environment.
        </p>

        
        {/*<Button title="Book Appointment"/>*/}
         <button
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Book Appointment
            </button>
      </div>
      {showForm && <Contact closeForm={closeForm} />}
    </div>
  );
};

export default Home;
