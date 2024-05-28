import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

const Header = () => {
  const [activeTab, setActiveTab] = useState("SofaCama");
  const [linePosition, setLinePosition] = useState(0);

  const handleTabClick = (tabName, index) => {
    setActiveTab(tabName);
    setLinePosition(index * 25 + 12.5); // 25% es el ancho de cada enlace, y 12.5% es la mitad de eso
  };

  return (
    <header>
      {/* Title and search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-blue-600 uppercase font-bold text-center my-5">Online Home Store</h1> {/* Título en azul */}
          <p className="text-black-300">28 mayo 2024</p>
        </div>
        <form>
          <div className="w-full relative">
            <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              className="bg-white w-full py-2 pl-10 pr-4 rounded-lg text-gray-800 outline-none"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      {/* Tabs */}
      <nav className="text-gray-100 flex items-center justify-between md:justify-start md:gap-8 border-b-4 border-gray-400 mb-6 relative">
        <div className="absolute left-0 bottom-0 h-1 bg-blue-400 transition-all duration-300" style={{ width: "12.5%", transform: `translateX(${linePosition}%)` }}></div>
        <a
          href="#"
          className={`text-sm text-blue-700 uppercase font-bold text-center my-5 ${activeTab === "SofaCama" ? "text-blue-700" : "text-gray-300 hover:text-blue-700"} transition-all duration-500`}
          onClick={() => handleTabClick("SofaCama", 0)}
        >
          SofaCama
        </a>
        <a
          href="#"
          className={`text-sm text-blue-700 uppercase font-bold text-center my-5 ${activeTab === "Sillas" ? "text-blue-700" : "text-gray-300 hover:text-blue-700"} transition-all duration-500`}
          onClick={() => handleTabClick("Sillas", 1)}
        >
          Sillas
        </a>
        <a
          href="#"
          className={`text-sm text-blue-700 uppercase font-bold text-center my-5 ${activeTab === "Mesas" ? "text-blue-700" : "text-gray-300 hover:text-blue-700"} transition-all duration-500`}
          onClick={() => handleTabClick("Mesas", 2)}
        >
          Mesas
        </a>
        <a
          href="#"
          className={`text-sm text-blue-700 uppercase font-bold text-center my-5 ${activeTab === "Camas" ? "text-blue-700" : "text-gray-300 hover:text-blue-700"} transition-all duration-500`}
          onClick={() => handleTabClick("Camas", 3)}
        >
          Camas
        </a>
      </nav>
    </header>
  );
};

export default Header;
