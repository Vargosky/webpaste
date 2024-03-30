import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from './images/logo-Damasco.png';

const Footer = () => {
    return (
        <footer className="bg-amber-600 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
                {/* Primera columna: Logo */}
                <div className="flex items-center justify-center mb-4 md:mb-0">
                <Image src={logo} alt="Logo" width={120} height={40} />
                </div>

                {/* Segunda columna: Redes sociales */}
                <div className="flex items-center justify-evenly space-x-4 mb-4 md:mb-0 text-3xl p-5 bg-gray-200 rounded-2xl border border-black">
                    <a href="#" className="text-blue-400 hover:text-white"><FaFacebook /></a>
                    <a href="#" className="text-blue-300 hover:text-white"><FaTwitter /></a>
                    <a href="#" className="text-red-400 hover:text-white"><FaInstagram /></a>
                </div>

                {/* Tercera columna: Enlaces */}
                <div className="flex items-center justify-center">
                    <ul className="space-y-2">
                        <li>
                            <Link href="/products" className="text-gray-800 text-2xl hover:text-white">Productos</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-800 text-2xl hover:text-white">Nuestra Historia</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-800 text-2xl hover:text-white">Trabaja con Nosotros</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
