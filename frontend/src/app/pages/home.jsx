import { HomeLogo, Upcoming, Mission } from "../../components/index";
import Image from "next/image";

export default function Home() {
    return (
        <div className="w-full h-auto">
            <section
                className="w-full"
                style={{
                    background:
                        "linear-gradient(180deg, var(--background) 0%, var(--light-blue) 55%, var(--lighter-blue) 100%)",
                }}
            >
                <div className="mx-auto flex w-full max-w-350 flex-col items-center gap-20 px-6 py-10 pb-20 md:px-10 md:pb-28">
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

                <div className="mx-auto flex w-full max-w-350 flex-col items-center px-6 py-16 md:px-10 md:py-20">
                    <Mission />
                </div>
            </section>
        </div>
    )
}