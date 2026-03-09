import UpcomingEvent from "./UpcomingEvent"
import { JoinUsButton } from "./index"

//TODO: make this look normal on mobile - looks ugly rn

export default function Upcoming() {
    return(
        <div className="w-full sm:w-auto h-auto flex flex-col items-center gap-12">
            <h3 className="text-dark-text text-3xl font-noto font-bold ">
                Upcoming and Recent
            </h3>
            <div className="w-full sm:w-auto flex sm:flex-row items-center gap-10">
                <UpcomingEvent title="event title #1" description="event description" />
                <UpcomingEvent title="event title #2" description="event description" />
                <UpcomingEvent title="event title #3" description="event description" />
            </div>
            <JoinUsButton text="See More" size="lg" className="text-white font-bold font-noto bg-background"/>
        </div>
    )
}