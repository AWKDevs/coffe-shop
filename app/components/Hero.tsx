import Image from "next/image";

const Hero = () => {
    return(
        <div className="relative w-[1441px] h-[688px] mx-auto overflow-hidden flex items-center justify-center">
            <Image
                src={'/images/Hero/img1Hero.png'}
                alt={'Una taza de cafe deliciosa'}
                layout="fill"
                objectFit="cover"
                className="shadow-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-20">
                <h1 className="text-white text-[64px] font-bold">Dulces Recuerdos Café</h1>
                <span className="text-[32px] italic mt-2">10 años creando momentos mágicos.</span>
            </div>
        </div>
    );
}

export default Hero;