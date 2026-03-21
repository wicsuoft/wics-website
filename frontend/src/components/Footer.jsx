import wicslogo from "../../public/wicslogo2.png";
import { 
    TbBrandLinktree, 
    TbBrandDiscord,
    TbBrandLinkedin,
    TbBrandInstagram
} from "react-icons/tb";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full h-auto md:h-106 bg-dark-blue font-sans text-center text-white py-6 flex flex-col items-center gap-4 px-8 md:flex-row md:items-center md:justify-center md:gap-10 md:px-10 lg:gap-50 lg:px-25">
            <div className="">
                <Image src={wicslogo} alt="WiCS Logo" className="mx-auto w-52 h-auto md:w-60" />
            </div>
            <div className="flex w-full flex-col items-center gap-4 text-center md:w-auto md:flex-row md:items-start md:gap-10 lg:gap-30">
                <div className="flex w-full flex-col gap-5 md:w-auto">
                    <h1 className="text-2xl font-bold font-noto"> SOCIALS </h1>
                    <div className="mx-auto flex w-fit flex-col items-start gap-5 text-xl font-light font-sans md:mx-0">
                        <p className="flex flex-row items-center"> 
                            <TbBrandDiscord className="inline w-8 h-auto mr-3 text-icons" /> 
                            <a href="https://discord.gg/3eHsDhEJ" target="_blank" rel="noopener noreferrer">
                                Discord
                            </a>
                        </p>
                        <p className="flex flex-row items-center"> 
                            <TbBrandInstagram className="inline w-8 h-auto mr-3 text-icons" /> 
                            <a href="https://instagram.com/uoftwics/" target="_blank" rel="noopener noreferrer">
                                Instagram
                            </a>
                        </p>
                        <p className="flex flex-row items-center"> 
                            <TbBrandLinkedin className="inline w-8 h-auto mr-3 text-icons" /> 
                            <a href="https://linkedin.com/company/uoftwics" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </p>
                        <p className="flex flex-row items-center">
                            <TbBrandLinktree className="inline w-8 h-auto mr-3 text-icons" /> 
                            <a href="https://linktr.ee/wicsuoft" target="_blank" rel="noopener noreferrer">
                                Linktree
                            </a>
                        </p>
                    </div>
                </div>
                <div className="flex w-full flex-col gap-5 md:w-auto">
                    <h1 className="text-2xl font-bold font-noto"> CONTACT US </h1>
                    <div className="flex flex-col text-xl font-light font-sans">
                        <a href="mailto:wicsuoft@gmail.com" rel="noopener noreferrer">
                            wicsuoft@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}