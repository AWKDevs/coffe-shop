import Link from "next/link";

type HeaderButtonProps = {
    href: string;
    insideText?: string;
    icon?: React.ReactNode;
}

const HeaderButtonBronwBorder: React.FC<HeaderButtonProps> = ({ href, insideText, icon}) => {
    return(
        <Link href={href} className="bg-[rgb(124,89,60)] rounded-xl px-3 py-2 hover:bg-[rgb(180,135,100)] hover:transition-all hover:-translate-y-1 active:scale-95 active:transition-transform  active:-translate-y-0.5">
        {icon}
        {insideText}
        </Link>
    )
}

const HeaderIconButton: React.FC<HeaderButtonProps> = ({ href, icon}) => {
    return(
        <Link href={href} className="hover:transition-all hover:-translate-y-1 active:scale-95 active:transition-transform  active:-translate-y-0.5">
        {icon}
        </Link>
    )
}

export {HeaderButtonBronwBorder, HeaderIconButton};