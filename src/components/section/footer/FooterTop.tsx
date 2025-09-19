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
import Image from "next/image";
import { footerData } from "@/data/footer.data";
import { brandName } from "@/constants/constants";
import { successToast } from "@/helpers/toasts.helper";

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
        <h2 className="text-foreground text-xl font-semibold">{heading}</h2>
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

  const onSubmit = (data: z.infer<typeof newsLetterSchema>) => {
    successToast("You have subscribe our news letter")
    form.reset()
    console.log(data);
  };

  return (
    <section
      className="flex w-full flex-col flex-wrap gap-10 sm:flex-row sm:justify-between"
      aria-labelledby="footer-main"
    >
      {/* === Newsletter Subscription === */}
      <div
        className="flex max-w-sm flex-col gap-y-4"
        aria-labelledby="newsletter-heading"
      >
        <Image
          src="/assets/cs-logo-2.svg"
          alt={`${brandName} - Logo 2`}
          className="size-20 object-contain"
          width={45}
          height={45}
        />
        <h2
          id="newsletter-heading"
          className="text-foreground text-xl font-semibold"
        >
          Stay Updated with <span className="font-extrabold">{brandName}</span>
        </h2>
        <div className="flex flex-col gap-y-2">
          <p className="text-muted-foreground text-sm">
            Get the latest tech insights, industry news, and exclusive updates
            from our software house.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="z-50">
              <FormField
                name="news-letter"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your email"
                          aria-label="Enter your email for newsletter"
                          onBlur={() => form.clearErrors("news-letter")}
                          className="border-primary/50"
                        />
                      </FormControl>
                      <Button
                        type="submit"
                        variant={"ghost"}
                        className="absolute top-1/2 right-2 size-8 -translate-y-1/2 rounded-full hover:cursor-pointer"
                      >
                        <SendHorizonalIcon className="size-4" />
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </div>

      {/* === Services Links === */}
      <RenderFooterLinks heading="Services" links={footerData.servicesLinks} />

      {/* === Company Links === */}
      <RenderFooterLinks heading="Company" links={footerData.companyLinks} />

      {/* === Support Links === */}
      {/* <RenderFooterLinks heading="Contact" links={footerData.contactLink} /> */}
    </section>
  );
};

export default FooterTop;
