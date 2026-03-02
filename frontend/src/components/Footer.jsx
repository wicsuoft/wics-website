import wicslogo from "../../public/wics_footer.png";
import instagram from "../../public/instagram.png";
import discord from "../../public/discord.png";
import linkedin from "../../public/linkedin.png";
import { 
    TbBrandLinktree, 
    TbBrandDiscord,
    TbBrandLinkedin,
    TbBrandInstagram
} from "react-icons/tb";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full h-106 bg-dark-blue font-sans text-center text-white py-6 flex flex-row items-center justify-left gap-20 px-25">
            <div>
                <Image src={wicslogo} alt="WiCS Logo" className="mx-auto w-30 h-auto" />
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-50 text-3xl font-bold font-noto">
                    {/* TODO: Change font to noto-sans (like add) */}
                    <h1> CONTACT US </h1>
                    <h1> SOCIALS </h1>
                </div>
                <div className="flex flex-row gap-15 text-3xl font-light font-sans ">
                    <p> wicsuoft@gmail.com </p>
                    <p> 
                        <TbBrandDiscord className="inline w-12 h-auto mr-3 text-icons" /> 
                        Discord
                    </p>
                    <p> 
                        <TbBrandInstagram className="inline w-12 h-auto mr-3 text-icons" /> 
                        Instagram
                    </p>
                    <p> 
                        <TbBrandLinkedin className="inline w-12 h-auto mr-3 text-icons" /> 
                        LinkedIn
                    </p>
                    <p>
                        <TbBrandLinktree className="inline w-12 h-auto mr-3 text-icons" /> 
                        Linktree
                    </p>
                </div>
            </div>
        </footer>
    );
}