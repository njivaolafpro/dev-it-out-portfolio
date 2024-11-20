import React from "react";
import ClientBar from "../ClientBar";


const clients = [
    { name: "Client A", logo: "https://www.france.tv/images/responsive/logos/channels/francetv-desktop.svghttps://www.france.tv/image/logo/1000/1000/l/l/3/07d5df2f-phpins3ll.png" },
    { name: "Client B", logo: "/logos/client-b.png" },
    { name: "Client C", logo: "/logos/client-c.png" },
    { name: "Client D", logo: "/logos/client-d.png" },
  ];
const ClientBarSection: React.FC = () => {
    return (    <div className="items-center justify-center">
    <ClientBar clients={clients} />
  </div>)
}

export default ClientBarSection;