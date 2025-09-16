import { ContainerLayout } from "@/components/layout";
import { SectionHeader } from "@/components/reusable";
import Image from "next/image";
import { FaLinkedin, FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import React from "react";

const teamMembers = [
  {
    name: "Awais Tahir",
    role: "Co-Founder & CEO",
    image: "/assets/cs-fav.svg",
    socials: {
      linkedin: "https://linkedin.com/in/awais",
      x: "#",
      github: "#",
    },
  },
  {
    name: "Abubakar Aijaz",
    role: "Co-Founder & CTO",
    image: "/assets/cs-fav.svg",
    socials: {
      linkedin: "https://linkedin.com/in/abubakar",
      x: "#",
      github: "https://github.com/abubakar",
    },
  },
];

const TeamSection = () => {
  return (
    <section className="h-full w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <ContainerLayout>
        <SectionHeader mainHeading="Meet the Founders" />

        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl bg-white/5 p-6 text-center shadow-md backdrop-blur-sm transition duration-300 hover:shadow-purple-500/20"
            >
              <div className="relative mx-auto mb-4 h-28 w-28">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full border-2 border-purple-400/40 object-cover shadow-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-purple-200">
                {member.name}
              </h3>
              <p className="text-sm">{member.role}</p>

              {/* Social Icons */}
              <div className="mt-4 flex justify-center gap-4 text-purple-300">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="size-6 transition hover:text-white" />
                  </a>
                )}
                {member.socials.x && (
                  <a href={member.socials.x} target="_blank" rel="noreferrer">
                    <FaSquareXTwitter className="size-6 transition hover:text-white" />
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaSquareGithub className="size-6 transition hover:text-white" />
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
