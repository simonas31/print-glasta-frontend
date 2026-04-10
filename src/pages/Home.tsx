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
    title: "Adreso lentelės",
    category: "Namai",
    desc: "Karščiui atsparūs stiklo spaudiniai, kurie paverčia virtuvę tikru dizaino akcentu.",
    img: "https://scontent.fvno5-1.fna.fbcdn.net/v/t51.82787-15/649223893_18034748843604384_8221981513958278998_n.jpg?stp=dst-jpegr_tt6&_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=cq-ZWEL4LpMQ7kNvwG204ym&_nc_oc=AdozPyFdaiPUVRpoAN5gLLpJbaZYoyODkWciMaPjTiK0y_884L95eIj-LOkpwk-Bgco&_nc_zt=23&se=-1&_nc_ht=scontent.fvno5-1.fna&_nc_gid=NsfraBudMZULDur8Ob0vGQ&_nc_ss=7a3a8&oh=00_Af18pnRWAIRKDHKCk4tHUM9i23oi7O77BbE0E3yjTBvt8g&oe=69DF2877",
    span: "col-span-2",
  },
  {
    title: "Interjeras",
    category: "Interjeras",
    desc: "Logotipai ir firminiai spaudiniai ant stiklo pertvarų ir sienų.",
    img: "https://scontent.fvno5-1.fna.fbcdn.net/v/t51.82787-15/645799540_18033929060604384_1797444448168171138_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=YLxAa8LRn4cQ7kNvwEACu20&_nc_oc=Adrl-wyfXoiwZzjWenJ6OCU8CorcphATvoD_p_h970pv-Vr9BjNIGBRRKDe4DYYbUBI&_nc_zt=23&_nc_ht=scontent.fvno5-1.fna&_nc_gid=k3rKVd8cVYlo-mfBN5-yZw&_nc_ss=7a3a8&oh=00_Af2-ZdyGHKvDz2pRh3koe9KYrfPl_5ts4eBUGEXPAkM_Ng&oe=69DF0D7B",
    span: "col-span-1",
  },
  {
    title: "Meno kūriniai",
    category: "Interjeras",
    desc: "Individualūs fotografiniai paveikslai ant stiklo – namams ir viešosioms erdvėms.",
    img: "https://scontent.fvno5-1.fna.fbcdn.net/v/t51.82787-15/656294665_18038663438604384_5752819497538848979_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=V8wYBAq-7zIQ7kNvwGlk6V8&_nc_oc=Adq6973jnETt05G3VO3tzaM1VfTlL6386DlIEOP4crTP2ghj5cZoYZErPH9U_TCHgrU&_nc_zt=23&_nc_ht=scontent.fvno5-1.fna&_nc_gid=smMEqeSmUHHaguAXhTynfQ&_nc_ss=7a3a8&oh=00_Af2KONpgK7tkzC2aJ3neP_CRpDq2NsYMQnC6LaiXkRdvsw&oe=69DF18E3",
    span: "col-span-1",
  },
  {
    title: "Meno kūriniai",
    category: "Interjeras",
    img: "https://scontent.fvno5-1.fna.fbcdn.net/v/t39.30808-6/627494208_122095937403253033_2050402089643231482_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Rim8WbKqWJEQ7kNvwEIIAKG&_nc_oc=AdqM1HnahiG59Un0RSARM3snvwq_GD6afxrdlHN2Ii4uMmnYlvN2LXJNA4WfYdEIJYM&_nc_zt=23&_nc_ht=scontent.fvno5-1.fna&_nc_gid=JxhUyt8ott6Z5gClUBeEfg&_nc_ss=7a3a8&oh=00_Af37DVh47C12aZJHpSUX3KCpaCMghvZ0NK3xd6VySCVHog&oe=69DF14AC",
    span: "col-span-2",
  },
];

const features = [
  {
    icon: Layers,
    title: "UV spausdinimas",
    desc: "Rašalas susiliejamas tiesiai su stiklo paviršiumi. Atsparus įbrėžimams, nebluks ir lengvai valomas.",
  },
  {
    icon: Zap,
    title: "Greita gamyba",
    desc: "Užsakymą paruošiame per 3–7 darbo dienas. Skubiems atvejams – susisiekite tiesiogiai.",
  },
  {
    icon: Shield,
    title: "Kokybės garantija",
    desc: "Kiekvienas spaudinys gaminama kruopščiai ir su atida – mums svarbu, kad būtumėte patenkinti.",
  },
];

function AdvantageCard({
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
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-8xl font-bold leading-none mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Jūsų akimirka –{" "}
            <span className="italic" style={{ color: "var(--accent)" }}>
              amžina
            </span>
            <br />
            ant stiklo
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl max-w-xl mx-auto mb-10"
            style={{ color: "var(--text-secondary)" }}
          >
            Spausdiname nuotraukas ir dizainus ant grūdinto stiklo –
            individualiai, kokybiškai ir su meile kiekvienam užsakymui.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="btn-accent inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium"
            >
              Susisiekite su mumis
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
              Apie mus
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
          <span className="text-xs tracking-widest uppercase">Žemyn</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── ADVANTAGE CARDS ────────────────────────────────────── */}
      <section
        className="py-20 px-6"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <AdvantageCard value="100%" label="Grūdintas stiklas" delay={0.1} />
          <AdvantageCard value="HD" label="Aukšta raiška" delay={0.2} />
          <AdvantageCard value="∞" label="Ilgaamžis" delay={0.3} />
          <AdvantageCard value="H₂O" label="Atsparus drėgmei" delay={0.4} />
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
              Portfelis
            </p>
          </motion.div>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Darbai, kuriais didžiuojamės
          </motion.h2>
          <motion.p
            {...fadeUp(0.2)}
            className="text-lg mb-14 max-w-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Nuo jaukių namų interjerų iki komercinių erdvių – kiekvienas darbas
            unikalus.
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
                  style={{ minHeight: 280, maxHeight: 400 }}
                />
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
              Kodėl mes
            </p>
          </motion.div>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-5xl font-bold mb-16"
            style={{ color: "var(--text-primary)" }}
          >
            Dirbame su meile.
            <br />
            <span className="italic" style={{ color: "var(--accent)" }}>
              Rezultatas matomas.
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
                Pradėkime
              </motion.p>
              <motion.h2
                {...fadeUp(0.2)}
                className="text-4xl md:text-6xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Turite idėją?
              </motion.h2>
              <motion.p
                {...fadeUp(0.3)}
                className="text-lg mb-10 max-w-md mx-auto"
                style={{ color: "var(--text-secondary)" }}
              >
                Papasakokite apie savo nuotrauką ar viziją – aptarsime detales
                ir paruošime jūsų unikalų stiklo spaudinį.
              </motion.p>
              <motion.div {...fadeUp(0.4)}>
                <Link
                  to="/contact"
                  className="btn-accent inline-flex items-center gap-2 px-10 py-4 rounded-full text-base font-medium"
                >
                  Susisiekite
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
