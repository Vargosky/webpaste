"use client"
import { useRouter } from 'next/navigation'; // Importa useRouter desde next/navigation
import Link from 'next/link';
import { BsCake2Fill } from "react-icons/bs";
import { GrPieChart } from "react-icons/gr";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { PiCookieBold } from "react-icons/pi";
import { pacifico, lobster } from "@/components/font";


const Sidebar = () => {
    const router = useRouter();

    const handleLinkClick = (path) => {
        router.push(path);
    };

    return (
        <div className={`bg-gray-100 text-amber-800 lg:w-64 flex-shrink-0`}>
            <div className="p-4 text-2xl lg:pl-14 tracking-wide">
                
                <ul>
                    <li className="my-10">
                        <div
                            className="text-amber-800 hover:text-white cursor-pointer"
                            onClick={() => handleLinkClick('/products/tortas/')}
                        >
                            <div className='hidden lg:block'>Tortas</div> 
                            <div className='block lg:hidden text-2xl'><BsCake2Fill/></div> 
                        </div>
                    </li>
                    <li className="my-10">
                        <div
                            className="text-amber-800 hover:text-white cursor-pointer"
                            onClick={() => handleLinkClick('/products/kutchen/')}
                        >
                            <div className='hidden lg:block'>Pie / Kutchen</div> 
                            <div className='block lg:hidden text-2xl'><GrPieChart/></div> 
                        </div>
                    </li>
                    <li className="my-10">
                        <div
                            className="text-amber-800 hover:text-white cursor-pointer"
                            onClick={() => handleLinkClick('/products/cake/')}
                        >
                            <div className='hidden lg:block'>Pasteles</div> 
                            <div className='block lg:hidden text-2xl'><LiaBirthdayCakeSolid/></div> 
                        </div>
                    </li>
                    <li className="my-10">
                        <div
                            className="text-amber-800 hover:text-white cursor-pointer"
                            onClick={() => handleLinkClick('/products/boyeria/')}
                        >
                            <div className='hidden lg:block'>Boyería</div> 
                            <div className='block lg:hidden text-2xl'><LiaBirthdayCakeSolid/></div> 
                        </div>
                    </li>
                    <li className="my-10">
                        <div
                            className="text-amber-800 hover:text-white cursor-pointer"
                            onClick={() => handleLinkClick('/products/boyeria/')}
                        >
                            <div className='hidden lg:block'>Galletería</div> 
                            <div className='block lg:hidden text-2xl'><LiaBirthdayCakeSolid/></div> 
                        </div>
                    </li>
                    <li className="my-10">
                        <div
                            className="text-amber-800 hover:text-white cursor-pointer"
                            onClick={() => handleLinkClick('/products/boyeria/')}
                        >
                            <div className='hidden lg:block'>Embasados</div> 
                            <div className='block lg:hidden text-2xl'><LiaBirthdayCakeSolid/></div> 
                        </div>
                    </li>
                    {/* Agrega más enlaces según sea necesario */}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
