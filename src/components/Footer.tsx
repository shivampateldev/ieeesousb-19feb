import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  ChevronUp,
} from "lucide-react";
import { useTheme } from "@/lib/theme-provider";
import { cn } from "@/lib/utils";
import { SiX } from "react-icons/si";
import { SiThreads } from "react-icons/si";
import { useState } from "react";

/* ---------- data ---------- */

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team/executive-members" },
  { label: "Bylaws", href: "/bylaws" },
  { label: "FAQ", href: "/faq" },
  { label: "Join IEEE", href: "/join" },
];

const SOCIAL_LINKS = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/ieee_silveroakuni/",
    icon: Instagram,
  },
  {
    platform: "X",
    url: "https://twitter.com/IEEE_SilverOak",
    icon: SiX,
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/IEEESilverOakUni",
    icon: Facebook,
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/company/ieee-silveroakuni/",
    icon: Linkedin,
  },
  {
    platform: "Threads",
    url: "https://www.threads.net/@ieee_silveroakuni",
    icon: SiThreads,
  },
];

/* ---------- component ---------- */

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <div className="w-full px-4 pb-4 md:px-6 md:pb-6 pt-10 flex justify-center bg-transparent mt-4">
      <footer className="relative w-full max-w-7xl bg-white/40 dark:bg-[#0A0F1D]/80 backdrop-blur-3xl border border-black/5 dark:border-white/10 shadow-2xl rounded-[2.5rem] pt-12 pb-6 md:pt-16 md:pb-8 overflow-hidden z-10 transition-all duration-500">

        {/* Animated background glows */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-70 animate-pulse pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent dark:from-white/5 opacity-50 pointer-events-none" />

        <div className="w-full mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          {/* ─── 4-column grid ─── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 mb-8 md:mb-10">
            {/* Column 1 — About SB */}
            <div className="reveal fade-up delay-1 group">
              <Link to="/" className="inline-block mb-4 transform transition-all duration-500 hover:scale-105">
                <img
                  src={
                    theme === "dark"
                      ? "http://ieee.socet.edu.in/wp-content/uploads/2025/09/Group-2085662984-1-scaled.png"
                      : "http://ieee.socet.edu.in/wp-content/uploads/2025/09/N_Wedge-removebg-preview.png"
                  }
                  alt="IEEE SOU SB Logo"
                  className={cn(
                    "w-auto object-contain h-10 md:h-16 transition-all duration-500",
                    theme === "dark" ? "max-w-[240px]" : "max-w-[280px]"
                  )}
                />
              </Link>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed transition-all duration-300 group-hover:text-foreground">
                Silver Oak University IEEE SB aims to give an interactive platform
                for students to develop professional and technical abilities.
              </p>
            </div>

            {/* Column 2 — Quick Links */}
            <div className="reveal fade-up delay-2">
              {/* Mobile accordion header */}
              <button
                onClick={() => setExpandedSection(expandedSection === 'quicklinks' ? null : 'quicklinks')}
                className="lg:hidden flex items-center justify-between w-full mb-4 text-sm font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors duration-300"
              >
                Quick Links
                <ChevronUp className={cn("h-4 w-4 transition-transform duration-300", expandedSection === 'quicklinks' ? 'rotate-180' : '')} />
              </button>

              {/* Desktop header */}
              <h4 className="hidden lg:block text-sm font-semibold uppercase tracking-wider mb-4 text-foreground">
                Quick Links
              </h4>

              {/* Links content */}
              <div className={cn(
                "lg:block space-y-2.5 transition-all duration-500",
                expandedSection === 'quicklinks' ? 'block' : 'hidden lg:block'
              )}>
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1"
                    >
                      <ExternalLink className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                      <span className="relative">
                        {link.label}
                        {/* underline slide */}
                        <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </div>
            </div>

            {/* Column 3 — Contact Info */}
            <div className="reveal fade-up delay-3">
              {/* Mobile accordion header */}
              <button
                onClick={() => setExpandedSection(expandedSection === 'contact' ? null : 'contact')}
                className="lg:hidden flex items-center justify-between w-full mb-4 text-sm font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors duration-300"
              >
                Contact Info
                <ChevronUp className={cn("h-4 w-4 transition-transform duration-300", expandedSection === 'contact' ? 'rotate-180' : '')} />
              </button>

              {/* Desktop header */}
              <h4 className="hidden lg:block text-sm font-semibold uppercase tracking-wider mb-4 text-foreground">
                Contact Info
              </h4>

              {/* Contact content */}
              <div className={cn(
                "lg:block space-y-3 transition-all duration-500",
                expandedSection === 'contact' ? 'block' : 'hidden lg:block'
              )}>
                <a href="tel:+917966046304" className="flex items-start gap-2.5 group outline-none">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    +91 79660 46304
                  </span>
                </a>

                <div className="flex items-start gap-2.5">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 transition-transform duration-300 hover:scale-110" />
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=ieee.fbc@socet.edu.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-primary transition-all duration-300 hover:translate-x-1"
                    >
                      ieee.fbc@socet.edu.in
                    </a>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=ieee.sc@socet.edu.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-primary transition-all duration-300 hover:translate-x-1"
                    >
                      ieee.sc@socet.edu.in
                    </a>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=ieee.tr@socet.edu.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-primary transition-all duration-300 hover:translate-x-1"
                    >
                      ieee.tr@socet.edu.in
                    </a>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Silver+Oak+University,+Ahmedabad,+Gujarat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 group outline-none"
                >
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-sm text-muted-foreground leading-relaxed group-hover:text-primary transition-colors duration-300">
                    Silver Oak University, Nr. Bhavik Publications, Opp. Bhagwat
                    Vidyapith, S.G.Highway, Ahmedabad, Gujarat&nbsp;-&nbsp;382481
                  </span>
                </a>
              </div>
            </div>

            {/* Column 4 — Social */}
            <div className="reveal fade-up delay-4">
              {/* Mobile accordion header */}
              <button
                onClick={() => setExpandedSection(expandedSection === 'social' ? null : 'social')}
                className="lg:hidden flex items-center justify-between w-full mb-4 text-sm font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors duration-300"
              >
                Follow Us
                <ChevronUp className={cn("h-4 w-4 transition-transform duration-300", expandedSection === 'social' ? 'rotate-180' : '')} />
              </button>

              {/* Desktop header */}
              <h4 className="hidden lg:block text-sm font-semibold uppercase tracking-wider mb-4 text-foreground">
                Follow Us
              </h4>

              {/* Social content */}
              <div className={cn(
                "lg:block transition-all duration-500",
                expandedSection === 'social' ? 'block' : 'hidden lg:block'
              )}>
                <div className="flex flex-wrap gap-3">
                  {SOCIAL_LINKS.map((social, index) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-9 w-9 rounded-full border border-border/50 text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 hover:rotate-6"
                      style={{ transitionDelay: `${index * 50}ms` }}
                      aria-label={`Follow us on ${social.platform}`}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>

                <p className="mt-5 text-xs text-muted-foreground/70 transition-colors duration-300 hover:text-muted-foreground">
                  Stay connected with IEEE SOU SB through our social channels for
                  the latest updates and events.
                </p>
              </div>
            </div>
          </div>

          {/* ─── Divider + Copyright ─── */}
          <div className="reveal fade-up delay-5 pt-5 md:pt-6 border-t border-border/40">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs md:text-sm text-muted-foreground text-center sm:text-left">
                &copy; {currentYear} Silver Oak University IEEE SB. All Rights
                Reserved.
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <Link to="/privacy" className="hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </Link>
                <span className="hidden sm:inline">•</span>
                <Link to="/terms" className="hover:text-primary transition-colors duration-300">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
