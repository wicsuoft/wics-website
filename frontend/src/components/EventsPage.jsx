import EventInfoCard from "./EventInfoCard";

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-linear-to-b from-background to-lighter-blue px-6 py-10 text-dark-text sm:px-10 sm:py-12 md:px-14 lg:px-16">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-5">
                <h1 className="text-center py-5 font-noto text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                    Events
                </h1>

                <p className="w-full max-w-4xl text-center text-base font-light sm:text-xl md:text-2xl">
                    Check out the latest news within the WiCS community!
                </p>
            </div>

            <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-16 sm:mt-20 sm:gap-20 sm:px-4 md:px-8 lg:px-12">
                <section aria-labelledby="upcoming-events-heading" className="mx-auto flex w-full max-w-5xl flex-col gap-5 sm:gap-7">
                    <h2 id="upcoming-events-heading" className="font-noto text-3xl font-bold sm:text-4xl">
                        Upcoming
                    </h2>
                    <EventInfoCard
                        month="March"
                        date="15"
                        year="2024"
                        title="WiCS Spring Hackathon"
                        description="Join us for our annual Spring Hackathon! Collaborate with fellow students, showcase your coding skills, and win exciting prizes. Open to all skill levels!"
                        type="upcoming"
                    />
                </section>

                <section aria-labelledby="past-events-heading" className="mx-auto flex w-full max-w-5xl flex-col gap-5 sm:gap-7">
                    <h2 id="past-events-heading" className="font-noto text-3xl font-bold sm:text-4xl">
                        Past Events
                    </h2>
                    <EventInfoCard
                        month="November"
                        date="10"
                        year="2023"
                        title="WiCS Fall Networking Night"
                        description="Connect with students, alumni, and industry professionals at our fall networking night."
                        type="past"
                    />
                </section>
            </div>
        </main>
    )
}