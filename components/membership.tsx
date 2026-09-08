"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  Dumbbell,
  Flame,
  Infinity,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Zap,
  ArrowUpRight,
} from "lucide-react";

const plans = [
  {
    name: "Monthly",
    period: "/ month",
    price: 1500,
    billedAs: "Billed monthly",
    accent: false,
    note: "Cancel anytime",
  },
  {
    name: "6-Month",
    period: "/ month",
    price: 1000,
    billedAs: "Billed 6000 every 6 months",
    accent: true,
    note: "SAVE 10%",
  },
  {
    name: "Yearly",
    period: "/ month",
    price: 666.66,
    billedAs: "Billed 8000 annually",
    accent: false,
    note: "SAVE 20%",
  },
];

const features = [
  "24/7 gym access",
  "Full equipment access",
  "Unlimited group classes",
  "Locker access",
  "Mobile app access",
  "Progress tracking",
];

const comparison = [
  ["24/7 gym access", true, true, true],
  ["Full equipment", true, true, true],
  ["Group classes", true, true, true],
  ["Progress tracking", true, true, true],
  ["Price locked in", false, true, true],
  ["Priority booking", false, false, true],
];

export default function MembershipPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090909] text-white">
      <section className="relative px-5 pb-20 pt-36 sm:px-8 lg:pb-28 lg:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#c1121f]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#d4af37]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37]">Membership</span>
              <span className="h-px w-8 bg-[#d4af37]" />
            </div>

            <h1 className="text-6xl font-black leading-[0.85] tracking-[-0.065em] sm:text-8xl lg:text-[110px]">
              INVEST IN
              <br />
              <span className="text-white/20">YOURSELF.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-lg text-sm leading-6 text-white/40 sm:text-base">
              One membership. Every tool you need. Just pick the commitment that fits how you plan to show up.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative px-5 pb-28 sm:px-8 lg:pb-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-15%] z-0 -translate-x-1/2 whitespace-nowrap text-[clamp(4.5rem,15vw,13rem)] font-black uppercase leading-none tracking-[-0.09em] text-[#d4af37]/20 drop-shadow-[0_0_28px_rgba(212,175,55,0.3)]"
        >
          Pricing
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-9%] z-0 h-40 w-[min(70vw,42rem)] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[85px]"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className={`relative overflow-hidden rounded-[28px] border p-7 backdrop-blur-sm transition-shadow sm:p-9 ${plan.accent ? "border-[#d4af37]/60 bg-[#d4af37]/20 shadow-[0_24px_80px_rgba(212,175,55,0.16)]" : "border-white/[0.12] bg-white/[0.055] shadow-[0_24px_70px_rgba(0,0,0,0.28)]"}`}
            >
              {plan.accent && (
                  <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full border border-black/20 bg-black/70 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white">
                  <Sparkles size={11} />
                  Best value
                </div>
              )}

              {plan.accent && (
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-[90px]" />
              )}

              <div className="relative">
                <div className={`text-[10px] font-bold uppercase tracking-[0.25em] ${plan.accent ? "text-[#f2d58b]" : "text-[#d4af37]"}`}>
                  {plan.name}
                </div>

                <p className={`mt-4 text-xs font-semibold uppercase tracking-[0.1em] ${plan.accent ? "text-white/60" : plan.note === "Cancel anytime" ? "text-white/25" : "text-[#d4af37]/80"}`}>
                  {plan.note}
                </p>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-6xl font-black tracking-[-0.06em]">₹{plan.price}</span>
                  <span className={`mb-2 text-xs ${plan.accent ? "text-white/45" : "text-white/25"}`}>{plan.period}</span>
                </div>

                <div className={`mt-2 text-[10px] font-medium ${plan.accent ? "text-white/45" : "text-white/25"}`}>
                  {plan.billedAs}
                </div>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.015 }}
                  className={`mt-9 flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 text-xs font-bold shadow-[0_10px_30px_rgba(0,0,0,0.25)] ${plan.accent ? "bg-black text-white" : "bg-[#c1121f] text-white"}`}
                >
                 Contact Us
                  <ArrowRight size={15} />
                </motion.button>

                <div className={`my-8 h-px ${plan.accent ? "bg-white/15" : "bg-white/[0.08]"}`} />

                <p className={`mb-5 text-[9px] font-bold uppercase tracking-[0.2em] ${plan.accent ? "text-white/45" : "text-white/25"}`}>
                  What's included
                </p>

                <div className="space-y-4">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.accent ? "bg-black/20 text-[#f2d58b]" : "bg-[#c1121f]/15 text-[#d4af37]"}`}>
                        <Check size={12} strokeWidth={3} />
                      </div>

                      <span className={`text-xs ${plan.accent ? "text-white/70" : "text-white/50"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-[#0b0b0b]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37]">More than a membership</p>

              <h2 className="text-5xl font-bold leading-[0.9] tracking-[-0.055em] sm:text-6xl">
                YOU'RE NOT
                <br />
                JUST JOINING
                <br />
                A <span className="text-white/20">GYM.</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-6 text-white/35">
                You're joining a community of people who decided they were capable of more.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: Zap, title: "High performance", text: "Professional equipment designed for serious training." },
                { icon: Users, title: "Real community", text: "Train alongside people who push you forward." },
                { icon: Trophy, title: "Expert coaching", text: "Get guidance from experienced performance coaches." },
                { icon: ShieldCheck, title: "No nonsense", text: "No gimmicks. Just great training and real results." },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="rounded-[22px] border border-white/[0.07] bg-white/[0.025] p-7"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c1121f]/15 text-[#d4af37]">
                      <Icon size={18} />
                    </div>

                    <h3 className="mt-7 text-sm font-bold">{item.title}</h3>
                    <p className="mt-3 text-xs leading-5 text-white/30">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="mb-12">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37]">Compare terms</p>

          <h2 className="text-5xl font-bold tracking-[-0.055em] sm:text-6xl">
            SAME PLAN.
            <br />
            <span className="text-white/20">YOUR TERM.</span>
          </h2>
        </div>

        <div className="overflow-x-auto rounded-[24px] border border-white/[0.07]">
          <div className="min-w-[650px]">
            <div className="grid grid-cols-[1.5fr_repeat(3,1fr)] border-b border-white/[0.07] bg-white/[0.025]">
              <div className="p-5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">Features</div>

              {plans.map((plan) => (
                <div key={plan.name} className={`p-5 text-center text-[10px] font-bold uppercase tracking-[0.15em] ${plan.accent ? "text-[#d4af37]" : "text-white/40"}`}>
                  {plan.name}
                </div>
              ))}
            </div>

            {comparison.map(([feature, monthly, sixMonth, yearly]) => (
              <div key={feature as string} className="grid grid-cols-[1.5fr_repeat(3,1fr)] border-b border-white/[0.05] last:border-0">
                <div className="p-5 text-xs text-white/40">{feature as string}</div>

                {[monthly, sixMonth, yearly].map((included, index) => (
                  <div key={index} className="flex items-center justify-center p-5">
                    {included ? (
                      <Check size={16} className={index === 1 ? "text-[#d4af37]" : "text-white/40"} />
                    ) : (
                      <span className="text-white/10">—</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#c1121f] px-7 py-16 sm:px-12 lg:px-20 lg:py-24">
          <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border-[90px] border-black/[0.06]" />
          <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[350px] w-[350px] rounded-full bg-white/20 blur-[100px]" />

          <div className="relative z-10 max-w-3xl">
            <div className="mb-6 flex items-center gap-2 text-black/45">
              <Flame size={17} fill="currentColor" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Your time is now</span>
            </div>

            <h2 className="text-5xl font-black leading-[0.85] tracking-[-0.065em] text-black sm:text-7xl lg:text-8xl">
              BUILT
              <br />
              DIFFERENT.
            </h2>

            <p className="mt-7 max-w-md text-sm leading-6 text-black/50">
              Stop waiting for motivation. Build a system that makes showing up inevitable.
            </p>

            <motion.a
                    href="#membership"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 rounded-full bg-[#030303] px-6 py-3.5 text-xs font-bold text-white w-max"
                  >
                    START TRAINING
                    <ArrowUpRight size={15} />
                  </motion.a>

          </div>
        </div>
      </section>

      
    </main>
  );
}