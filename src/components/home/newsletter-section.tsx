"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { newsletterSchema, type NewsletterFormData } from "@/schemas/newsletter.schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    mode: "onBlur",
  });

  const onSubmit = async (_data: NewsletterFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
  };

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]"
    >
      <motion.div
        className="mx-auto max-w-xl text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0A84FF]/10 border border-[#0A84FF]/20 mb-6 mx-auto">
          <Mail className="h-5 w-5 text-[#0A84FF]" />
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
          Ofertas exclusivas no seu e-mail
        </h2>
        <p className="mt-3 text-[#A1A1A6] text-base">
          Seja o primeiro a saber sobre novos produtos, promoções e lançamentos Apple.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 flex flex-col items-center gap-3"
          >
            <CheckCircle2 className="h-12 w-12 text-green-400" />
            <p className="text-white font-medium">Você está na lista!</p>
            <p className="text-[#6E6E73] text-sm">
              Obrigado por se cadastrar. Em breve você receberá nossas ofertas exclusivas.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8" noValidate>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  {...register("email")}
                  className="h-12 bg-white/[0.04] border-white/[0.12] text-white placeholder:text-[#6E6E73] focus:border-[#0A84FF] focus:ring-[#0A84FF] rounded-full px-5"
                  aria-label="Seu endereço de e-mail"
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-400 text-left px-4">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 px-6 bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-white rounded-full font-medium whitespace-nowrap disabled:opacity-60"
              >
                {isSubmitting ? "Enviando..." : "Receber ofertas"}
              </Button>
            </div>
            <p className="mt-3 text-xs text-[#6E6E73]">
              Sem spam. Cancele quando quiser.
            </p>
          </form>
        )}
      </motion.div>
    </section>
  );
}
