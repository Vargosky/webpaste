import React from 'react';
import Image from 'next/image';
import banner from '../../components/images/Tradicion.png';
import bannerLg from '../../components/images/Calidad.png';

const Page = () => {
  return (
    <div>
      <Image
        className="rounded-2xl mx-auto lg:hidden"
        src={banner}
        alt="imagencentral"
        width={300}
        height={500}
        priority
      />
      <Image
        className="hidden lg:block"
        src={bannerLg}
        alt="imagencentral"
        width={1300} // Ajusta el ancho según tus necesidades
        height={500} // Ajusta la altura según tus necesidades
        priority
      />
    </div>
  );
};

export default Page;
