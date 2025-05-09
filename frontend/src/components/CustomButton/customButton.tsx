import clsx from "clsx";
import { ReactNode } from "react";
import { Marker } from "../Marker/marker";

type Props = {
    icon?: string,
    children?: ReactNode,
    href?: string,
    containerClassName?: string,
    onClick?: () => void,
    markerFill?: string,
}

const CustomButton = ({ icon, children, href, containerClassName, onClick, markerFill }: Props) => {

    const Inner = () => (
        <>
            <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow:hidden">
                <span className="absolute -left-[1px]">
                    <Marker fill={markerFill} />
                </span>
                {icon && (
                    <img src={icon} alt="circle" className="size-10 mr-5 object-contain z-10"/>
                )}
                <span className="relative z-2 font-poppins base-bold text-p1 uppercase">{children}</span>
            </span>
            <span className="glow-before glow-after" />
        </>
        )
    
    return href ? (
        <a className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group", containerClassName)} href={href}>
            <Inner />
        </a>
    ) :
        <button onClick={onClick} className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group", containerClassName)}>
            <Inner />
        </button>
}

export default CustomButton;