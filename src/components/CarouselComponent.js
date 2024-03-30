import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image'; // Importa Image de next/image

const CarouselComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="container mx-auto">
            <Slider {...settings}>
                <div>
                    {/* Usa el componente Image en lugar de <img> */}
                    <Image src="/images/unnamed.jpg" alt="Imagen 1" width={500} height={300} layout='responsive'/>
                </div>
                <div>
                    {/* Repite el uso de Image para las siguientes imágenes */}
                    <Image src="/images/unnamed.jpg" alt="Imagen 2" width={500} height={300} layout='responsive'/>
                </div>
                {/* Añade más slides según sea necesario */}
            </Slider>
        </div>
    );
};

export default CarouselComponent;
