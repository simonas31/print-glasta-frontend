import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
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

const contactChannels = [
  {
    icon: FacebookIcon,
    label: "Facebook",
    value: "Print Glasta",
    hint: "Rašykite žinutę – atsakome greitai",
    href: "https://www.facebook.com/profile.php?id=61587590991157",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@printglasta",
    hint: "DM arba komentaras – laukiame",
    href: "https://www.instagram.com/print_glasta",
  },
  {
    icon: Mail,
    label: "El. paštas",
    value: "hello@printglasta.com",
    hint: "Atsakome per 1 darbo dieną",
    href: "mailto:hello@printglasta.com",
  },
  {
    icon: Phone,
    label: "Telefonas",
    value: "+370 600 00000",
    hint: "Pirmadieniais–penktadieniais, 9–18 val.",
    href: "tel:+37060000000",
  },
  {
    icon: MapPin,
    label: "Miestas",
    value: "Alytus, Lietuva",
    hint: "Pristatome visoje Lietuvoje",
    href: "#",
  },
];

export default function Contact() {
  return (
    <div className="pt-24 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-4">
          <div className="divider" />
          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Susisiekite
          </p>
        </motion.div>
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl font-bold leading-none mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          Kalbėkimės
          <br />
          <span className="italic" style={{ color: "var(--accent)" }}>
            apie jūsų idėją.
          </span>
        </motion.h1>
        <motion.p
          {...fadeUp(0.2)}
          className="text-xl mb-16 max-w-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          Turite klausimų ar norite užsakyti? Susisiekite patogiu būdu –
          atsakysime kuo greičiau.
        </motion.p>

        {/* Contact channels */}
        <div className="flex flex-col gap-4">
          {contactChannels.map((item, i) => (
            <motion.a
              key={i}
              {...fadeUp(0.1 + i * 0.07)}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="flex items-center gap-5 p-6 rounded-2xl glass-card group transition-all duration-200 hover:scale-[1.01]"
            >
              <div
                className="w-12 h-12 rounded-xl shrink-0 flex items-center justify-center"
                style={{
                  background: "var(--accent-subtle)",
                  color: "var(--accent)",
                }}
              >
                <item.icon />
              </div>
              <div className="flex-1">
                <p
                  className="text-xs tracking-widest uppercase mb-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.label}
                </p>
                <p
                  className="font-medium text-lg"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.value}
                </p>
                <p
                  className="text-sm mt-0.5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.hint}
                </p>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="opacity-30 group-hover:opacity-70 transition-opacity duration-200 shrink-0"
                style={{ color: "var(--text-primary)" }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          ))}
        </div>

        {/* Note */}
        <motion.div
          {...fadeUp(0.6)}
          className="mt-10 p-6 rounded-2xl text-center"
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border)",
          }}
        >
          <MessageCircle
            size={22}
            className="mx-auto mb-3"
            style={{ color: "var(--accent)" }}
          />
          <p
            className="text-sm font-medium mb-1"
            style={{ color: "var(--text-primary)" }}
          >
            Greičiausias būdas – Facebook žinutė
          </p>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Galite iš karto atsiųsti nuotrauką ar dizainą – aptarsime detales ir
            paruošime pasiūlymą.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
