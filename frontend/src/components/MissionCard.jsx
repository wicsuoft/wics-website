import Image from "next/image";

export default function MissionCard({ title, description, imageURL = null}) {
  return (
    <div
      className="h-120 w-110 items-center rounded-3xl bg-linear-to-b from-light-blue to-lighter-blue p-5 shadow-xl"
    >
        {imageURL
                ? <Image className="bg-gray-200 object-fill mx-auto h-50 rounded-2xl" src={imageURL} alt={title} />
                : <div className="bg-gray-200 object-fill mx-auto my-0 h-50 rounded-2xl" />
            }
      <h2
        className="mt-5 text-3xl font-extrabold tracking-tight"
      >
        {title}
      </h2>
 
      <p className="mt-3 text-base leading-relaxed" style={{ color: "#1a4a46" }}>
        {description}
      </p>
    </div>
  );
}