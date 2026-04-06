import { Link } from "react-router-dom";
import { Globe, Share2, Mail } from "lucide-react";

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
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center text-white text-xs font-bold"
                style={{ background: "var(--accent)" }}
              >
                PG
              </div>
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
              Premium UV glass printing for architecture, interiors and
              branding. Based in Vilnius, delivering worldwide.
            </p>
            <div className="flex gap-3 mt-6">
              {[Globe, Share2, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
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

          {/* Links */}
          <div>
            <p className="text-xs tracking-widest uppercase mb-5 text-white font-medium">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
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
              Contact
            </p>
            <div
              className="flex flex-col gap-3 text-sm"
              style={{ color: "var(--footer-text)" }}
            >
              <span>hello@printglasta.com</span>
              <span>+370 600 00000</span>
              <span>Alytus, Lithuania</span>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "var(--footer-text)" }}>
            © 2026 Print Glasta. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--footer-text)" }}>
            Privacy Policy · Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
