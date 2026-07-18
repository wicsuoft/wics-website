'use client';
import { useState } from "react";
import Image from "next/image";

const LOGOS = [
  { name: "logo1", url: "/sponsor/logo10.png" },
  { name: "logo2", url: "/sponsor/logo2.png" },
  { name: "logo3", url: "/sponsor/logo3.png" },
  { name: "logo4", url: "/sponsor/logo4.png" },
  { name: "logo5", url: "/sponsor/logo5.png" },
];

function LogoTrack({ logos }) {
  return (
    <div className="flex items-center shrink-0">
      {logos.map((logo, i) => (
        <div
          key={`${logo.name}-${i}`}
          className="flex items-center justify-center shrink-0 mx-15 sm:mx-15 md:mx-30"
        >
          <Image
            src={logo.url}
            alt={logo.name}
            className="h-20 sm:h-20 w-auto max-w-\[250px\] object-contain"
            width={250}
            height={90}
          />
        </div>
      ))}
    </div>
  );
}

export default function LogoCarousel() {
  const [paused, setPaused] = useState(false);

  return (
    <>
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .logo-scroll {
          animation: scroll-left 10s linear infinite;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }
        .logo-paused {
          animation-play-state: paused;
        }
        .fade-left {
          background: linear-gradient(to right, var(--color-lighter-blue) 10%, transparent);
        }
        .fade-right {
          background: linear-gradient(to left, var(--color-lighter-blue) 10%, transparent);
        }
      `}</style>

      <div className="w-full bg-lighter-blue flex flex-col py-15 items-center sm:gap-7 md:gap-10">
        <h3 className="text-dark-text text-2xl sm:text-3xl font-noto font-bold text-center pb-10 md:pb-5 px-2">
          Supported by
        </h3>

        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none fade-left" />
          <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none fade-right" />

          <div className={`flex items-center w-max logo-scroll ${paused ? "logo-paused" : ""}`}>
            <LogoTrack logos={LOGOS} />
            <LogoTrack logos={LOGOS} />
          </div>
        </div>
      </div>
    </>
  );
}
