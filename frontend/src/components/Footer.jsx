import wicslogo from "../../public/wics_footer.png";
import { 
    TbBrandLinktree, 
    TbBrandDiscord,
    TbBrandLinkedin,
    TbBrandInstagram
} from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full h-106 bg-dark-blue font-sans text-center text-white py-6 flex flex-row items-center justify-left gap-20 px-25">
            <div className="">
                <Image src={wicslogo} alt="WiCS Logo" className="mx-auto w-40 h-auto" />
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-40 text-2xl font-bold font-noto px-2">
                    <h1> SOCIALS </h1>
                    <h1> CONTACT US </h1>
                </div>
                <div className="flex flex-row gap-30">
                    <div className="flex flex-col gap-5 text-xl font-light font-sans ">
                        <p className="flex flex-row items-center"> 
                            <TbBrandDiscord className="inline w-8 h-auto mr-3 text-icons" /> 
                            <Link href="https://discord.gg/wics" target="_blank" rel="noopener noreferrer">
                                Discord
                            </Link>
                        </p>
                        <p className="flex flex-row items-center"> 
                            <TbBrandInstagram className="inline w-8 h-auto mr-3 text-icons" /> 
                            <Link href="https://instagram.com/uoftwics/" target="_blank" rel="noopener noreferrer">
                                Instagram
                            </Link>
                        </p>
                        <p className="flex flex-row items-center"> 
                            <TbBrandLinkedin className="inline w-8 h-auto mr-3 text-icons" /> 
                            <Link href="https://linkedin.com/company/uoftwics" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </Link>
                        </p>
                        <p className="flex flex-row items-center">
                            <TbBrandLinktree className="inline w-8 h-auto mr-3 text-icons" /> 
                            <Link href="https://linktr.ee/wicsuoft" target="_blank" rel="noopener noreferrer">
                                Linktree
                            </Link>
                        </p>
                    </div>
                    <div className="flex flex-col text-xl font-light font-sans">
                        <p> wicsuoft@gmail.com </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}