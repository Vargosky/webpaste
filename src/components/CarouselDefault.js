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
        overflow: "hidden",
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
        <div>
            <Carousel className="rounded-2xl">
                {images && images.map((image, index) => (
                    <div
                        key={index}
                        onClick={() => handleOpenModal(image)}
                        className="cursor-pointer"
                    >
                        <Image
                            src={image}
                            alt={`image ${index}`}
                            width={50}
                            height={50}
                            className="h-full w-full object-cover hover:cursor-zoom-in"
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
                <div className="bg-red-500 align-middle">
                    <button onClick={handleCloseModal}>Cerrar</button>
                    <Image
                        src={selectedImage}
                        alt="modal image"
                        width={400}
                        height={400}
                        
                    />
                </div>
            </ReactModal>
        </div>
    );
}
