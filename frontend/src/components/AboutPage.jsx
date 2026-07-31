import MemberCard from './MemberCard'
import MeetAlumni from './MeetAlumni'

const tempData = [
    { name: 'Chloe Lee', role: 'President', githubUrl: '#', linkedinUrl: '#' },
    { name: 'Yoyo Liu', role: 'Vice President', githubUrl: '#', linkedinUrl: '#' },
    { name: 'Nicole Leung', role: 'Internal', githubUrl: '#', linkedinUrl: '#' },
    { name: 'Bob Joe', role: 'Mentorship', githubUrl: '#', linkedinUrl: '#' },
    { name: 'CC', role: 'External', githubUrl: '#', linkedinUrl: '#' },
    { name: 'Alice Smith', role: 'Events', githubUrl: '#', linkedinUrl: '#' },
    { name: 'Annie Wang', role: 'Marketing', githubUrl: '#', linkedinUrl: '#' },
    { name: 'Ingrid Florea', role: 'Mentorship', githubUrl: '#', linkedinUrl: '#' },
    { name: 'Elsa Frozen', role: 'Web Development', githubUrl: '#', linkedinUrl: '#' },
    { name: 'Anna Frozen', role: 'Web Development', githubUrl: '#', linkedinUrl: '#' },
    { name: 'Ola Nordmann', role: 'Advisor', githubUrl: '#', linkedinUrl: '#' },
    { name: 'Name Name', role: 'Advisor', githubUrl: '#', linkedinUrl: '#' },
]

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-lighter-blue">
            <section className="bg-linear-to-b from-background to-lighter-blue px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-dark-text">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center leading-tight">
                    About WiCS
                </h1>

                <p className="w-full max-w-4xl text-center text-base sm:text-lg md:text-xl font-light">
                    WiCS is dedicated to empowering women in tech by providing a supportive community where members can grow both personally and professionally. We focus on fostering connections, sharing knowledge, and creating opportunities for women to excel in the tech industry. Through workshops, mentorship programs, and networking events, we aim to bridge the gender gap and inspire the next generation of female leaders in computer science.
                </p>

                <h2 className="pt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-tight">
                    Meet the Team 2026-2027
                </h2>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                    Executives
                </h3>
                </div>
            </section>

            <section className="bg-lighter-blue px-4 sm:px-6 lg:px-10 pb-16 sm:pb-20">
                <div className="mx-auto flex max-w-7xl flex-col items-center text-dark-text">

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

                <h3 className="text-xl pt-20 sm:text-2xl md:text-3xl font-bold text-center">
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
                </div>
            </section>
            <MeetAlumni />
        </main>
    )
}