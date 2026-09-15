import Link from "next/link"

export default function EventInfoCard({ month, date, year, title, description, type }) {
	const buttonText = type === "upcoming"
		? "Register here!"
		: "Check out our photo gallery!"

	return (
		<article className="box-border min-w-0 w-full max-w-5xl overflow-hidden rounded-xl bg-white px-5 py-8 sm:px-8 sm:py-8 lg:px-10 lg:py-11">
			<div className="flex min-w-0 flex-col gap-6 sm:gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
				<div className="flex min-w-0 flex-1 flex-col items-start">
					<p className="max-w-full wrap-break-word font-noto text-sm font-bold tracking-wide text-med-blue sm:text-base md:text-xl">
						{month} {date}, {year}
					</p>
					<h2 className="mt-1 max-w-full wrap-break-word font-noto text-xl font-bold leading-tight text-dark-text sm:mt-2 sm:text-3xl md:text-5xl">
						{title}
					</h2>
					<p className="mt-3 max-w-2xl wrap-break-word text-xs leading-relaxed text-dark-text line-clamp-3 sm:mt-5 sm:text-sm sm:line-clamp-4 md:text-lg md:line-clamp-none">
						{description}
					</p>
					<Link
						href="/register"
						className="mt-6 inline-flex w-fit max-w-full items-center justify-center rounded-lg bg-background px-4 py-2.5 text-center font-noto text-sm font-bold leading-snug text-dark-text transition-colors hover:bg-med-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-text sm:mt-8 sm:px-8 sm:py-3 sm:text-base md:text-lg hover:cursor-pointer"
					>
						{buttonText}
					</Link>
				</div>
				<div
					aria-label={`${title} event image`}
					className="hidden aspect-square w-full max-w-40 shrink-0 self-center rounded-xl bg-gray-300 sm:max-w-48 md:block md:max-w-60"
				/>
			</div>
		</article>
	)
}
