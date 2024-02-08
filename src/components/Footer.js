import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from './images/logo.svg';

const Footer = () => {
    return (
        <footer className="bg-amber-600 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
                {/* Primera columna: Logo */}
                <div className="flex items-center justify-center mb-4 md:mb-0">
                <Image src={logo} alt="Logo" width={120} height={40} />
                </div>

                {/* Segunda columna: Redes sociales */}
                <div className="flex items-center justify-evenly space-x-4 mb-4 md:mb-0 text-3xl">
                    <a href="#" className="text-blue-400 hover:text-white"><FaFacebook /></a>
                    <a href="#" className="text-blue-300 hover:text-white"><FaTwitter /></a>
                    <a href="#" className="text-red-400 hover:text-white"><FaInstagram /></a>
                </div>

                {/* Tercera columna: Enlaces */}
                <div className="flex items-center justify-center">
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white">Enlace 1</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white">Enlace 2</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white">Enlace 3</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
