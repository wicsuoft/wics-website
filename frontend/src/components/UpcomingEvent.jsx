export default function UpcomingEvent({ title = "event title", description = "event description" }) {
    return (
        <div style={{ width: "400px", height: "528px" }} className="bg-white border border-gray-200 flex flex-col items-center">
            <div className="bg-gray-200 mt-10 mx-10" style={{ width: "320px", height: "320px" }} />
            <div className="w-full px-10 mt-6 flex flex-col gap-2">
                <h4 className="text-xl font-bold">{title}</h4>
                <p className="text-gray-500 text-sm">{description}</p>
            </div>
        </div>
    )
}