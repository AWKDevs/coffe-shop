import Image from "next/image";

const Hero = () => {
    return(
        <div className="relative w-full h-[70vh] min-h-[400px] max-h-[800px] mx-auto overflow-hidden flex items-center justify-center">
            <Image
                src={'/images/Hero/img1Hero.png'}
                alt={'Una taza de cafe deliciosa'}
                fill
                sizes="100vw"
                priority
                style={{
                    objectFit: 'cover',
                }}
                className="shadow-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-20 px-4">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold mb-2 md:mb-4">Dulces Recuerdos Café</h1>
                <span className="text-white text-base md:text-xl lg:text-2xl xl:text-[32px] italic opacity-90">10 años creando momentos mágicos.</span>
            </div>
        </div>
    );
}

export default Hero;