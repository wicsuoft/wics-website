import EventInfoCard from "./EventInfoCard";
import autodesk from "../../public/events/autodesk.png";

const upcomingOpportunities = [];

const pastOpportunities = [
    {
        month: "September",
        date: "22",
        year: "2026",
        title: "Autodesk Office Tours",
        description: "Tour Autodesk’s downtown office and meet recruiters for S27 roles.",
        imageURL: autodesk,
    },
];

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

            <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-16 sm:mt-20 sm:gap-20 sm:px-4 md:px-8 lg:px-12">
                <section aria-labelledby="upcoming-opportunities-heading" className="mx-auto flex w-full max-w-5xl flex-col gap-5 sm:gap-7">
                    <h2 id="upcoming-opportunities-heading" className="font-noto text-3xl font-bold sm:text-4xl">
                        Upcoming
                    </h2>
                    {upcomingOpportunities.length > 0 ? (
                        upcomingOpportunities.map((opportunity) => (
                            <EventInfoCard key={opportunity.title} {...opportunity} type="upcoming" />
                        ))
                    ) : (
                        <p className="text-base sm:text-xl">
                            Check back later for new WiCS opportunities!
                        </p>
                    )}
                </section>

                <section aria-labelledby="past-opportunities-heading" className="mx-auto flex w-full max-w-5xl flex-col gap-5 sm:gap-7">
                    <h2 id="past-opportunities-heading" className="font-noto text-3xl font-bold sm:text-4xl">
                        Past Opportunities
                    </h2>
                    {pastOpportunities.map((opportunity) => (
                        <EventInfoCard key={opportunity.title} {...opportunity} type="past" />
                    ))}
                </section>
            </div>
        </main>
    )
}
