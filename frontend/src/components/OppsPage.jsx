import EventInfoCard from "./EventInfoCard";

export default function OppsPage() {
    return (
        <main className="min-h-screen bg-linear-to-b from-background to-lighter-blue px-6 py-10 text-dark-text sm:px-10 sm:py-12 md:px-14 lg:px-16">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-5">
                <h1 className="text-center py-5 font-noto text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                    Opportunities
                </h1>

                <p className="w-full max-w-4xl text-center text-base font-light sm:text-xl md:text-2xl">
                    Check out these opportunities to get involved with WiCS and the tech community!
                </p>
            </div>

            <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center gap-16 sm:mt-20 sm:gap-20 sm:px-4 md:px-8 lg:px-12">
                <EventInfoCard
                    month="March"
                    date="15"
                    year="2024"
                    title="High School Mentorship Program"
                    description="Join us for our annual Spring Hackathon! Collaborate with fellow students, showcase your coding skills, and win exciting prizes. Open to all skill levels!"
                    type="upcoming"
                />
                <EventInfoCard
                    month="November"
                    date="10"
                    year="2023"
                    title="General Member Sign Up"
                    description="Connect with students, alumni, and industry professionals at our fall networking night."
                    type="upcoming"
                />
            </div>
        </main>
    )
}