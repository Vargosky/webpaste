"use client"
import { Inter } from "next/font/google";
import Sidebar from "../../components/Sidebar"; // Importa el componente de la barra lateral
import RotatingText from "@/components/RotatingText";




const inter = Inter({ subsets: ["latin"] });

export default function ProductLayout({ children }) {

    const textos = {
        texto1: "Selecciona la categoría que más te guste",

    }


    return (

        <div className="justify-center mx-auto">
            <div className="flex">
                {/* Barra lateral */}
                <Sidebar />

                {/* Contenido principal */}
                <div className="flex flex-col w-full">
                    {/* Aquí puedes agregar una barra de navegación o cualquier otro componente adicional */}
                    <div className="bg-gray-100 p-4 text-amber-800">
                    <RotatingText texts={[textos.texto1]} />

                    </div>

                    {/* Contenido */}
                    <div className="p-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

