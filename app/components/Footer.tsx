import { FaInstagram, FaFacebook, FaTiktok, FaEnvelope, FaYoutube, FaShareAlt } from "react-icons/fa";

const Footer = () => {
    return(
        <footer className="bg-[rgb(201,186,175)] text-[rgb(110,80,60)] py-8 px-6 rounded-[20]">
        <div className="text-center mb-4">
            <h2 className="font-bold text-lg text-[rgb(67,52,9)]">Contáctanos</h2>
            <p className="text-sm">
            Dirección: (Añadir dirección exacta de la cafetería) Teléfono: (Añadir número de contacto) Horario: (Especificar días y horarios de atención)
            </p>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
            <FaInstagram className="text-2xl cursor-pointer" />
            <FaFacebook className="text-2xl cursor-pointer" />
            <FaTiktok className="text-2xl cursor-pointer" />
            <FaEnvelope className="text-2xl cursor-pointer" />
            <FaYoutube className="text-2xl cursor-pointer" />
            <FaShareAlt className="text-2xl cursor-pointer" />
        </div>
        <div className="text-center">
            <p className="text-sm mb-2">Dulces Recuerdos Café - 10 años creando momentos mágicos.</p>
            <p className="text-sm font-bold">Aviso de Privacidad</p>
        </div>
        </footer>
    )
}

export default Footer;