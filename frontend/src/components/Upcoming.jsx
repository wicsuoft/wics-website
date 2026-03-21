import UpcomingEvent from "./UpcomingEvent"

//TODO: add props with data (photos, event name, desc) and make mock data
//TODO: make this look normal on mobile - looks ugly rn

export default function Upcoming() {
    return(
        <div className="w-full sm:w-auto h-auto flex flex-col items-center gap-6">
            <h3 className="text-dark-text text-xl font-bold ">
                Upcoming and Recent
            </h3>
            <div className="w-full sm:w-auto flex sm:flex-row items-center gap-7">
                <UpcomingEvent />
                <UpcomingEvent />
                <UpcomingEvent />
            </div>
        </div>
    )
}