import { JoinUsButton, InitiativeCard } from "./index";

export default function Initiatives() {
    return(
        <div className="w-full bg-light-blue h-auto flex flex-col py-15 items-center gap-8 sm:gap-10 md:gap-12">
            <h3 className="text-dark-text text-2xl sm:text-3xl font-noto font-bold text-center px-2">
                Our Initiatives 
            </h3>
            <div className="w-full flex flex-col md:flex-row items-center md:justify-center gap-6 sm:gap-8 md:gap-6 lg:gap-8 xl:gap-12 transition-[gap] duration-300 ease-in-out">
                <InitiativeCard title="Social Events" />
                <InitiativeCard title="Academic Events" />
                <InitiativeCard title="Opportunities" />
            </div>
            <JoinUsButton text="Join Us" size="lg" className="text-white font-bold font-noto bg-background"/>
        </div>
    )
}