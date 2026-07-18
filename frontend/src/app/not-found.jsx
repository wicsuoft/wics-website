'use client';
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    return (
        <div className="w-full h-full">
            <main className="w-full bg-gradient-to-b from-background to-secondary px-6 py-16 md:px-10">
                <h1 className="text-5xl font-bold text-dark-text text-center">
                    404 - Page Not Found
                </h1>
                <p className="text-center font-light text-xl text-dark-text py-5"> Oops! The page you are looking for might have been removed, had its name changed, or is no longer available. </p>
                <button className="block mx-auto bg-background text-white font-bold text-2xl py-4 px-4 rounded hover:bg-blue-700 rounded-4xl" onClick={() => router.push("/")}>
                    Go to homepage
                </button>
            </main>
        </div>
    )
}