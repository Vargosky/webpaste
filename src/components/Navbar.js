import Link from 'next/link';
import logo from './images/logo.svg'
import Image from 'next/image';

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
                <ul className="flex justify-center space-x-6 text-2xl ">
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
                        <Link href="/link3">
                            <div className="text-white hover:underline">Ubicación</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/link4">
                            <div className="text-white hover:underline">+56998989898</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
