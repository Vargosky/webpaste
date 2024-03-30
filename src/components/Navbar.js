"use client"
import Link from 'next/link';
import logo from './images/logo-Damasco.png';
import logopequeño from './images/logo-pequeno.png'
import Image from 'next/image';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Navbar = () => {
    return (
        <nav className="bg-amber-600">
            <Link href="/">
                        <div className="flex items-center justify-center">
            <Image src={logo} alt="Logo" width={120} height={40} />
            </div>
            <h1 className='text-6xl font-bold text-center'> Damasco</h1>
            <div className="text-center mb-4">
                <p className=" text-xl">Tradición de calidad </p>
            </div>
            </Link>

            <div className="text-center">
                <ul className="flex justify-center space-x-3 px-5 lg:space-x-6 text-2xl ">
                    <li>
                        <Link href="/products">
                            <div className="text-white hover:underline">Productos</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/link2">
                            <div className="text-white hover:underline">Nuestra Historia</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/link4">
                            <div className="text-white hover:underline">Compromiso de Calidad</div>
                        </Link>
                    </li>
                </ul>
            </div>
            <FloatingWhatsApp
            accountName='Damasco'
            phoneNumber='+56948995994'
            statusMessage='tipicamente responde en 1 hora'
            chatMessage='Hola, Bienvenido Damasco, Que te gustaría ordenar?'
            avatar='/images/logo-pequeno.png'
            />
        </nav>
    );
};

export default Navbar;
