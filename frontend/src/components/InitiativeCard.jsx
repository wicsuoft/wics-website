import Image from "next/image";

export default function InitiativeCard({ title, imageURL = null }) {
    return (
        <div className="w-60 sm:w-72 md:w-75 md:h-95 bg-white border border-gray-200 flex flex-col rounded-xl items-center px-3 sm:px-4 md:px-0 py-5 md:py-0 shrink-0">
            <div className="relative mt-1 md:mt-7 w-full max-w-60 h-65 sm:h-75 md:h-70 overflow-hidden rounded-lg bg-gray-200">
                {imageURL ? (
                    <Image className="object-cover" src={imageURL} alt={title} fill sizes="240px" />
                ) : null}
            </div>
            <div className="w-full text-xl px-2 sm:px-4 md:px-10 mt-2 md:mt-4 items-center flex flex-col gap-2 text-center">
                <h4 className="text-dark-text font-noto sm:text-2xl font-bold">{title}</h4>
            </div>
        </div>
    )
}