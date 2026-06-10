"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "./animations";
import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Farm-to-Table Fresh",
    description:
      "Every ingredient is sourced from local farms within 50 miles. We build relationships with growers who share our passion for sustainable, organic produce.",
    accent: "from-green-500 to-emerald-600",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Michelin-Star Chefs",
    description:
      "Our kitchen is led by award-winning Chef Isabella Torres, whose innovative approach blends traditional techniques with modern culinary creativity.",
    accent: "from-primary-500 to-primary-700",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A2.704 2.704 0 003 15.546M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
    title: "Unforgettable Events",
    description:
      "From intimate dinners to grand celebrations, our private dining rooms and expert event team create bespoke experiences tailored to every occasion.",
    accent: "from-gold to-amber-600",
  },
];

export function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-max mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary-700 bg-primary-50 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            A Dining Experience
            <br />
            <span className="text-primary-600">Like No Other</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
            Three pillars define the Angel experience — exceptional ingredients,
            world-class talent, and moments that last a lifetime.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative h-full p-8 rounded-2xl bg-neutral-50 border border-neutral-200/60 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.accent} text-white mb-6`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-primary-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
