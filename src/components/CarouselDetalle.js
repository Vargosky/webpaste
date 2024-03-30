"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "@material-tailwind/react";

const ProductoDetalle = ({ fotos, descripcion, onClose }) => {
    return (
        <div className="flex flex-wrap justify-center items-center max-w-4xl mx-auto my-8">
            <div className="w-full md:w-1/2 p-4">
                <Carousel autoplay={true} loop={true} autoplayDelay={3000} className="rounded-lg shadow-lg">
                    {fotos.map((foto, index) => (
                        <div key={index} className="carousel-item">
                            <Image src={foto} alt={`Imagen ${index}`} layout="responsive" width={700} height={700} objectFit="cover" className="rounded-lg" />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default ProductoDetalle;
