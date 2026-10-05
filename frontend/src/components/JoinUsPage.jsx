export default function JoinUsPage() {
    return (
        <main className="min-h-screen bg-lighter-blue">
            <section className="bg-linear-to-b from-background to-lighter-blue px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-dark-text">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center leading-tight">
                        For Students
                    </h1>

                    <p className="w-full max-w-4xl text-center text-base sm:text-lg md:text-xl font-light">
                        Interested in being a part of the WiCS community? Connect with fellow students, explore opportunities, and grow together. Join us!
                    </p>
                </div>
            </section>

            <section className="bg-lighter-blue px-4 sm:px-6 lg:px-10 pb-16 sm:pb-20">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-dark-text">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-tight">
                        Open Roles
                    </h2>
                    <p className="w-full max-w-4xl text-center text-base sm:text-lg md:text-xl font-light">
                        We currently do not have any open roles. Please check back later!
                    </p>
                </div>
            </section>
        </main>
    );
}
