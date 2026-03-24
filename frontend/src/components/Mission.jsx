import { MissionCard } from "./index"

export default function Mission() {
    return (
        <div className="w-full h-auto flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
            <div className="w-full flex flex-col md:flex-row items-center md:items-stretch md:justify-center gap-6 sm:gap-8 md:gap-16">
                <MissionCard 
                    title='Mission'
                    description='Our goal is to do our part in closing the gender gap by encouraging the participation of female students in computer science through a range of social, outreach, and informational events.'
                />
                <MissionCard 
                    title='Vision'
                    description='We aspire to create a diverse and inclusive University of Toronto computer science community where all students, regardless of gender, can flourish academically and professionally.' 
                />
            </div>
        </div>
    )
}