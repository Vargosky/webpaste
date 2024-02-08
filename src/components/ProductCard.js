"use client"
import React, { useState } from 'react';
import ReservationModal from './ReservationModal';
import Image from 'next/image';
import CarouselDefault from './CarouselDefault';

const ProductCard = ({ images, title, description, price, discount }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // const images = [
    //     "/images/tortas/tortaTresLeches.png",
    //     "/images/tortas/tortaMerengueFrutilla.png",
    //     // Agrega más imágenes si es necesario
    //   ];

    const handleReserveClick = () => {
        setIsModalOpen(true);
    };

    function formatMoney(value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 text-center border border-amber-600 border-double shadow-xl">
            <div className="mb-4 tracking-wide w-full">
                <div className="relative  h-40 justify-center  flex items-center">
                    <div className="w-full h-full overflow-hidden rounded-md flex justify-center">
                    <CarouselDefault images={images} />

                        {/* <Image
                            src={image}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            className="object-center rounded-full border border-black shadow-xl p-1 image-hover"
                        /> */}
                    </div>
                </div>

                <h3 className="text-lg font-semibold mt-4">{title}</h3>
            </div>
            <div className="text-gray-600 mb-4 min-h-28 max-h-28 overflow-y-auto no-scroll text-justify p-2 rounded-xl bg-gray-100">{description}</div>
            <div className="flex justify-center items-center mb-4">
                <span className="text-gray-700 text-2xl font-semibold mr-2">${formatMoney((price * (1 - discount)).toFixed(0))}</span>
                {discount > 0 && (
                    <span className="text-xl text-red-200  line-through">${formatMoney(price)}</span>
                )}
            </div>
            {!isModalOpen && (
                <ReservationModal productName={title} closeModal={() => setIsModalOpen(false)} />
            )}
        </div>
    );
};

export default ProductCard;
