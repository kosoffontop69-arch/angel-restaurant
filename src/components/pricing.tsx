"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "./animations";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Lunch Tasting",
    price: "65",
    description: "A refined midday escape",
    features: [
      "3-course seasonal menu",
      "Amuse-bouche",
      "Artisan bread selection",
      "Coffee or tea",
      "Weekday availability",
    ],
    popular: false,
    cta: "Book Lunch",
  },
  {
    name: "Dinner Experience",
    price: "120",
    description: "Our signature evening journey",
    features: [
      "7-course tasting menu",
      "Wine pairing option (+$65)",
      "Intermezzo & palate cleansers",
      "Chef's table interaction",
      "Seasonal specialties",
      "Complimentary digestif",
    ],
    popular: true,
    cta: "Reserve Dinner",
  },
  {
    name: "Private Events",
    price: "Custom",
    description: "Bespoke celebrations",
    features: [
      "Customized menu design",
      "Private dining room",
      "Dedicated service team",
      "Floral arrangements",
      "AV equipment included",
      "Groups of 8-50 guests",
    ],
    popular: false,
    cta: "Inquire Now",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-max mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary-700 bg-primary-50 rounded-full mb-4">
            Our Menu
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Crafted for Every{" "}
            <span className="text-primary-600">Occasion</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
            From intimate lunches to grand celebrations, choose the experience
            that suits your moment.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -6 }}
                className={`relative h-full flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? "bg-neutral-900 border-neutral-800 shadow-2xl shadow-neutral-900/20 scale-[1.02]"
                    : "bg-white border-neutral-200 hover:border-primary-200 hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-xl font-bold mb-1 ${
                      plan.popular ? "text-white" : "text-neutral-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      plan.popular ? "text-neutral-400" : "text-neutral-500"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span
                    className={`text-4xl font-bold ${
                      plan.popular ? "text-white" : "text-neutral-900"
                    }`}
                  >
                    {plan.price === "Custom" ? "" : "$"}
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span
                      className={`text-sm ml-1 ${
                        plan.popular ? "text-neutral-400" : "text-neutral-500"
                      }`}
                    >
                      / person
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          plan.popular ? "text-primary-400" : "text-primary-500"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-neutral-300" : "text-neutral-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3.5 rounded-full font-semibold text-sm transition-colors ${
                    plan.popular
                      ? "bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/30"
                      : "bg-neutral-900 text-white hover:bg-neutral-800"
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
