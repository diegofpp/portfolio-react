import React from 'react';
import { FaBars } from 'react-icons/fa';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (

    
    <nav className="sticky top-0 bg-white py-4 px-6 flex items-center justify-between">
      <div className="font-roboto font-bold">Difepor</div>
      {/* Enlaces de navegación */}
      <div className="hidden md:flex items-center justify-center">
        <a
          href="#nosotros"
          className="text-black hover:text-gray-500 mx-4 cursor-pointer"
        >
          Projects
        </a>
        <a
          href="#productos"
          className="text-black hover:text-gray-500 mx-4 cursor-pointer"
        >
          Skills
        </a>
        <a
          href="#contacto"
          className="text-black hover:text-gray-500 mx-4 cursor-pointer"
        >
          Contact
        </a>
      </div>


      <div className="flex items-center space-x-4">
        <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-500 hover:text-gray-700" size={24} />
        </a>
        <a href="https://instagram.com/tu-usuario" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-500 hover:text-gray-700" size={24} />
        </a>
      </div>

{/*             
      <div>
        <button className="text-black focus:outline-none mr-2">ENG</button><span className="text-black mx-2">| </span><button className="text-black focus:outline-none">ES</button>
      </div>  */}

      {/* Icono del menú hamburguesa solo visible en dispositivos móviles */}
      <button className="text-black focus:outline-none md:hidden">
        <FaBars size={20} />
      </button>
    </nav>

    
  );
}

export default Navbar;
