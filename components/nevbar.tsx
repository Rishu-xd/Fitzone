"use client";

import { type MouseEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X, Zap } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Membership", href: "#membership" },
];

export default function GymNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolledState = () => setIsScrolled(window.scrollY > 24);

    const updateActiveSection = () => {
      const sectionData = navItems
        .map((item) => {
          const element = document.querySelector(item.href);
          if (!(element instanceof HTMLElement)) return null;

          return {
            label: item.label,
            distance: Math.abs(element.getBoundingClientRect().top - 120),
          };
        })
        .filter((item): item is { label: string; distance: number } => item !== null)
        .sort((a, b) => a.distance - b.distance);

      if (sectionData[0]) {
        setActive(sectionData[0].label);
      }
    };

    updateScrolledState();
    updateActiveSection();
    window.addEventListener("scroll", updateScrolledState, { passive: true });
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrolledState);
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  const handleNavigation = (event: MouseEvent<HTMLAnchorElement>, label: string, href: string) => {
    event.preventDefault();
    const target = document.querySelector(href);

    if (!(target instanceof HTMLElement)) return;

    setActive(label);
    setMenuOpen(false);
    window.history.pushState(null, "", href);
    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-1/2 top-5 z-50 w-[calc(100%-32px)] max-w-7xl -translate-x-1/2"
      >
        <nav
          className={`relative flex h-[72px] items-center justify-between rounded-[22px] border border-white/[0.09] ${isScrolled ? "bg-black/85 shadow-[0_20px_80px_rgba(0,0,0,0.5)]" : "bg-black/55 shadow-[0_20px_80px_rgba(0,0,0,0.35)]"} px-3 pl-5 backdrop-blur-2xl transition-[background-color,box-shadow] duration-300`}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[22px]">
            <div className="absolute -left-20 -top-24 h-40 w-40 rounded-full bg-[#c1121f]/10 blur-3xl" />
            <div className="absolute -bottom-24 right-20 h-40 w-40 rounded-full bg-[#d4af37]/10 blur-3xl" />
          </div>

          <motion.a href="#home" whileHover={{ scale: 1.02 }} className="relative z-10 flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative h-11 w-11 overflow-hidden rounded-[14px]"
            >
              <img src="/download.png" alt="Fitzone logo" className="h-full w-full object-cover" />
            </motion.div>

            <div className="hidden sm:block">
              <div className="text-[15px] font-bold tracking-[-0.02em] text-white">FITZONE</div>
              <div className="text-[8px] font-semibold tracking-[0.28em] text-white/35">GYM</div>
            </div>
          </motion.a>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.025] p-1 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.label;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => handleNavigation(event, item.label, item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className="relative px-5 py-2.5 text-[13px] font-medium"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-white/[0.08]"
                    />
                  )}

                  <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-white" : "text-white/40 hover:text-white/80"}`}>
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="relative z-10 flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-3.5 py-2.5 lg:flex">
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1.5 rounded-full bg-green-400"
              />

              <span className="text-[11px] font-medium text-white/45">Open today</span>
            </div>

            <motion.a
              href="#membership"
              onClick={(event) => handleNavigation(event, "Membership", "#membership")}
              whileHover="hover"
              whileTap={{ scale: 0.96 }}
              className="group relative hidden overflow-hidden rounded-full bg-[#c1121f] px-5 py-3 text-[12px] font-bold text-white sm:flex"
            >
              <motion.span variants={{ hover: { x: -3 } }} className="relative z-10">
                JOIN NOW
              </motion.span>

              <motion.div variants={{ hover: { x: 3, y: -3 } }} className="relative z-10 ml-2">
                <ArrowUpRight size={15} strokeWidth={2.8} />
              </motion.div>

              <motion.div
                initial={{ x: "-110%" }}
                variants={{ hover: { x: "110%" } }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                className="absolute inset-y-0 left-0 w-1/2 skew-x-[-20deg] bg-white/25 blur-sm"
              />
            </motion.a>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-white md:hidden"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X size={19} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu size={19} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 overflow-hidden rounded-[22px] border border-white/[0.08] bg-black/75 p-2 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:hidden"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => handleNavigation(event, item.label, item.href)}
                  aria-current={active === item.label ? "page" : undefined}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.045 }}
                  className="flex items-center justify-between rounded-[16px] px-4 py-4 text-sm font-medium text-white/55 transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  {item.label}
                  <ArrowUpRight size={16} className="text-white/20" />
                </motion.a>
              ))}

              <div className="my-2 h-px bg-white/[0.06]" />

              <a
                href="#membership"
                onClick={(event) => handleNavigation(event, "Membership", "#membership")}
                className="flex items-center justify-center gap-2 rounded-[16px] bg-[#c1121f] px-4 py-4 text-sm font-bold text-white"
              >
                <Zap size={16} fill="currentColor" />
                JOIN THE GYM
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
