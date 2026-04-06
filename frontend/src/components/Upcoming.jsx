import UpcomingEvent from "./UpcomingEvent"
import { JoinUsButton } from "./index"
import event1 from "../../public/event1.png"

//TODO: make this look normal on mobile - looks ugly rn

export default function Upcoming() {
    return(
        <div className="w-full h-auto flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
            <h3 className="text-dark-text text-2xl sm:text-3xl font-noto font-bold text-center px-2">
                Upcoming and Recent
            </h3>
            <div className="w-full flex flex-col md:flex-row items-center md:justify-center gap-6 sm:gap-8 md:gap-6 lg:gap-8 xl:gap-12 transition-[gap] duration-300 ease-in-out">
                <UpcomingEvent title="WiCS Logic Night" description="Lorem ibsum stuff here yup yup yup" imageURL={event1} />
                <UpcomingEvent title="event title #2" description="event description" />
                <UpcomingEvent title="event title #3" description="event description" />
            </div>
            <JoinUsButton text="See More" size="lg" className="text-white font-bold font-noto bg-background" href="/events" />
        </div>
    )
}