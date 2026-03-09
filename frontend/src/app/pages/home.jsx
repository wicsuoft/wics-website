import { HomeLogo, Upcoming }from "../../components/index";

//TODO: add bigger gap between logo and upcoming.

export default function Home() {
    return (
        <div className="w-full h-auto flex flex-col items-center gap-20 py-10">
            <HomeLogo />
            <Upcoming />
        </div>
    )
}