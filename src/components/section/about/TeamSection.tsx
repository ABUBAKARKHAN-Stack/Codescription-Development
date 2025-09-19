import { ContainerLayout } from "@/components/layout";
import { SectionHeader } from "@/components/reusable";
import Image from "next/image";
import { FaLinkedin, FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import React from "react";
import { foundersSocials } from "@/constants/constants";
import Particles from "@/components/ui/particles";
import { cn } from "@/lib/utils";

const { abubakar } = foundersSocials;

const teamMembers = [
  {
    name: "Abubakar Aijaz",
    role: "Co-Founder & CTO",
    image: "/assets/imgs/team/abubakar.jpg",
    socials: {
      linkedin: abubakar.linkedin,
      github: abubakar.github,
      x: abubakar.x,
    },
  },
];

const TeamSection = () => {
  return (
    <section className="h-full w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <ContainerLayout>
        <SectionHeader mainHeading="Meet the Founders" />

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group relative scale-100 overflow-hidden rounded-xl bg-white/5 px-6 py-10 text-center shadow-md backdrop-blur-sm transition-all duration-300 ease-linear hover:scale-105 hover:shadow-purple-500/20"
            >
              <div
                className="absolute inset-0 -z-20 opacity-40 invert"
                style={{ backgroundImage: "url('/assets/bg-pattern.svg')" }}
              />
              <Particles
                particlesCount={15}
                className="-z-10"
                particlesStyles="opacity-0"
              />
              <div className="relative mx-auto mb-4 size-30">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  priority
                  className="rounded-full border-2 border-purple-400/40 object-cover shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-purple-200">
                {member.name}
              </h3>
              <p className="text-sm font-medium">{member.role}</p>

              {/* Social Icons */}
              <div className="mt-4 flex justify-center gap-4 text-purple-300">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "rounded-full border p-1.5 hover:border-purple-500 hover:text-purple-500",
                      "border-white text-white hover:-translate-y-1.5 hover:scale-105 hover:cursor-pointer",
                      "translate-y-0 scale-95 transform",
                      "transition-[transform_colors] duration-300 ease-out",
                    )}
                  >
                    <FaLinkedin className="size-5.5 drop-shadow-xs drop-shadow-black/50" />
                  </a>
                )}
                {member.socials.x && (
                  <a
                    href={member.socials.x}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "rounded-full border p-1.5 hover:border-purple-500 hover:text-purple-500",
                      "border-white text-white hover:-translate-y-1.5 hover:scale-105 hover:cursor-pointer",
                      "translate-y-0 scale-95 transform",
                      "transition-[transform_colors] duration-300 ease-out",
                    )}
                  >
                    <FaSquareXTwitter className="size-5.5 drop-shadow-xs drop-shadow-black/50" />
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "rounded-full border p-1.5 hover:border-purple-500 hover:text-purple-500",
                      "border-white text-white hover:-translate-y-1.5 hover:scale-105 hover:cursor-pointer",
                      "translate-y-0 scale-95 transform",
                      "transition-[transform_colors] duration-300 ease-out",
                    )}
                  >
                    <FaSquareGithub className="size-5.5 drop-shadow-xs drop-shadow-black/50" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default TeamSection;
