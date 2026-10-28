import { HomeLogo, Upcoming, Mission, Stats, Initiatives, LogoCarousel} from "./index";
import Image from "next/image";

export default function Home() {
    return (
        <div className="w-full h-auto">
            <section className="w-full bg-linear-to-b from-background to-lighter-blue">
                <div className="mx-auto flex w-full max-w-350 flex-col items-center gap-12 px-4 py-8 pb-0 sm:px-6 sm:py-10 sm:pb-0 md:gap-20 md:px-10 md:pb-0">
                    <HomeLogo />
                    <Upcoming />
                </div>
            </section>

            <section className="w-full bg-white">
                <Image
                    src="/bg-curve.svg"
                    alt=""
                    aria-hidden="true"
                    width={1920}
                    height={334}
                    className="block h-auto w-full"
                />

                <div className="relative mx-auto -mt-[4vw] flex w-full max-w-350 flex-col items-center px-4 pt-0 pb-10 sm:px-6 sm:pt-0 sm:pb-14 md:px-10 md:pt-0 md:pb-20">
                    <Mission />
                </div>
                <Stats />
                {/* <Initiatives />
                <LogoCarousel /> */}
            </section>
        </div>
    )
}
