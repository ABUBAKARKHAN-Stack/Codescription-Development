import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

import Link from "next/link";
import React from "react";

const FooterSocial = () => {
  const socialLinks = [
    {
      icon: <LinkedinIcon className="text-foreground size-5" />,
      link: "#",
      label: "LinkedIn",
    },
    {
      icon: <GithubIcon className="text-foreground size-5" />,
      link: "#",
      label: "GitHub",
    },
    {
      icon: <FaXTwitter className="text-foreground size-5" />,
      link: "#",
      label: "Twitter",
    },
    {
      icon: <FacebookIcon className="text-foreground size-5" />,
      link: "#",
      label: "Facebook",
    },
    {
      icon: <InstagramIcon className="text-foreground size-5" />,
      link: "#",
      label: "Instagram",
    },
  ];

  return (
    <section className="space-y-4" aria-labelledby="social-heading">
      <h2
        id="social-heading"
        className="text-foreground text-center text-2xl font-bold tracking-wide"
      >
        Connect With Us
      </h2>
      <div className="flex items-center justify-center gap-x-4">
        {socialLinks.map(({ icon, link, label }, i) => (
          <Link
            href={link}
            key={i}
            aria-label={`${label} profile`}
            className="border-border hover: hover:shadow-primary/25 rounded-full border bg-gradient-to-r from-purple-600 to-purple-700 p-3 transition-all duration-200 ease-linear hover:-translate-y-1.5 hover:scale-120 hover:from-purple-500 hover:to-purple-600 hover:shadow-lg"
          >
            {icon}
          </Link>
        ))}
      </div>
    </section>
  );
};
export default FooterSocial;
