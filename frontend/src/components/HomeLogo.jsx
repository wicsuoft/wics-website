import wicslogo from "../../public/wicslogo.png";
import Image from "next/image";

export default function HomeLogo() {
    return (
        <div className="items-center flex flex-col">
            <Image src={wicslogo} alt="WICS Logo" className="w-60 h-auto" />
            <h1 className="text-4xl font-bold text-dark-text text-center">
                University of Toronto
            </h1>
            <h1 className="text-4xl font-bold text-dark-text text-center">
                Women in Computer Science
            </h1>
            <p className="text-center font-light text-dark-text py-5 w-2xl"> Fostering academic and professional support for women and gender‑diverse students in computer science at the University of Toronto. </p>
        </div>
    )
}