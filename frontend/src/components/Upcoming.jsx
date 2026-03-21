import UpcomingEvent from "./UpcomingEvent"
import { JoinUsButton } from "./index"
import event1 from "../../public/event1.png"

//TODO: make this look normal on mobile - looks ugly rn

export default function Upcoming() {
    return(
        <div className="w-full sm:w-auto h-auto flex flex-col items-center gap-12">
            <h3 className="text-dark-text text-3xl font-noto font-bold ">
                Upcoming and Recent
            </h3>
            <div className="w-full sm:w-auto flex sm:flex-row items-center gap-15">
                <UpcomingEvent title="WiCS Logic Night" description="Lorem ibsum stuff here yup yup yup" imageURL={event1} />
                <UpcomingEvent title="event title #2" description="event description" />
                <UpcomingEvent title="event title #3" description="event description" />
            </div>
            <JoinUsButton text="See More" size="lg" className="text-white font-bold font-noto bg-background"/>
        </div>
    )
}