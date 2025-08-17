import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const FooterSocial = () => {
  const socialLinks = [
    {
      icon: <LinkedinIcon className="size-5 text-foreground" />,
      link: "#",
      label: "LinkedIn"
    },
    {
      icon: <GithubIcon className="size-5 text-foreground" />,
      link: "#",
      label: "GitHub"
    },
    {
      icon: <TwitterIcon className="size-5 text-foreground" />,
      link: "#",
      label: "Twitter"
    },
    {
      icon: <FacebookIcon className="size-5 text-foreground" />,
      link: "#",
      label: "Facebook"
    },
    {
      icon: <InstagramIcon className="size-5 text-foreground" />,
      link: "#",
      label: "Instagram"
    },
  ];

  return (
    <section className="space-y-4" aria-labelledby="social-heading">
      <h2
        id="social-heading"
        className="text-center text-2xl font-bold tracking-wide text-foreground"
      >
        Connect With Us
      </h2>
      <div className="flex items-center justify-center gap-x-4">
        {socialLinks.map(({ icon, link, label }, i) => (
          <Link
            href={link}
            key={i}
            aria-label={`${label} profile`}
            className="rounded-full bg-card border border-border p-3 transition-all duration-300 ease-in-out hover:bg-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
          >
            {icon}
          </Link>
        ))}
      </div>
    </section>
  );
};
export default FooterSocial;
