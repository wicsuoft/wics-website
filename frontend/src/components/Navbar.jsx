"use client";
import wicslogo from "../../public/wicslogo.png";
import Link from "next/link";
import Image from "next/image";
import { JoinUsButton } from "./index";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/events", label: "Events" },
        { href: "/opportunities", label: "Opportunities" },
        { href: "/gallery", label: "Gallery" },
    ];

    const toggleDrawer = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <nav className="w-full bg-dark-blue font-sans">
            <div className="flex h-37.25 w-full items-center justify-between px-6 md:px-10">
                <div className="flex items-center">
                    <Image src={wicslogo} alt="WICS Logo" className="h-auto px-4 py-2" />
                </div>
                <div className="md:hidden">
                    <button onClick={toggleDrawer}>
                        <MdMenu className="text-white text-2xl" />
                    </button>
                    {menuOpen && (
                        <div className="absolute right-0 top-12 z-50 flex w-56 flex-col items-start gap-4 bg-dark-blue px-6 py-3 shadow-2xl">
                            <MdMenu className="text-white text-2xl self-end" onClick={toggleDrawer} />
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
                            <div className="ml-9">
                                <JoinUsButton />
                            </div>
                        </div>
                    )}
                </div>
                <div className="hidden items-center gap-8 md:flex">
                    <div className="flex items-center gap-12 font-normal text-xl">
                        {links.map((link) => (
                            <Link key={link.href} className="text-white hover:underline" href={link.href}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <div className="ml-9">
                        <JoinUsButton />
                    </div>
                </div>
            </div>
        </nav>
    );
}