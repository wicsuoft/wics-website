import Link from "next/link";
import JoinUsButton from "./JoinUsButton";

export default function MeetAlumni() {
	return (
		<section className="w-full bg-lighter-blue px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20">
			<div className="mx-auto flex w-full max-w-7xl flex-col gap-8 text-dark-text md:flex-row md:items-center md:gap-10">
				<div className="relative min-w-0 flex-1 pl-6 sm:pl-8 md:pl-14">
					<span aria-hidden="true" className="absolute left-0 top-0 h-full w-px bg-dark-text/40" />
					<div className="space-y-4">
					<h2 className="text-lg font-bold leading-none tracking-tight text-dark-text sm:text-2xl md:text-3xl">
						Meet our Alumni
					</h2>

					<p className="max-w-4xl text-md leading-relaxed text-dark-text/95 sm:text-xl md:text-2xl md:leading-relaxed">
						Our alumni represent the strength, talent, and resilience of women in technology. From software engineering to research and entrepreneurship, they continue to break barriers and shape the future of tech. We are proud to celebrate their achievements and the paths they have paved for those who follow. Check them out here.
					</p>
					</div>
				</div>

				<JoinUsButton
                    text="View Our Alumni"
                    href="/alumni"
                    size="lg"
                    className="mx-auto hover:bg-light-blue text-center w-full max-w-xs md:mx-0 md:w-auto"
                />
			</div>
		</section>
	);
}
