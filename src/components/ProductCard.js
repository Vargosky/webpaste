"use client"
import React, { useState } from 'react';
import ProductoDetalle from './ProductDetail';
import Image from 'next/image';
import CarouselDefault from './CarouselDetail';
import 'animate.css';


const ProductCard = ({ images, title, description, price, discount }) => {
    const [showDetail, setShowDetail] = useState(false);

    const handleShowDetail = () => {
        setShowDetail(true);
    };

    const handleHideDetail = () => {
        setShowDetail(false);
    };

    function formatMoney(value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
       // Nuevo estado para controlar la animación
    const [animationClass, setAnimationClass] = useState('');
    const [mostrarDetalle, setMostrarDetalle] = useState(false) 

    return (
        <div>
            {!showDetail ? (
                <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 text-center border border-amber-600 border-double shadow-xl no-scroll">
                    <div className="mb-4 tracking-wide w-full rounded-3xl py-3  ">
                        <div className="relative h-64 justify-center flex items-center no-scroll">
                            <div className="w-full h-64 overflow-hidden rounded-md flex justify-center no-scroll">
                                <CarouselDefault images={images} />
                            </div>
                        </div>

                        
                    </div>
                    <div className='border border-brown-400 rounded-3xl py-2 px-10 shadow-2xl'>
                    <h3 className="text-4xl text-brown-600 font-semibold mt-4">{title}</h3>
                    {/* <div className="text-gray-600 mb-4 min-h-28 max-h-28 overflow-y-auto no-scroll text-justify p-2 rounded-xl bg-gray-100">{description}</div> */}
                    <div className="flex justify-center items-center mb-4 border-4  border-brown-200 rounded-xl my-5 px-5">
                        <span className="text-gray-700 text-2xl font-semibold mr-2">${formatMoney((price * (1 - discount)).toFixed(0))}</span>
                        {discount > 0 && (
                            <span className="text-xl text-red-200 line-through">${formatMoney(price)}</span>
                        )}
                    </div>
                    <button onClick={handleShowDetail} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded">Ver Detalle</button>
                    </div>
                    
                </div>
            ) : (
                <div className={`animate__animated ${showDetail ? 'animate__flipInY' : ''}`}>
                <ProductoDetalle titulo={title} descripcion={description} onClose={handleHideDetail} />
            </div>
            )}
        </div>
    );
};

export default ProductCard;
