import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaHome, FaUser, FaCog} from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { useAuthStore } from "../../store/AuthStore";
import { Link, useLocation } from "react-router-dom";


export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { signout } = useAuthStore();

  return (
    <div className="flex">
      <div
        className={`h-screen bg-gray-900 text-white transition-all duration-300 ${
          isOpen ? "w-72" : "w-16"
        } relative`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-5 top-5 bg-gray-900 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition"
        >
          {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </button>


        <nav className="mt-10 space-y-4 ">
        <div className={`logoSidebar ml-2 ${isOpen ? '' : 'espacio'}`}></div>
        <p className={` text-white-200 font-extrabold mb-4 drop-shadow-lg ml-3 flex items-center ${isOpen ? '' : 'hidden'}`}>
           EcoControl
        </p>
          <NavItem icon={<FaHome />} text="Home" to="/" isOpen={isOpen} />
          <NavItem icon={<FaCog />} text="Configuración" to="/configuracion" isOpen={isOpen} />
          <NavItem icon={<FaUser />} text="Cuenta" to="/cuenta" isOpen={isOpen} />
          <NavItem icon={<TbLogout2 />} onClick={signout} text="Logout" isOpen={isOpen} />
        </nav>
      </div>
    </div>
  );
}

function NavItem({ icon, text, isOpen, onClick, to }) {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  return (
    <Link to={to}>
      <div
        onClick={onClick}
        className={`flex items-center space-x-3 p-3 hover:bg-gray-700 cursor-pointer transition ${
          isActive ? 'active-item-sidebar' : ''
        }`}
      >
        {icon}
        {isOpen && <span className="text-sm">{text}</span>}
      </div>
    </Link>
  );
}
