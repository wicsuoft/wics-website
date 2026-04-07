import Image from "next/image"

export default function UpcomingEvent({ title, description, imageURL = null }) {
    return (
        <div className="w-64 sm:w-72 md:w-62 lg:w-66 xl:w-75 md:h-80 lg:h-85 xl:h-98 bg-white border border-gray-200 flex flex-col rounded-xl items-center px-3 sm:px-4 md:px-0 py-5 md:py-0 shrink-0 transition-[width,height,padding] duration-300 ease-in-out">
            {imageURL
                ? <Image className="bg-gray-200 object-cover rounded-lg mt-1 md:mt-5 lg:mt-6 xl:mt-7 w-full max-w-60 md:max-w-46 lg:max-w-50 xl:max-w-60 aspect-square transition-[max-width,margin-top] duration-300 ease-in-out" src={imageURL} alt={title} />
                : <div className="bg-gray-200 rounded-lg mt-1 md:mt-5 lg:mt-6 xl:mt-7 w-full max-w-60 md:max-w-46 lg:max-w-50 xl:max-w-60 aspect-square transition-[max-width,margin-top] duration-300 ease-in-out" />
            }
            <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 mt-4 md:mt-5 lg:mt-6 flex flex-col gap-2 md:gap-1 lg:gap-2 text-center md:text-left transition-[padding,margin-top,gap] duration-300 ease-in-out">
                <h4 className="text-lg sm:text-xl md:text-base lg:text-lg xl:text-xl font-bold leading-tight">{title}</h4>
                <p className="text-gray-500 text-xs sm:text-sm md:text-xs lg:text-sm leading-snug">{description}</p>
            </div>
        </div>
    )
}