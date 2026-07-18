'use client';
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    return (
        <div className="w-full min-h-screen flex flex-col">
            <main className="flex-1 w-full bg-linear-to-b from-background to-secondary px-6 py-24 md:px-10 flex items-center justify-center">
                <div className="max-w-3xl text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-dark-text text-center">
                    404 - Page Not Found
                </h1>
                <p className="text-center font-light text-xl md:text-2xl text-dark-text">
                  Oops! The page you are looking for might have been removed, had its name changed, or is no longer available.
                </p>
                <button className="inline-flex items-center justify-center bg-background text-white font-bold text-2xl py-4 px-8 rounded-4xl hover:bg-dark-blue transition-transform duration-200 ease-out hover:scale-105 hover:cursor-pointer" onClick={() => router.push("/")}>
                    Go to homepage
                </button>
                </div>
            </main>
        </div>
    )
}