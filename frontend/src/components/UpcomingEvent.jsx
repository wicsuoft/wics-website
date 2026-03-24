import Image from "next/image"

export default function UpcomingEvent({ title, description, imageURL = null }) {
    return (
        <div className="w-64 sm:w-72 md:w-75 md:h-105 bg-white border border-gray-200 flex flex-col rounded-xl items-center px-3 sm:px-4 md:px-0 py-5 md:py-0 shrink-0">
            {imageURL
                ? <Image className="bg-gray-200 object-fill rounded-lg mt-1 md:mt-7 w-full max-w-60 aspect-square" src={imageURL} alt={title} />
                : <div className="bg-gray-200 rounded-lg mt-1 md:mt-7 w-full max-w-60 aspect-square" />
            }
            <div className="w-full px-2 sm:px-4 md:px-10 mt-4 md:mt-6 flex flex-col gap-2 text-center md:text-left">
                <h4 className="text-lg sm:text-xl font-bold">{title}</h4>
                <p className="text-gray-500 text-xs sm:text-sm">{description}</p>
            </div>
        </div>
    )
}