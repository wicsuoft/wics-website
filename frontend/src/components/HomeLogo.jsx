import wicslogo from "../../public/wicslogo.png";
import Image from "next/image";

export default function HomeLogo() {
    return (
        <div className="items-center flex flex-col">
            <Image src={wicslogo} alt="WICS Logo" className="w-50 h-auto" />
            <h1 className="text-4xl font-bold text-dark-text text-center w-2xl">
                University of Toronto Women in Computer Science
            </h1>
        </div>
    )
}