import Link from "next/link";

type HeaderButtonProps = {
    href: string;
    insideText?: string;
    icon?: React.ReactNode;
    color?: string;
    mobile?: boolean;
}

const HeaderButtonBronwBorder: React.FC<HeaderButtonProps> = ({ href, insideText, icon, mobile }) => {
    return(
        <Link 
            href={href} 
            className={`${
                mobile 
                    ? "justify-center py-3 text-center" 
                    : "px-3 py-2"
            } text-custom-15 bg-[rgb(124,89,60)] rounded-[10px] hover:bg-[rgb(180,135,100)] hover:transition-all hover:-translate-y-1 active:scale-95 active:transition-transform active:-translate-y-0.5 flex items-center gap-2`}
        >
            <div className="text-2xl">
            {icon}
            </div>
            {insideText}
        </Link>
    )
}

const HeaderIconButton: React.FC<HeaderButtonProps> = ({ href, icon, color, mobile }) => {
    return(
        <Link 
            href={href} 
            className={`${
                mobile ? "text-2xl mx-auto" : "text-3xl"
            } hover:transition-all hover:-translate-y-1 active:scale-95 active:transition-transform active:-translate-y-0.5`} 
            style={{ color: `rgb(${color})` }}
        >
            {icon}
        </Link>
    )
}

export { HeaderButtonBronwBorder, HeaderIconButton };