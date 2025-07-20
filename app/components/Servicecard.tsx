import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title }) => {

 
     
    
  return (
    <div className="flex flex-col mt-20 bg-white shadow-2xl p-8 border-b-6 border-blue-800 ">
      <div className="flex justify-center p-8 mb-2">{icon}</div>
      <div className="flex text-blue-800 justify-center font-medium text-xl">{title}</div>
      <div className=" border-blue-800 "></div>
    </div>
  );
};

export default ServiceCard;
