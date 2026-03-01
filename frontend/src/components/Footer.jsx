import wicslogo from "../../public/wics_footer.png";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full h-106 bg-dark-blue font-sans text-center text-white py-6 flex flex-row items-center justify-center gap-20">
            <div>
                <Image src={wicslogo} alt="WiCS Logo" className="mx-auto w-30 h-auto" />
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-15 text-3xl font-bold">
                    {/* TODO: Change font to noto-sans (like add) */}
                    <h1> Contact Us </h1>
                    <h1> Socials </h1>
                </div>
                <div className="flex flex-row gap-3 text-2xl font-light font-sans ">
                    <p> wicsuoft@gmail.com </p>
                    <p> Discord </p>
                    <p> Instagram </p>
                    <p> LinkedIn </p>
                    <p> Linktree </p>
                </div>
            </div>
        </footer>
    );
}