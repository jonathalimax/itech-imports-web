import { z } from "zod";

export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, { message: "E-mail é obrigatório" })
    .email({ message: "E-mail inválido" })
    .max(254, { message: "E-mail muito longo" }),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
