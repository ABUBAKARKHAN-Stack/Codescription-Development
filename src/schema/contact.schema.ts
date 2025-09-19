import { z } from "zod";

const baseContactSchema = z.object({
  name: z
    .string()
    .min(3, { error: "Name must be at least 3 characters long" })
    .max(50, { error: "Name cannot exceed 50 characters" }),

  email: z.email({ error: "Enter a valid email address" }),

  message: z
    .string()
    .min(50, { error: "Message must be at least 50 characters long" }),
});

const contactSchema = baseContactSchema.extend({
  subject: z.string().min(1, { error: "Please select a subject" }),
});

const servicesContactSchema = baseContactSchema.extend({
  service: z.string().min(1, { error: "Please select a service" }),
});

export { contactSchema, servicesContactSchema };
