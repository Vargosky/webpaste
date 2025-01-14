"use client"
import { useState } from "react";
import ReactModal from "react-modal";
import Image from "next/image";
import { Carousel } from "@material-tailwind/react";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "70%",
        maxHeight: "70%",
        overflow: "auto", // Permitir desplazamiento si es necesario
        border: "none",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
};

export default function CarouselWithModal({ images }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const handleOpenModal = (image) => {
        setSelectedImage(image);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="w-64 h-64">
            <Carousel autoplay={true} loop={true} autoplayDelay={3000} className="rounded-2xl">
                {images && images.map((image, index) => (
                    <div
                        key={index}
                        onClick={() => handleOpenModal(image)}
                        className="cursor-pointer rounded-full overflow-hidden"
                    >
                        <Image
                            src={image}
                            alt={`image ${index}`}
                            layout="fill" // Usa layout fill para que Image se ajuste al contenedor
                            objectFit="cover" // Asegura que la imagen cubra el div sin deformarse
                            className="hover:cursor-zoom-in"
                        />
                    </div>
                ))}
            </Carousel>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Selected Image"
                style={customStyles}
            >
                <div className="flex justify-center items-center h-full">
                    <button onClick={handleCloseModal}>Cerrar</button>
                    <Image
                        src={selectedImage}
                        alt="modal image"
                        width={400} // Establece un ancho fijo
                        height={400} // Establece una altura fija
                        objectFit="contain" // Asegura que la imagen dentro del modal se ajuste sin deformarse
                    />
                </div>
            </ReactModal>
        </div>
    );
}
