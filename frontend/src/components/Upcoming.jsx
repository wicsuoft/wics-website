import UpcomingEvent from "./UpcomingEvent"
import { JoinUsButton } from "./index"
import mentorship from "../../public/events/mentorship.png"
import logic from "../../public/events/logic.png"
import crochet from "../../public/events/crochet.jpg"

export default function Upcoming() {
    return(
        <div className="w-full h-auto flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
            <h3 className="text-dark-text text-2xl sm:text-3xl font-noto font-bold text-center px-2">
                Upcoming and Recent
            </h3>
            <div className="w-full px-4 sm:px-6 md:px-8 box-border flex flex-col md:flex-row md:flex-wrap items-center md:justify-center gap-6 sm:gap-8 md:gap-6 lg:gap-8 xl:gap-12 transition-[gap] duration-300 ease-in-out"> 
                <UpcomingEvent title="Stitch, Sip and Squish" description="Stressball crochet workshop with Hearts & Hooks!" imageURL={crochet} />
                <UpcomingEvent title="Mentorship Program" description="Learn from industry professionals and connect with female faculty..." imageURL={mentorship} />
                <UpcomingEvent title="WiCS Logic Night" description="Join us for puzzles, brain teasers, and snacks!" imageURL={logic} />
            </div>
            <JoinUsButton text="See More" size="lg" className="text-white font-bold font-noto bg-background" href="/events" />
        </div>
    )
}