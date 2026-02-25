import Link from "next/link"

export default function JoinUsButton() {
    return (
        <Link href="/join-us" className="inline-flex items-center rounded-full bg-light-blue px-6 py-2 text-dark-text transition-transform duration-200 ease-out hover:scale-105">
            Join Us
        </Link>
    )
}