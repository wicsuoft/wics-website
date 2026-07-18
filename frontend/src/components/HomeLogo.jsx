import wicslogo2 from "../../public/wicslogo2.png";
import Image from "next/image";

export default function HomeLogo() {
    return (
        <div className="items-center flex flex-col pt-10 gap-5 sm:gap-6 md:gap-8 px-2 sm:px-0">
            <Image src={wicslogo2} alt="WICS Logo" className="w-50 sm:w-56 md:w-70 h-auto" priority />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-text text-center leading-tight">
                University of Toronto <br/> Women in Computer Science
            </h1>
            <p className="text-center font-light text-base sm:text-lg md:text-xl text-dark-text py-2 sm:py-3 md:py-5 w-full max-w-3xl px-2 sm:px-0"> Fostering academic and professional support for women and gender-diverse students in computer science at the University of Toronto. </p>
        </div>
    )
}