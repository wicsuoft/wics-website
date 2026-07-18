import MemberCard from './MemberCard'

const tempData = [
    { name: 'Chloe Lee', role: 'President', githubUrl: '#', linkedinUrl: '#' },
    { name: 'Yoyo Liu', role: 'Vice President', githubUrl: '#', linkedinUrl: '#' },
    { name: 'Nicole Leung', role: 'Internal', githubUrl: '#', linkedinUrl: '#' },
    { name: 'Alisa Iskakova', role: 'Mentorship', githubUrl: '#', linkedinUrl: '#' },
    { name: 'CC', role: 'External', githubUrl: '#', linkedinUrl: '#' },
    { name: 'Yoyo Liu', role: 'Events', githubUrl: '#', linkedinUrl: '#' },
    { name: 'Nicole Leung', role: 'Marketing', githubUrl: '#', linkedinUrl: '#' },
    { name: 'Alisa Iskakova', role: 'Mentorship', githubUrl: '#', linkedinUrl: '#' },
    { name: 'Chloe Lee', role: 'Web Development', githubUrl: '#', linkedinUrl: '#' },
    { name: 'Yoyo Liu', role: 'Web Development', githubUrl: '#', linkedinUrl: '#' },
    { name: 'Nicole Leung', role: 'Advisor', githubUrl: '#', linkedinUrl: '#' },
    { name: 'Alisa Iskakova', role: 'Advisor', githubUrl: '#', linkedinUrl: '#' },
]

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-lighter-blue px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
            <section className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-dark-text">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center leading-tight">
                    About WiCS
                </h1>

                <p className="w-full max-w-4xl text-center text-base sm:text-lg md:text-xl font-light">
                    WiCS is dedicated to empowering women in tech by providing a supportive community where members can grow both personally and professionally. We focus on fostering connections, sharing knowledge, and creating opportunities for women to excel in the tech industry. Through workshops, mentorship programs, and networking events, we aim to bridge the gender gap and inspire the next generation of female leaders in computer science.
                </p>

                <h2 className="pt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight">
                    Meet the Team 2026-2027
                </h2>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                    Executives
                </h3>

                <div className="mt-4 grid w-full max-w-6xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-14">
                    {tempData.map((member) => (
                        <MemberCard
                            key={`${member.name}-${member.role}`}
                            name={member.name}
                            role={member.role}
                            githubUrl={member.githubUrl}
                            linkedinUrl={member.linkedinUrl}
                        />
                    ))}
                </div>

                <h3 className="text-2xl pt-20 sm:text-3xl md:text-4xl font-bold text-center">
                    Associates
                </h3>

                <div className="mt-4 grid w-full max-w-6xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-14">
                    {tempData.map((member) => (
                        <MemberCard
                            key={`${member.name}-${member.role}`}
                            name={member.name}
                            role={member.role}
                            githubUrl={member.githubUrl}
                            linkedinUrl={member.linkedinUrl}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}