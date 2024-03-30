import React from "react";
import CarouselDetalle from './CarouselDetail'; // Asegúrate de que el import es correcto

const ProductoDetalle = ({ descripcion, onClose }) => {
    return (
        <div className="flex flex-wrap justify-around items-center min-w-full mx-auto border border-brown-600 rounded-2xl">
            <div className="w-full md:w-1/2 py-4">
                <div className="text-lg mb-4 w-full text-justify">{descripcion}</div>
                <button onClick={onClose} className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300 ease-in-out" style={{ zIndex: 10 }}>
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default ProductoDetalle;
