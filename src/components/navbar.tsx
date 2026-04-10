import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/providers/theme-provider";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Pagrindinis" },
    { to: "/about", label: "Apie mus" },
    { to: "/contact", label: "Susisiek" },
  ];

  const isDark = theme === "dark";

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          background: scrolled ? "var(--nav-bg)" : "transparent",
          borderBottom: scrolled
            ? "1px solid var(--border)"
            : "1px solid transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          boxShadow: scrolled ? "var(--shadow-sm)" : "none",
        }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-500"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/icon.jpg" className="rounded-sm size-8" />
          <span
            className="text-lg tracking-tight hidden sm:block"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "var(--text-primary)",
            }}
          >
            Print Glasta
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="underline-anim text-sm tracking-wide transition-colors duration-200"
                style={{
                  color: active ? "var(--accent)" : "var(--text-secondary)",
                  fontWeight: active ? 500 : 400,
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: "var(--accent-subtle)",
              color: "var(--accent)",
            }}
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <Link
            to="/contact"
            className="hidden md:flex btn-accent text-sm px-4 py-2 rounded-full font-medium"
          >
            Get a Quote
          </Link>

          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full"
            style={{
              background: "var(--accent-subtle)",
              color: "var(--text-primary)",
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-40 rounded-2xl p-6 glass-card shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-lg py-1 border-b"
                  style={{
                    color: "var(--text-primary)",
                    borderColor: "var(--border)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-accent mt-2 px-4 py-3 rounded-xl text-center font-medium"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
