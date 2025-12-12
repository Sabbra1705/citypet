import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers } from 'react-icons/fa';
import logo from "../../assets/images/logo-citypet.webp";

function Header() {
  return (
    <header className="bg-segundo text-white font-poppins font-bold text-2xl shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo o nombre */}
        <div className="text-2xl md:w-1/12 w-1/4 font-bold">
         <img src={logo} alt="" />
        </div>

        {/* Navegación */}
        <nav className="flex gap-6 items-center">
          <Link
            to="/"
            className="hover:text-primero-claro transition-colors flex items-center gap-2"
          >
            <FaHome /> Home
          </Link>
          <Link
            to="/nosotros"
            className="hover:text-primero-claro transition-colors flex items-center gap-2"
          >
            <FaUsers /> Nosotros
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
