import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'

export default function MemberCard({ 
    name, 
    role, 
    imageUrl=undefined, 
    linkedinUrl=undefined, 
    githubUrl= undefined
    }) {
    return (
        <article className="flex flex-col items-center text-center text-dark-text">
            {imageUrl ? (
                <Image
                    src={imageUrl}
                    alt={name}
                    className="mb-3 h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28 md:h-32 md:w-32"
                    width={128}
                    height={128}
                /> 
            ) : (
            <div className="mb-3 h-24 w-24 rounded-full bg-gray-300 sm:h-28 sm:w-28 md:h-32 md:w-32">
            </div> 
            )}

            <div className="text-center">
                <p className="text-sm sm:text-base font-bold leading-tight">{name}</p>
                <p className="text-sm sm:text-base leading-tight">{role}</p>
            </div>
            <div className="mt-2 flex items-center justify-center gap-2 text-2xl text-dark-text">
                {githubUrl && (
                    <a href={githubUrl} aria-label={`${name} GitHub`} className="transition-transform hover:scale-110">
                        <FaGithub />
                    </a>
                )}
                {linkedinUrl && (
                    <a href={linkedinUrl} aria-label={`${name} LinkedIn`} className="transition-transform hover:scale-110">
                        <FaLinkedinIn />
                    </a>
                )}
            </div>
        </article>
    )
}