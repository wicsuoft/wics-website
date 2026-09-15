"use client";
import wicslogo from "../../public/wicslogo.png";
import Link from "next/link";
import Image from "next/image";
import { JoinUsButton } from "./index";
import { MdClose, MdMenu } from "react-icons/md";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/events", label: "Events" },
        { href: "/opportunities", label: "Opportunities" },
    ];

    const toggleDrawer = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <nav className="w-full bg-dark-blue font-sans">
            <div className="flex h-25 w-full items-center justify-between px-3 md:px-5">
                <Link className="flex items-center" href="/">
                    <Image src={wicslogo} alt="WICS Logo" className="h-auto py-2" style={{ width: "clamp(2rem, calc(3.52rem + 7.39vw), 6.25rem)" }} />
                </Link>
                <div className="lg:hidden">
                    <button className="cursor-pointer" onClick={toggleDrawer}>
                        {menuOpen ? <MdClose className="text-white text-2xl" /> : <MdMenu className="text-white text-2xl" />}
                    </button>
                    {menuOpen && (
                        <div className="absolute top-25 right-0 flex w-full flex-col items-start gap-4 bg-dark-blue px-6 py-3 shadow-[0_12px_10px_-5px_rgba(0,0,0,0.3)]">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    className="text-white hover:underline"
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div>
                                <JoinUsButton className='hover:bg-light-blue hover:cursor-pointer'/>
                            </div>
                        </div>
                    )}
                </div>
                <div className="hidden items-center gap-8 lg:flex">
                    <div className="flex items-center gap-10 font-normal text-xl">
                        {links.map((link) => (
                            <Link key={link.href} className="text-white hover:underline" href={link.href}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <div className="ml-9">
                        <JoinUsButton className="hover:bg-light-blue hover:cursor-pointer" />
                    </div>
                </div>
            </div>
        </nav>
    );
}
