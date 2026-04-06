import Image from "next/image";

export default function InitiativeCard({ title, imageURL = null }) {
    return (
        <div className="w-60 sm:w-72 md:w-62 lg:w-66 xl:w-75 md:h-79 lg:h-84 xl:h-95 bg-white border border-gray-200 flex flex-col rounded-xl items-center px-3 sm:px-4 md:px-0 py-5 md:py-0 shrink-0 transition-[width,height,padding] duration-300 ease-in-out">
            <div className="relative mt-1 md:mt-5 lg:mt-6 xl:mt-7 w-full max-w-60 md:max-w-46 lg:max-w-50 xl:max-w-60 h-65 sm:h-75 md:h-54 lg:h-58 xl:h-70 overflow-hidden rounded-lg bg-gray-200 transition-[max-width,height,margin-top] duration-300 ease-in-out">
                {imageURL ? (
                    <Image className="object-cover" src={imageURL} alt={title} fill sizes="240px" />
                ) : null}
            </div>
            <div className="w-full text-xl px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 mt-2 md:mt-3 lg:mt-4 items-center flex flex-col gap-2 md:gap-1 lg:gap-2 text-center transition-[padding,margin-top,gap] duration-300 ease-in-out">
                <h4 className="text-dark-text font-noto text-lg sm:text-2xl md:text-xl lg:text-2xl font-bold leading-tight">{title}</h4>
            </div>
        </div>
    )
}