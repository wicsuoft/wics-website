"use client";
import wicslogo from "../../public/wicslogo.png";
import Link from "next/link";
import Image from "next/image";
import { JoinUsButton } from "./index";
import { MdMenu } from "react-icons/md";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
    function handleClickOutside(event) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    }
    if (menuOpen) {
        document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, [menuOpen]);

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
            <div className="flex h-25 w-full items-center justify-between px-6 md:px-10">
                <Link className="flex items-center" href="/">
                    <Image src={wicslogo} alt="WICS Logo" className="w-33 h-auto px-4 py-2" />
                </Link>
                <div className="lg:hidden" ref={menuRef}>
                    <button className="hover:cursor-pointer" onClick={toggleDrawer}>
                        <MdMenu className="text-white text-2xl" />
                    </button>
                    {menuOpen && (
                        <div className="absolute right-0 top-10 z-50 flex w-56 flex-col items-start gap-4 bg-dark-blue px-6 py-3 shadow-2xl">
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
                <div className="hidden items-center gap-8 lg:flex">
                    <div className="flex items-center gap-10 font-normal text-2xl">
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