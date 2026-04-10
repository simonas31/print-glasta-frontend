import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Smile, Leaf } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const values = [
  {
    icon: Award,
    title: "Kokybė visų pirma",
    desc: "Kiekvienas gaminys kruopščiai patikrinamas prieš pristatymą. Spausdiname tik tada, kai esame patenkinti rezultatu.",
  },
  {
    icon: Users,
    title: "Individualus požiūris",
    desc: "Kiekvienas užsakymas unikalus – aptariame jūsų pageidavimus ir padedame rasti geriausią sprendimą.",
  },
  {
    icon: Smile,
    title: "Paprasta ir malonu",
    desc: "Stengiamės, kad užsakymo procesas būtų kuo paprastesnis: susisiekiate, suderiname detales ir pristatome rezultatą.",
  },
  {
    icon: Leaf,
    title: "Atsakinga gamyba",
    desc: "Naudojame kokybiškas medžiagas ir atsakingai žiūrime į gamybos procesą – tiek dėl jūsų, tiek dėl aplinkos.",
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
            Apie mus
          </p>
        </motion.div>
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl font-bold leading-none mb-8"
          style={{ color: "var(--text-primary)" }}
        >
          Kuriame{" "}
          <span className="italic" style={{ color: "var(--accent)" }}>
            unikalius
          </span>{" "}
          spaudinius ant stiklo.
        </motion.h1>
        <motion.p
          {...fadeUp(0.2)}
          className="text-xl max-w-2xl leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Esame maža, bet ambicinga įmonė, besispecializuojanti aukštos kokybės
          spaudinių ant grūdinto stiklo gamyboje. Atspausdiname jūsų asmenines
          nuotraukas, paveikslus ar individualius maketus – kiekvienas gaminys
          kuriamas su atida ir meile. Naudojamas stiklas yra tvirtas, atsparus
          drėgmei ir karščiui – modernus sprendimas, puikiai tinkantis tiek
          namams, tiek komercinėms erdvėms.
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
          alt="Gamybos procesas"
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
              Mūsų vertybės
            </p>
          </motion.div>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-5xl font-bold mb-16"
            style={{ color: "var(--text-primary)" }}
          >
            Principai, kuriais
            <br />
            <span className="italic" style={{ color: "var(--accent)" }}>
              vadovaujamės kasdien.
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
            Turite klausimų?
          </motion.h2>
          <motion.p
            {...fadeUp(0.1)}
            className="text-lg mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Nesvarbu, ar norite paprastos dekoracijos namams, ar ieškote
            sprendimo verslui – mielai padėsime ir atsakysime į visus klausimus.
          </motion.p>
          <motion.div {...fadeUp(0.2)}>
            <Link
              to="/contact"
              className="btn-accent inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium"
            >
              Susisiekite <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
