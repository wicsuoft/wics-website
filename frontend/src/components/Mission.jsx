import { MissionCard } from "./index"

export default function Mission() {
    return (
        <div className="w-full sm:w-auto h-auto flex flex-col items-center gap-12">
            <div className="flex flex-row items-center gap-35">
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