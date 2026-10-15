import EventInfoCard from "./EventInfoCard";
import autodesk from "../../public/events/autodesk.png";
import crochet from "../../public/events/crochet.jpg";
import mentorship from "../../public/events/mentorship.png";
import logic from "../../public/events/logic.png";

const upcomingEvents = [];

const pastEvents = [
    {
        title: "Autodesk Office Hours",
        description: "Tour Autodesk’s downtown office and meet recruiters for S27 roles.",
        imageURL: autodesk,
    },
    {
        title: "Stitch, Sip and Squish",
        description: "Stressball crochet workshop with Hearts & Hooks!",
        imageURL: crochet,
    },
    {
        title: "Mentorship Program",
        description: "Learn from industry professionals and connect with female faculty.",
        imageURL: mentorship,
    },
    {
        title: "WiCS Logic Night",
        description: "Join us for puzzles, brain teasers, and snacks!",
        imageURL: logic,
    },
];

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
                    {upcomingEvents.length > 0 ? (
                        upcomingEvents.map((event) => (
                            <EventInfoCard key={event.title} {...event} type="upcoming" />
                        ))
                    ) : (
                        <p className="text-base sm:text-xl">
                            Check back later for new WiCS events!
                        </p>
                    )}
                </section>

                <section aria-labelledby="past-events-heading" className="mx-auto flex w-full max-w-5xl flex-col gap-5 sm:gap-7">
                    <h2 id="past-events-heading" className="font-noto text-3xl font-bold sm:text-4xl">
                        Past Events
                    </h2>
                    {pastEvents.map((event) => (
                        <EventInfoCard key={event.title} {...event} type="past" />
                    ))}
                </section>
            </div>
        </main>
    )
}
