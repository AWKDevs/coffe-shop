import Link from "next/link";

type HeaderButtonProps = {
    href: string;
    insideText?: string;
    icon?: React.ReactNode;
}
type HeaderIconButtonProps = {
    href: string;
    insideText?: string;
    icon?: React.ReactNode;
    color: string;
}

const HeaderButtonBronwBorder: React.FC<HeaderButtonProps> = ({ href, insideText, icon}) => {
    return(
        <Link href={href} className="text-custom-15 bg-[rgb(124,89,60)] rounded-[10px] px-3 py-2 hover:bg-[rgb(180,135,100)] hover:transition-all hover:-translate-y-1 active:scale-95 active:transition-transform  active:-translate-y-0.5">
        {icon}
        {insideText}
        </Link>
    )
}

const HeaderIconButton: React.FC<HeaderIconButtonProps> = ({ href, icon, color}) => {
    return(
        <Link href={href} className={`text-3xl hover:transition-all hover:-translate-y-1 active:scale-95 active:transition-transform  active:-translate-y-0.5`} 
        style={{color: `rgb(${color})`}}>
        {icon}
        </Link>
    )
}

export {HeaderButtonBronwBorder, HeaderIconButton};