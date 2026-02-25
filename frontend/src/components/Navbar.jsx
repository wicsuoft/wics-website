import wicslogo from "../../public/wicslogo.png";
import Link from "next/link"
import Image from "next/image";
import { JoinUsButton } from "./index";

export default function Navbar() {
    return (
        <nav className="w-full bg-dark-blue font-sans">
            <div className="flex h-37.25 w-full items-center justify-between px-6 md:px-10">
                <div className="flex items-center">
                    <Image src={wicslogo} alt="WICS Logo" className="h-auto px-4 py-2" />
                </div>
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-12 font-normal text-xl">
                        <Link className="text-white hover:underline "href="/">
                            Home
                        </Link>
                        <Link className="text-white hover:underline"href="/about">
                            About
                        </Link>
                        <Link className="text-white hover:underline "href="/events">
                            Events
                        </Link>
                        <Link className="text-white hover:underline"href="/opportunities">
                            Opportunities
                        </Link>
                        <Link className="text-white hover:underline "href="/gallery">
                            Gallery
                        </Link>
                    </div>
                    <div className="ml-9">
                        <JoinUsButton />
                    </div>
                </div>
            </div>
        </nav>
    )
}