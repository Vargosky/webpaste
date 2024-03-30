"use client"
import { Inter } from "next/font/google";
import Sidebar from "../../components/Sidebar"; // Importa el componente de la barra lateral
import RotatingText from "@/components/RotatingText";
import MarqueeText from "@/components/MarqueeText";

import { catalogoTorta, catalogoKutchen } from '../data/products';
import { useState } from "react";






const inter = Inter({ subsets: ["latin"] });

export default function ProductLayout({ children }) {

    const textos = {
        texto1: "Nos complace invitarlos a dar un paseo por nuestro delicioso rincón de felicidad, donde las tortas y los pasteles no solo son un festín para el paladar, sino también una obra de arte para la vista. Cada bocado está imbuido de amor, dedicación y los ingredientes más frescos, prometiendo no solo deleitar tus sentidos sino también crear un momento inolvidable.",

    }


    const [listado, setListado] = useState(null);

    return (

        <div className="justify-center mx-auto">
            <div className="flex">
                {/* Barra lateral */}
                <Sidebar listado={listado} setListado={setListado} />

                {/* Contenido principal */}
                <div className="flex flex-col w-full">
                    {/* Aquí puedes agregar una barra de navegación o cualquier otro componente adicional */}
                    {/* <div className="bg-gray-100 p-4 text-amber-800">
                    <MarqueeText text={textos.texto1} />

                    </div> */}

                    {/* Contenido */}
                    <div className="p-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

