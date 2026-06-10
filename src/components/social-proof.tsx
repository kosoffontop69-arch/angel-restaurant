"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "./animations";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Food Critic, City Herald",
    quote:
      "Angel Restaurant redefines fine dining. Every dish tells a story, and the attention to detail is nothing short of extraordinary.",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    role: "Regular Guest",
    quote:
      "We've celebrated every anniversary here for the past 8 years. The staff remembers us by name, and the food just keeps getting better.",
    rating: 5,
  },
  {
    name: "Elena Rossi",
    role: "Travel Blogger",
    quote:
      "Of all the restaurants I've visited across 40 countries, Angel stands out for its perfect balance of innovation and warmth.",
    rating: 5,
  },
];

const logos = [
  "Michelin Guide",
  "James Beard",
  "Wine Spectator",
  "Zagat",
  "OpenTable",
];

export function SocialProof() {
  return (
    <section id="social-proof" className="section-padding bg-neutral-50">
      <div className="container-max mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary-700 bg-primary-50 rounded-full mb-4">
            Guest Reviews
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Loved by <span className="text-primary-600">Thousands</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear what our guests and critics have to say.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full p-8 rounded-2xl bg-white border border-neutral-200/60 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg
                      key={j}
                      className="w-5 h-5 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-700 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900 text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-neutral-500">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Logo bar */}
        <ScrollReveal delay={0.3}>
          <div className="border-t border-neutral-200 pt-12">
            <p className="text-center text-sm text-neutral-400 mb-8 uppercase tracking-wider font-medium">
              Recognized by
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
              {logos.map((logo) => (
                <div
                  key={logo}
                  className="text-neutral-400 font-display text-lg sm:text-xl font-bold opacity-60 hover:opacity-100 transition-opacity"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
