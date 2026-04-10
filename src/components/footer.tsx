import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const socialLinks = [
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/profile.php?id=61587590991157",
    label: "Facebook",
  },
  {
    icon: InstagramIcon,
    href: "https://instagram.com/printglasta",
    label: "Instagram",
  },
  {
    icon: Mail,
    href: "mailto:hello@printglasta.com",
    label: "El. paštas",
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--footer-bg)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/icon.jpg"
                className="rounded-sm size-8"
                alt="Print Glasta"
              />
              <span
                className="text-lg text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Print Glasta
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--footer-text)" }}
            >
              Spausdiname nuotraukas ir dizainus ant grūdinto stiklo –
              individualiai ir kokybiškai. Įsikūrę Alytuje, pristatome visoje
              Lietuvoje.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "var(--footer-text)",
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-widest uppercase mb-5 text-white font-medium">
              Navigacija
            </p>
            <div className="flex flex-col gap-3">
              {[
                { to: "/", label: "Pagrindinis" },
                { to: "/about", label: "Apie mus" },
                { to: "/contact", label: "Susisiekite" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm underline-anim w-fit transition-colors duration-200 hover:text-white"
                  style={{ color: "var(--footer-text)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest uppercase mb-5 text-white font-medium">
              Kontaktai
            </p>
            <div
              className="flex flex-col gap-3 text-sm"
              style={{ color: "var(--footer-text)" }}
            >
              <a
                href="mailto:hello@printglasta.com"
                className="hover:text-white transition-colors duration-200"
              >
                hello@printglasta.com
              </a>
              <a
                href="tel:+37060000000"
                className="hover:text-white transition-colors duration-200"
              >
                +370 600 00000
              </a>
              <span>Alytus, Lietuva</span>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "var(--footer-text)" }}>
            © 2026 Print Glasta. Visos teisės saugomos.
          </p>
          <div
            className="flex gap-4 text-xs"
            style={{ color: "var(--footer-text)" }}
          >
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Privatumo politika
            </a>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Paslaugų sąlygos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
