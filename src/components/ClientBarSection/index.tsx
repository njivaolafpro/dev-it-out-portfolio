import React from "react";
import ClientBar from "../ClientBar";


const clients = [
  { name: "Emeria", logo: "/logos/Emeria_logo.jpg" },
  { name: "Superprof", logo: "/logos/logo-superprof.png"},
    { name: "France TV", logo: "/logos/ftv.png" },
    { name: "Planity", logo: "/logos/planity.png" },
    { name: "Spaycial", logo: "/logos/spaycial.png" },
    { name: "Bolk", logo: "/logos/bolk.jpeg" },
    { name: "EON Reality", logo: "/logos/eon.jpg" },
  ];
const ClientBarSection: React.FC = () => {
    return (    <div className="items-center justify-center">
    <ClientBar clients={clients} />
  </div>)
}

export default ClientBarSection;