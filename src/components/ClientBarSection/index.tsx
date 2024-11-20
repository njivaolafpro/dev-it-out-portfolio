import React from "react";
import ClientBar from "../ClientBar";


const clients = [
    { name: "France TV", logo: "https://www.france.tv/image/logo/1000/1000/l/l/3/07d5df2f-phpins3ll.png" },
    { name: "Planity", logo: "/logos/client-b.png" },
    { name: "Emeria", logo: "/logos/client-c.png" },
    { name: "Spaycial", logo: "/logos/client-d.png" },
    { name: "Bolk", logo: "/logos/client-d.png" },
    { name: "EON Reality", logo: "/logos/client-d.png" },
  ];
const ClientBarSection: React.FC = () => {
    return (    <div className="items-center justify-center">
    <ClientBar clients={clients} />
  </div>)
}

export default ClientBarSection;