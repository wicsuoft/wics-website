import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="w-full px-8 font-sans md:px-20 lg:px-32 xl:px-44">
            <div className="mx-auto bg-dark-blue px-8 py-4 flex w-full max-w-custom items-center justify-between">
                <h1 className="text-white">WICS</h1>
                <div className="flex items-center gap-6">
                    <Link className="text-white"href="/">Home</Link>
                    <Link className="text-white"href="/about">About</Link>
                    <Link className="text-white"href="/events">Events</Link>
                    <Link className="text-white"href="/opportunities">Opportunities</Link>
                    <Link className="text-white"href="/gallery">Gallery</Link>
                </div>
            </div>
        </nav>
    )
}