import React from "react";
import "./style.css";

interface Client {
  name: string;
  logo: string; // URL to the logo
}

interface ClientBarProps {
  clients: Client[];
}

const ClientBar: React.FC<ClientBarProps> = ({ clients }) => {
  return (
    <div className="relative overflow-hidden bg-gray-900 py-6">
    {/* Scrolling container */}
    <div className="animate-marquee flex items-center space-x-20">
      {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
        <div
          key={index}
          className="flex-none w-28 h-28 bg-gray-800 rounded-lg p-2 flex justify-center items-center shadow-md"
        >
          <img
            src={client.logo}
            alt={client.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ))}
    </div>
  </div>
  );
};

export default ClientBar;
