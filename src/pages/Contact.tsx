import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/schemas/contact.schema";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const contactInfo = [
  {
    icon: Mail,
    label: "Email us",
    value: "hello@printglasta.com",
    href: "mailto:hello@printglasta.com",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+370 600 00000",
    href: "tel:+37060000000",
  },
  { icon: MapPin, label: "Visit us", value: "Vilnius, Lithuania", href: "#" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm({ resolver: zodResolver(contactSchema) });

  const onSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-4">
          <div className="divider" />
          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Contact
          </p>
        </motion.div>
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl font-bold leading-none mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          Let's create
          <br />
          <span className="italic" style={{ color: "var(--accent)" }}>
            something great.
          </span>
        </motion.h1>
        <motion.p
          {...fadeUp(0.2)}
          className="text-xl mb-16 max-w-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          Tell us about your project. We usually respond within one business
          day.
        </motion.p>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Info column */}
          <div className="md:col-span-2 flex flex-col gap-8">
            {contactInfo.map((item, i) => (
              <motion.a
                key={i}
                {...fadeUp(0.1 + i * 0.08)}
                href={item.href}
                className="flex items-start gap-4 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center mt-0.5 transition-colors duration-200"
                  style={{ background: "var(--accent-subtle)" }}
                >
                  <item.icon size={18} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <p
                    className="text-xs tracking-widest uppercase mb-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="font-medium underline-anim"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            <motion.div
              {...fadeUp(0.4)}
              className="mt-4 p-6 rounded-2xl"
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="text-sm font-medium mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                Mon – Fri, 9am – 6pm CET
              </p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                We'll reply within one business day. For urgent projects, call
                us directly.
              </p>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div {...fadeUp(0.2)} className="md:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20 gap-4"
              >
                <CheckCircle size={48} style={{ color: "var(--accent)" }} />
                <h3
                  className="text-2xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Message sent!
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  We'll be in touch very soon.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    {
                      name: "name" as const,
                      placeholder: "Your name",
                      label: "Name",
                    },
                    {
                      name: "email" as const,
                      placeholder: "you@example.com",
                      label: "Email",
                    },
                  ].map((field) => (
                    <div key={field.name}>
                      <label
                        className="text-xs tracking-widest uppercase block mb-2"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {field.label}
                      </label>
                      <input
                        placeholder={field.placeholder}
                        {...form.register(field.name)}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2"
                        style={{
                          background: "var(--bg-secondary)",
                          border: `1px solid var(--border)`,
                          color: "var(--text-primary)",
                          // @ts-ignore
                          "--tw-ring-color": "var(--accent)",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "var(--accent)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "var(--border)")
                        }
                      />
                    </div>
                  ))}
                </div>

                {/* Subject */}
                <div>
                  <label
                    className="text-xs tracking-widest uppercase block mb-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Subject
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 appearance-none cursor-pointer"
                    style={{
                      background: "var(--bg-secondary)",
                      border: `1px solid var(--border)`,
                      color: "var(--text-primary)",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--accent)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--border)")
                    }
                  >
                    <option>New project inquiry</option>
                    <option>Request a sample</option>
                    <option>Technical question</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    className="text-xs tracking-widest uppercase block mb-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Describe your project, dimensions, timeline..."
                    rows={5}
                    {...form.register("message")}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                    style={{
                      background: "var(--bg-secondary)",
                      border: `1px solid var(--border)`,
                      color: "var(--text-primary)",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--accent)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--border)")
                    }
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-accent w-full flex items-center justify-center gap-2 py-4 rounded-xl font-medium"
                >
                  Send message
                  <Send size={15} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
