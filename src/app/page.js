import Image from "next/image";
import dynamic from "next/dynamic";
import imagenCentral from '../components/images/vitrina-500.jpg'
import CarouselDefault from '../components/CarouselPortada';
import {imagesFrontis} from './data/products'; 


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const images=['/images/unnamed.jpg','/images/unnamed.jpg']


export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-center  bg-brown-600">
      <div >
        {/* <Image
        className="rounded-2xl"
          src={imagenCentral}
          alt="imagencentral"
          width={1300}
          height={500}
          priority
        /> */}

        <CarouselDefault
        images={imagesFrontis}
        />
      </div>
      
    </main>
  );
}
