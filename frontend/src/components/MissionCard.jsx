import Image from "next/image";

export default function MissionCard({ title, description, imageURL = null}) {
  return (
    <div
      className="h-120 w-110 items-center rounded-3xl bg-linear-to-b from-light-blue to-lighter-blue brightness-100 p-5 shadow-xl"
    > 
        {imageURL
                ? <Image className="bg-gray-200 object-fill mx-auto h-50 rounded-2xl" src={imageURL} alt={title} />
                : <div className="bg-gray-200 object-fill mx-auto my-0 h-50 rounded-2xl" />
            }
      <h2
        className="mt-5 text-4xl font-extrabold text-dark-text font-noto text-center tracking-tight"
      >
        {title}
      </h2>
 
      <p className="mt-3 text-lg text-dark-text font-sans leading-relaxed" >
        {description}
      </p>
    </div>
  );
}