import { AiFillTikTok } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GiShare } from "react-icons/gi";
import { IoLogoFacebook, IoLogoYoutube } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
    return(
        <footer className="">
        <div className="text-center mb-4 bg-[rgb(201,186,175)] text-[rgb(110,80,60)] py-8 px-6 rounded-[20]">
            <h2 className="font-bold text-2xl text-[rgb(67,52,9)]">Contáctanos</h2>
            <p className="text-2xl text-[rgb(124,89,60)]">
            Dirección: (Añadir dirección exacta de la cafetería) Teléfono: (Añadir número de contacto) Horario: (Especificar días y horarios de atención)
            </p>
            <br />
            <div className="flex justify-center space-x-6 mb-4">
                <PiInstagramLogoFill className="text-[27px] cursor-pointer" />
                <IoLogoFacebook className="text-[27px] cursor-pointer" />
                <AiFillTikTok className="text-[27px] cursor-pointer" />
                <FaSquareXTwitter className="text-[27px] cursor-pointer" />
                <MdEmail className="text-[27px] cursor-pointer" />
                <IoLogoYoutube className="text-[27px] cursor-pointer" />
                <GiShare className="text-[27px] cursor-pointer" />
            </div>
        </div>
        
        <div className="text-center">
            <p className="text-2xl text-[rgb(124,89,60)] mb-2">Dulces Recuerdos Café - 10 años creando momentos mágicos.</p>
            <p className="text-2xl text-[rgb(67,52,9)] font-bold">Aviso de Privacidad</p>
        </div>
        </footer>
    )
}

export default Footer;