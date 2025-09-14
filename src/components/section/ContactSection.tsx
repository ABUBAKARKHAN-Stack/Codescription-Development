"use client";

import { useForm } from "react-hook-form";
import { ContactSectionHeader } from "@/data/contact.data";
import { Mail, Phone, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/reusable";
import ContainerLayout from "@/components/layout/ContainerLayout";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      reset();
      alert("Message sent!");
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <section
    id="get-in-touch-section"
    className="h-full w-full bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900 py-16 text-white">
      <ContainerLayout>
        <div className="mx-auto grid grid-cols-1 items-center gap-12 lg:flex lg:grid-cols-2 lg:justify-between">
          {/* Left content */}
          <div>
            <SectionHeader mainHeading={ContactSectionHeader.mainHeading} />
            <p className="mx-auto my-8 max-w-[400px] text-center text-slate-300 lg:text-left">
              We’d love to hear from you. Whether you have a question, feedback,
              or just want to say hello, feel free to reach out.
            </p>

            <div className="flex flex-col items-center space-y-4 lg:items-baseline">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-purple-400" />
                <a
                  href="mailto:contact@yourstartup.com"
                  className="hover:underline"
                >
                  contact@yourstartup.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-purple-400" />
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-purple-400" />
                <span>123 Space Street, Galaxy City</span>
              </div>
            </div>
          </div>

          {/* Right content: Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 rounded-2xl p-8 shadow-2xl backdrop-blur-3xl lg:w-[500px]"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  className="border-brand/50 border-2"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Your Email"
                  className="border-brand/50 border-2"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Write your message..."
                  className="border-brand/50 border-2"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <p className="text-sm text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size={"lg"}
                className="w-full text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default ContactSection;
