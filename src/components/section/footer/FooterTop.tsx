"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { newsLetterSchema } from "@/schema/news-letterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendHorizonalIcon } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React from "react";


const RenderFooterLinks = ({
  heading,
  links,
}: {
  heading: string;
  links: any[];
}) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-foreground">
          {heading}
        </h2>
      </div>
      <div className="flex flex-col gap-y-2 text-sm">
        {links.map(({ name, link }, i) => (
          <Link
            key={i}
            href={link}
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

const FooterTop = () => {
  const form = useForm({
    resolver: zodResolver(newsLetterSchema),
    defaultValues: {
      "news-letter": "",
    },
  });

  const servicesLinks = [
    {

      name: "Web Development",
      link: "/services/web-development",
    },
    {

      name: "App Development",
      link: "/services/app-development",
    },
    {

      name: "Full Stack Development",
      link: "/services/full-stack-development",
    },
    {

      name: "E-Commerce Solutions",
      link: "/services/e-commerce",
    },
    {

      name: "UI/UX Design",
      link: "/services/ui-ux-design",
    },
    {

      name: "DevOps & Automation",
      link: "/services/devops-automation",
    },
  ];;
  ;

  const companyLinks = [
    { name: "About Us", link: "/about" },
    { name: "Our Team", link: "/team" },
    { name: "Careers", link: "/careers" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Blog", link: "/blog" },
  ];

  const supportLinks = [
    { name: "Contact", link: "/contact" },
    { name: "Support Center", link: "/support" },
    { name: "Documentation", link: "/docs" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Terms of Service", link: "/terms" },
  ];

  const onSubmit = (data: z.infer<typeof newsLetterSchema>) => {
    console.log(data);
  };

  return (
    <section
      className="flex w-full flex-col flex-wrap gap-10 sm:flex-row sm:justify-between"
      aria-labelledby="footer-main"
    >
      {/* === Newsletter Subscription === */}
      <div
        className="flex flex-col gap-y-4 max-w-sm"
        aria-labelledby="newsletter-heading"
      >
        <div className="space-y-1">
          <h2
            id="newsletter-heading"
            className="text-xl font-semibold text-foreground"
          >
            Stay Updated
          </h2>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-sm text-muted-foreground">
            Get the latest tech insights, industry news, and exclusive updates from our software house.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="z-50">
              <div className="relative">
                <FormField
                  name="news-letter"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your email"
                          aria-label="Enter your email for newsletter"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  variant={"ghost"}
                  className="absolute top-1/2 right-2 -translate-y-1/2 size-8 rounded-full hover:bg-primary/20 hover:text-primary"
                >
                  <SendHorizonalIcon className="size-4" />
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>

      {/* === Services Links === */}
      <RenderFooterLinks heading="Services" links={servicesLinks} />

      {/* === Company Links === */}
      <RenderFooterLinks heading="Company" links={companyLinks} />

      {/* === Support Links === */}
      <RenderFooterLinks heading="Support" links={supportLinks} />
    </section>
  );
};

export default FooterTop