import Image from "next/image";

export default function MissionCard({ title, description, imageURL = null, imagePosition = "center 80%"}) {
  return (
    <div
      className="h-auto min-h-120 w-full max-w-sm md:w-110 items-center rounded-3xl bg-linear-to-b from-light-blue to-lighter-blue brightness-100 p-4 sm:p-5 shadow-xl"
    > 
        {imageURL
                ? <Image className="bg-gray-200 object-cover mx-auto w-full h-40 sm:h-44 md:h-50 rounded-2xl" style={{ objectPosition: imagePosition }} src={imageURL} alt={title} />
                : <div className="bg-gray-200 object-fill mx-auto my-0 h-40 sm:h-44 md:h-50 rounded-2xl" />
            }
      <h2
        className="mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-text font-noto text-center "
      >
        {title}
      </h2>
 
      <p className="mt-2 sm:mt-3 text-base sm:text-lg text-dark-text font-sans" >
        {description}
      </p>
    </div>
  );
}
