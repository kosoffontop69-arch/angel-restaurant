"use client";

import { ScrollReveal } from "./animations";

const footerLinks = {
  Visit: [
    { label: "Reservations", href: "#pricing" },
    { label: "Private Events", href: "#pricing" },
    { label: "Gift Cards", href: "#" },
    { label: "Directions", href: "#" },
  ],
  About: [
    { label: "Our Story", href: "#" },
    { label: "The Team", href: "#features" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  Connect: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Newsletter", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* CTA Band */}
      <div className="border-b border-neutral-800">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Experience Angel?
            </h2>
            <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
              Join us for an unforgettable evening. Reserve your table today and
              let us create something special for you.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/20"
            >
              Make a Reservation
            </a>
          </ScrollReveal>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">👼</span>
              <span className="font-display text-xl font-bold text-white">
                Angel Restaurant
              </span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-6">
              A sanctuary of culinary excellence in the heart of the city.
              Crafting memorable dining experiences since 2011.
            </p>
            <div className="text-sm text-neutral-500 space-y-1">
              <p>123 Celestial Avenue, Downtown</p>
              <p>Open Tue–Sun, 11:30am – 10:00pm</p>
              <p>+1 (555) 234-5678</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} Angel Restaurant. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
