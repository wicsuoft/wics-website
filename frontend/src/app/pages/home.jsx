import { HomeLogo, Upcoming, Mission } from "../../components/index";

export default function Home() {
    return (
        <div className="w-full h-auto flex flex-col items-center gap-20 py-10">
            <HomeLogo />
            <Upcoming />
            <Mission />
        </div>
    )
}