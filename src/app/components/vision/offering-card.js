import React from "react";

function Offering({ iconClass, description }) {
  return (
    <div className="offering bg-white bg-opacity-75 shadow-lg shadow-gray-500 backdrop-blur-xl rounded-2xl flex flex-col items-center p-4 m-4">
      <i className={`${iconClass} custom-icon text-5xl mb-4`}></i>
      <p className="text-center text-base md:text-lg leading-6 tracking-wide font-sans text-white ">{description}</p>
    </div>
  );
}

export default Offering;
