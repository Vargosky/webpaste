import Image from "next/image";
import imagenCentral from '../components/images/vitrina-500.jpg'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center my-1">
      <div >
        <Image
        className="rounded-2xl"
          src={imagenCentral}
          alt="imagencentral"
          width={1300}
          height={500}
          priority
        />
      </div>
      
    </main>
  );
}
