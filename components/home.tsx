
"use client";

import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Dumbbell,
  Flame,
  Timer,
  Trophy,
  Users,
} from "lucide-react";
import { useRef } from "react";
import MembershipPage from "./membership";

const programs = [
  {
    number: "01",
    title: "Strength",
    description: "Build raw power with structured progressive training.",
  },
  {
    number: "02",
    title: "Conditioning",
    description: "Improve endurance, speed and overall athletic performance.",
  },
  {
    number: "03",
    title: "Performance",
    description: "Train like an athlete with high-intensity programs.",
  },
];

export default function home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: globalProgress } = useScroll();

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "42%"]);
  const textRotateX = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const opacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);
  const heroCardY = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const heroCardRotateX = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const heroCardRotateY = useTransform(scrollYProgress, [0, 1], [-10, 24]);
  const introY = useTransform(globalProgress, [0.08, 0.35], [70, -90]);
  const introRotateX = useTransform(globalProgress, [0.08, 0.35], [0, 14]);
  const statsY = useTransform(globalProgress, [0.1, 0.4], [30, -55]);
  const programY = useTransform(globalProgress, [0.25, 0.7], [120, -50]);
  const glowY = useTransform(globalProgress, [0, 1], [0, -180]);
  const goldOrbX = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const goldOrbY = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <main className="overflow-hidden bg-[#090909] text-white">
      <section
        ref={heroRef}
        id="home"
        className="relative min-h-[100svh] overflow-hidden"
      >
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="absolute inset-0 -top-[8%] h-[116%]"
        >
          <img
            src="/backgrounds.jpg"
            alt="Athlete training in the gym"
            className="h-full w-full object-cover saturate-[1.15] contrast-[1.08]"
          />

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-black/20" />
        </motion.div>

        <motion.div
          style={{ y: glowY }}
          className="pointer-events-none absolute left-[45%] top-[18%] h-[620px] w-[620px] rounded-full bg-[#d4af37]/16 blur-[180px]"
        />

        <motion.div
          style={{ x: goldOrbX, y: goldOrbY, rotate: 18 }}
          className="pointer-events-none absolute right-[8%] top-[22%] z-[1] hidden h-[360px] w-[360px] rounded-full border border-[#d4af37]/25 shadow-[0_0_120px_rgba(212,175,55,0.24),inset_0_0_80px_rgba(212,175,55,0.08)] md:block"
        />

        <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_68%_42%,rgba(212,175,55,0.1),transparent_24%),linear-gradient(90deg,rgba(0,0,0,0.18),transparent_42%,rgba(0,0,0,0.32))]" />
        <div className="pointer-events-none absolute inset-0 z-[2] shadow-[inset_0_-180px_180px_rgba(0,0,0,0.7),inset_0_0_140px_rgba(0,0,0,0.55)]" />

        <motion.div
          style={{
            y: heroCardY,
            rotateX: heroCardRotateX,
            rotateY: heroCardRotateY,
            transformPerspective: 1600,
          }}
          className="pointer-events-none absolute right-[7%] top-[16%] z-10 hidden h-[220px] w-[280px] rounded-[28px] border border-[#d4af37]/30 bg-black/25 p-5 shadow-[0_40px_100px_rgba(0,0,0,0.7),0_0_45px_rgba(212,175,55,0.12)] backdrop-blur-md md:block"
        >
          <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.3em] text-[#f2d58b]">
            <span>Elite</span>
            <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
          </div>
          <div className="mt-10 space-y-4">
            <div className="h-2 w-28 rounded-full bg-white/15" />
            <div className="h-2 w-20 rounded-full bg-[#d4af37]/80" />
            <div className="grid grid-cols-3 gap-2 pt-6">
              {["96%", "7d", "12k"].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-black/20 px-2 py-3 text-center text-[11px] font-bold text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: textY, rotateX: textRotateX, opacity, transformPerspective: 1800 }}
          className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-end px-5 pb-20 pt-32 sm:px-8 lg:pb-24"
        >
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#d4af37]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f2d58b]">
                Train without limits
              </span>
            </motion.div>

            <div className="max-w-5xl">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-[clamp(4rem,11vw,10rem)] font-black leading-[0.78] tracking-[-0.07em]"
              >
                BUILD
                <br />
                <span className="text-white/30">YOUR</span>{" "}
                <span className="text-[#d4af37]">LIMIT.</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
            >
              <div className="max-w-md">
                <p className="text-sm leading-6 text-white/55 sm:text-base">
                  A high-performance training space built for people who refuse to stay average.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <motion.a
                    href="#membership"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 rounded-full bg-[#c1121f] px-6 py-3.5 text-xs font-bold text-white"
                  >
                    START TRAINING
                    <ArrowUpRight size={15} />
                  </motion.a>

                  <motion.a
                    href="#programs"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 px-3 py-3 text-xs font-semibold text-white/60 transition-colors hover:text-white"
                  >
                    Explore programs
                    <ArrowDownRight size={15} />
                  </motion.a>
                </div>
              </div>

              <motion.div
                style={{ y: statsY, rotateX: introRotateX }}
                className="grid grid-cols-3 gap-3 sm:gap-5"
              >
                {[["12K+", "Members"], ["48", "Classes"], ["24/7", "Access"]].map(([value, label]) => (
                  <div
                    key={label}
                    className="min-w-[85px] border-l border-white/10 pl-3 sm:min-w-[105px] sm:pl-5"
                  >
                    <div className="text-lg font-bold tracking-tight sm:text-xl">{value}</div>
                    <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-white/30">
                      {label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 md:flex"
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/25">Scroll</span>

          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-[#d4af37] to-transparent"
          />
        </motion.div>
      </section>

      <section className="relative border-y border-white/[0.06] py-5">
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
           
            className="flex shrink-0 items-center"
          >
            {[...Array(2)].flatMap(() =>
              ["STRENGTH", "DISCIPLINE", "PERFORMANCE", "CONSISTENCY", "PROGRESS"].map((item) => (
                <div key={`${item}-${Math.random()}`} className="mx-7 flex items-center gap-7 whitespace-nowrap">
                  <span className="text-[11px] font-bold tracking-[0.25em] text-white/25">{item}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                </div>
              ))
            )}
          </motion.div>
        </div>
      </section>

      <motion.section
        style={{ y: introY, rotateX: introRotateX, transformPerspective: 1800 }}
        className="relative z-[1] mx-auto max-w-7xl px-5 py-28 drop-shadow-[0_35px_60px_rgba(0,0,0,0.55)] sm:px-8 lg:py-40"
      >
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d4af37]">Why Forge</span>
            </div>

            <h2 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              The gym is not
              <br />
              <span className="text-white/20">the destination.</span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-7 text-white/45">
              It's where you build the discipline to become the person you want to be. Every rep, every session, every early morning adds up.
            </p>

            <div className="mt-8 flex items-center gap-3 text-[#d4af37]">
              <Dumbbell size={17} />
              <span className="text-xs font-bold uppercase tracking-[0.18em]">Built for serious training</span>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="programs"
        style={{ y: programY, rotateX: introRotateX, transformPerspective: 1800 }}
        className="relative z-[2] bg-[#0b0b0b] shadow-[0_-35px_90px_rgba(212,175,55,0.08),0_35px_90px_rgba(0,0,0,0.8)]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37]">Training systems</p>

              <h2 className="text-5xl font-bold tracking-[-0.055em] sm:text-7xl">
                CHOOSE YOUR
                <br />
                <span className="text-white/20">BATTLE.</span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-6 text-white/35">
              Purpose-built programs designed around how you actually want to perform.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.07] md:grid-cols-3">
            {programs.map((program, index) => (
              <motion.a
                key={program.number}
                href="membership"
                initial={{ opacity: 0, y: 36, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ y: -10, rotateX: 6, rotateY: 4 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                className="group relative min-h-[340px] overflow-hidden bg-[#0b0b0b] p-7 shadow-[inset_0_1px_0_rgba(212,175,55,0.08)] sm:p-9"
                style={{
                  y: index === 1 ? 18 : 0,
                  rotateX: index === 2 ? 8 : 0,
                  transformPerspective: 1400,
                }}
              >
                <motion.div
                  animate={{ scale: [0.8, 1.12, 1], opacity: [0, 1, 1] }}
                  transition={{ duration: 0.5 }}
                  className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#c1121f]/20 blur-[70px]"
                />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs text-white/20">{program.number}</span>

                    <motion.div
                      whileHover={{ rotate: 45, x: 3, y: -2 }}
                      className="text-white/25 transition-colors group-hover:text-[#d4af37]"
                    >
                      <ArrowUpRight size={20} />
                    </motion.div>
                  </div>

                  <div>
                    <motion.h3
                      whileHover={{ x: 8 }}
                      className="text-4xl font-bold tracking-[-0.04em]"
                    >
                      {program.title}
                    </motion.h3>

                    <p className="mt-4 max-w-xs text-sm leading-6 text-white/35">{program.description}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid overflow-hidden rounded-[30px] border border-white/[0.07] bg-white/[0.025] sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Users, value: "12,480", label: "Active members" },
            { icon: Flame, value: "94%", label: "Member retention" },
            { icon: Trophy, value: "38", label: "Expert trainers" },
            { icon: Timer, value: "24/7", label: "Gym access" },
          ].map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="border-b border-white/[0.07] p-7 last:border-b-0 sm:border-r lg:border-b-0 lg:p-9"
              >
                <Icon size={18} className="text-[#d4af37]" />

                <div className="mt-8 text-4xl font-bold tracking-[-0.05em]">{stat.value}</div>
                <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/25">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="membership" className="flex min-h-screen items-center justify-center">
        <MembershipPage />
      </section>
    </main>
  );
}
