"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./animations";

const faqs = [
  {
    q: "Do I need a reservation?",
    a: "We strongly recommend reservations, especially for dinner service and weekends. Walk-ins are welcome for lunch on weekdays, subject to availability.",
  },
  {
    q: "What is your dress code?",
    a: "We maintain a smart-casual dress code. We ask guests to avoid athletic wear, flip-flops, and overly casual attire. For our Chef's Table experience, business casual or above is appreciated.",
  },
  {
    q: "Can you accommodate dietary restrictions?",
    a: "Absolutely. Our kitchen accommodates vegetarian, vegan, gluten-free, and most allergy requirements. Please inform us when booking so our chefs can prepare alternatives that match our tasting menu quality.",
  },
  {
    q: "Is there parking available?",
    a: "Complimentary valet parking is available Thursday through Sunday. On other days, our adjacent parking garage offers validated rates of $5 for up to 3 hours.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We ask for 24-hour notice for cancellations. For parties of 6 or more, 48-hour notice is required. Late cancellations may incur a $50 per person fee.",
  },
  {
    q: "Do you offer gift cards?",
    a: "Yes! Gift cards are available in any denomination and can be purchased at the restaurant or through our website. They never expire and can be used for dining or our retail wine selection.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-semibold text-neutral-900 pr-8 group-hover:text-primary-600 transition-colors">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-neutral-100 group-hover:bg-primary-50 text-neutral-500 group-hover:text-primary-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-neutral-600 leading-relaxed pr-12">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-neutral-50">
      <div className="container-max mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary-700 bg-primary-50 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Questions & <span className="text-primary-600">Answers</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
            Everything you need to know before your visit.
          </p>
        </ScrollReveal>

        <ScrollReveal className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-sm">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
