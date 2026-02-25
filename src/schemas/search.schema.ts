import { z } from "zod";

export const searchSchema = z.object({
  q: z
    .string()
    .min(2, { message: "Digite ao menos 2 caracteres" })
    .max(100, { message: "Busca muito longa" })
    .trim()
    .transform((val) => val.replace(/[<>]/g, "")),
});

export type SearchFormData = z.infer<typeof searchSchema>;
