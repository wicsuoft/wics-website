import wicslogo2 from "../../public/wicslogo2.png";
import Image from "next/image";

export default function HomeLogo() {
    return (
        <div className="items-center flex flex-col gap-8">
            <Image src={wicslogo2} alt="WICS Logo" className="w-70 h-auto" priority />
            <h1 className="text-5xl font-bold text-dark-text text-center">
                University of Toronto <br/> Women in Computer Science
            </h1>
            <p className="text-center font-light text-xl text-dark-text py-5 w-3xl"> Fostering academic and professional support for women and gender‑diverse students in computer science at the University of Toronto. </p>
        </div>
    )
}