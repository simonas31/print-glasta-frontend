import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Globe, Leaf } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const team = [
  {
    name: "Marta Koval",
    role: "Founder & Creative Director",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
  },
  {
    name: "Tomas Bernt",
    role: "Head of Production",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Aiste Paulauskiene",
    role: "Lead Designer",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
  },
];

const values = [
  {
    icon: Award,
    title: "Uncompromising quality",
    desc: "Every panel is inspected before leaving our facility. We reject anything that doesn't meet our exacting standards.",
  },
  {
    icon: Users,
    title: "Client partnership",
    desc: "We embed ourselves in your project from concept to installation. No hand-off handoffs — one team, start to finish.",
  },
  {
    icon: Globe,
    title: "Global reach",
    desc: "Installations in 16 countries. Certified for EU, UK, and international building regulations.",
  },
  {
    icon: Leaf,
    title: "Responsible production",
    desc: "FSC-certified supply chains, UV inks with zero VOC, and a closed-loop water recycling system.",
  },
];

export default function About() {
  return (
    <div className="pt-24">
      {/* ── HERO ── */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <motion.div {...fadeUp(0)} className="mb-4">
          <div className="divider" />
          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Our story
          </p>
        </motion.div>
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl font-bold leading-none mb-8"
          style={{ color: "var(--text-primary)" }}
        >
          Craft, precision,
          <br />
          <span className="italic" style={{ color: "var(--accent)" }}>
            and glass.
          </span>
        </motion.h1>
        <motion.p
          {...fadeUp(0.2)}
          className="text-xl max-w-2xl leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Founded in 2013 in Vilnius, Print Glasta started as a two-person
          workshop with one UV printer and an obsession with colour accuracy.
          Today we operate a 2,400 m² production facility and have delivered
          over 3,400 projects across Europe and beyond.
        </motion.p>
      </section>

      {/* ── FULL-WIDTH IMAGE ── */}
      <motion.section
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mx-4 md:mx-10 rounded-3xl overflow-hidden"
        style={{ height: "50vh", minHeight: 300 }}
      >
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80"
          alt="Our production facility"
          className="w-full h-full object-cover"
        />
      </motion.section>

      {/* ── VALUES ── */}
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
              What we stand for
            </p>
          </motion.div>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-5xl font-bold mb-16"
            style={{ color: "var(--text-primary)" }}
          >
            Principles that
            <br />
            <span className="italic" style={{ color: "var(--accent)" }}>
              guide every print.
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                className="p-8 rounded-2xl glass-card flex gap-5"
              >
                <div
                  className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
                  style={{ background: "var(--accent-subtle)" }}
                >
                  <v.icon size={20} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="mb-4">
            <div className="divider" />
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--accent)" }}
            >
              The people
            </p>
          </motion.div>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-5xl font-bold mb-16"
            style={{ color: "var(--text-primary)" }}
          >
            Meet the team
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="group">
                <div
                  className="rounded-2xl overflow-hidden mb-5"
                  style={{ height: 300 }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {member.name}
                </h3>
                <p className="text-sm mt-1" style={{ color: "var(--accent)" }}>
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 px-6"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            {...fadeUp(0)}
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Ready to collaborate?
          </motion.h2>
          <motion.p
            {...fadeUp(0.1)}
            className="text-lg mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Whether you're an architect, interior designer, or business owner —
            let's build something together.
          </motion.p>
          <motion.div {...fadeUp(0.2)}>
            <Link
              to="/contact"
              className="btn-accent inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium"
            >
              Get in touch <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
