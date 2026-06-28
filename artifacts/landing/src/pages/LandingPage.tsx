import { motion } from "framer-motion";
import { ArrowRight, CircleCheck as CheckCircle2, Zap, Shield, Layers, GitFork as Github, Battery as Twitter } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning fast",
    description:
      "Built on Vite and React 19 for instant hot module reloading and blazing-fast builds.",
  },
  {
    icon: Shield,
    title: "Type-safe end to end",
    description:
      "From database schema to API contracts to frontend components — everything is typed.",
  },
  {
    icon: Layers,
    title: "Full-stack workspace",
    description:
      "Express API, Drizzle ORM, React frontend, and shared Zod schemas in one monorepo.",
  },
];

const stats = [
  { value: "10x", label: "Faster development" },
  { value: "100%", label: "Type coverage" },
  { value: "0ms", label: "Config overhead" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white font-bold">
              W
            </div>
            <span className="text-lg font-semibold tracking-tight">Workspace</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900">
              Features
            </a>
            <a href="#stats" className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900">
              Stats
            </a>
            <a
              href="#cta"
              className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50 via-white to-white" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
              <span className="flex h-2 w-2 rounded-full bg-accent-500" />
              New: Full-stack workspace template
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-6xl">
              Build faster,
              <br />
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                ship smarter
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
              A modern full-stack workspace with Express, Drizzle, React, and
              end-to-end type safety. Everything you need to go from idea to
              production — in one monorepo.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-primary-600/20 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/30"
              >
                Start building
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-6 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
              >
                Learn more
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="border-y border-neutral-100 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-neutral-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
              Everything you need, nothing you don't
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              A thoughtfully designed stack that gets out of your way.
            </p>
          </motion.div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-2xl border border-neutral-200 bg-white p-8 transition-all hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-neutral-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-neutral-900 px-8 py-16 text-center md:px-16 md:py-24"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-neutral-900 to-accent-900/20" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Ready to start building?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-300">
                Join the workspace and ship your next product with confidence.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-neutral-900 transition-all hover:bg-neutral-100"
                >
                  Get started for free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <div className="flex items-center gap-4">
                  <a href="#" className="text-neutral-400 transition-colors hover:text-white">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-neutral-400 transition-colors hover:text-white">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-accent-400" />
                  No credit card
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-accent-400" />
                  Free forever plan
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-100 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary-600 text-xs font-bold text-white">
              W
            </div>
            <span className="text-sm font-medium text-neutral-600">Workspace</span>
          </div>
          <p className="text-sm text-neutral-400">
            Built with React, Express, and Drizzle ORM.
          </p>
        </div>
      </footer>
    </div>
  );
}
