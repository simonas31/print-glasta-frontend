import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Zap, Shield, ChevronDown } from "lucide-react";

/* ── animation helpers */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const galleryItems = [
  {
    title: "Kitchen Splashbacks",
    category: "Residential",
    desc: "Heat-resistant printed glass panels that transform everyday kitchens into design statements.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    span: "col-span-2",
  },
  {
    title: "Office Branding",
    category: "Commercial",
    desc: "High-definition logo prints on glass partitions and walls.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    span: "col-span-1",
  },
  {
    title: "Art Installations",
    category: "Interior Design",
    desc: "Custom photographic murals on glass for hospitality spaces.",
    img: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&q=80",
    span: "col-span-1",
  },
  {
    title: "Architectural Facades",
    category: "Architecture",
    desc: "Large-format exterior glass printing for distinctive building identities.",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    span: "col-span-2",
  },
];

const stats = [
  { value: "12+", label: "Years in business" },
  { value: "3,400+", label: "Projects delivered" },
  { value: "98%", label: "Client satisfaction" },
  { value: "16", label: "Countries served" },
];

const features = [
  {
    icon: Layers,
    title: "UV-Direct Printing",
    desc: "Ink fused directly into glass surface. Scratch-resistant, fade-proof, and dishwasher safe.",
  },
  {
    icon: Zap,
    title: "7-Day Turnaround",
    desc: "Precision manufacturing without the wait. Express options available for urgent projects.",
  },
  {
    icon: Shield,
    title: "10-Year Guarantee",
    desc: "Every print backed by our colour-fidelity and structural integrity guarantee.",
  },
];

function StatCard({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div {...fadeUp(delay)} className="text-center">
      <p
        className="text-4xl md:text-5xl font-bold"
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "var(--accent)",
        }}
      >
        {value}
      </p>
      <p
        className="mt-1 text-sm uppercase tracking-widest"
        style={{ color: "var(--text-muted)" }}
      >
        {label}
      </p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden hero-gradient">
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating orbs */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] w-32 h-32 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, var(--accent), transparent)",
          }}
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 right-[8%] w-48 h-48 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, var(--accent), transparent)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase mb-8"
            style={{
              background: "var(--accent-subtle)",
              color: "var(--accent)",
              border: "1px solid var(--glass-border)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Premium Glass Printing Since 2013
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-8xl font-bold leading-none mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Glass that{" "}
            <span className="italic" style={{ color: "var(--accent)" }}>
              tells
            </span>
            <br />
            your story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl max-w-xl mx-auto mb-10"
            style={{ color: "var(--text-secondary)" }}
          >
            Custom-printed glass for architecture, interiors and branding.
            Precision UV printing on any glass surface, any scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="btn-accent flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium"
            >
              Start your project
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-all duration-200"
              style={{
                background: "var(--accent-subtle)",
                color: "var(--text-primary)",
                border: "1px solid var(--border)",
              }}
            >
              Our story
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          style={{ color: "var(--text-muted)" }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────── */}
      <section
        className="py-20 px-6"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* ── GALLERY ────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)} className="mb-4">
            <div className="divider" />
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--accent)" }}
            >
              Portfolio
            </p>
          </motion.div>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Work we're proud of
          </motion.h2>
          <motion.p
            {...fadeUp(0.2)}
            className="text-lg mb-14 max-w-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            From intimate residential spaces to landmark commercial
            installations.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${item.span}`}
                style={{ minHeight: 280 }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ minHeight: 280 }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <span
                    className="text-xs tracking-widest uppercase mb-1 block"
                    style={{ color: "var(--accent)" }}
                  >
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-white/70 mt-1">{item.desc}</p>
                </div>
                {/* Always visible label */}
                <div className="absolute top-4 left-4 group-hover:opacity-0 transition-opacity duration-300">
                  <span
                    className="text-xs px-3 py-1 rounded-full font-medium backdrop-blur-md"
                    style={{
                      background: "var(--glass-bg)",
                      color: "var(--text-primary)",
                      border: "1px solid var(--glass-border)",
                    }}
                  >
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ───────────────────────────────────────────── */}
      <section
        className="py-24 px-6"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="mb-4">
            <div className="divider" />
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--accent)" }}
            >
              Why Print Glasta
            </p>
          </motion.div>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-5xl font-bold mb-16"
            style={{ color: "var(--text-primary)" }}
          >
            Built different.
            <br />
            <span className="italic" style={{ color: "var(--accent)" }}>
              Made to last.
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="p-8 rounded-2xl glass-card group hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "var(--accent-subtle)" }}
                >
                  <f.icon size={22} style={{ color: "var(--accent)" }} />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {f.title}
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeUp(0)}
            className="rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            {/* background glow */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse 60% 60% at 50% 50%, var(--accent-glow), transparent)",
              }}
            />
            <div className="relative z-10">
              <motion.p
                {...fadeUp(0.1)}
                className="text-xs tracking-widest uppercase mb-4"
                style={{ color: "var(--accent)" }}
              >
                Let's work together
              </motion.p>
              <motion.h2
                {...fadeUp(0.2)}
                className="text-4xl md:text-6xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Have a project in mind?
              </motion.h2>
              <motion.p
                {...fadeUp(0.3)}
                className="text-lg mb-10 max-w-md mx-auto"
                style={{ color: "var(--text-secondary)" }}
              >
                Tell us about your space, your vision, and your timeline. We'll
                make it happen.
              </motion.p>
              <motion.div {...fadeUp(0.4)}>
                <Link
                  to="/contact"
                  className="btn-accent inline-flex items-center gap-2 px-10 py-4 rounded-full text-base font-medium"
                >
                  Start the conversation
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
