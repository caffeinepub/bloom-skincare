import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  DIY_REMEDIES,
  QUIZ_QUESTIONS,
  QUOTES,
  SEASONAL_TIPS,
  SKIN_TYPES,
  type SkinTypeData,
  TEAM,
  TOOLS,
} from "./data";
import { useInternetIdentity } from "./hooks/useInternetIdentity";

// ── Petals ──────────────────────────────────────────────────────────────────
const PETAL_CONFIGS = [
  { left: "5%", delay: "0s", duration: "7s", size: "1.8rem" },
  { left: "15%", delay: "1.2s", duration: "9s", size: "1.4rem" },
  { left: "25%", delay: "2.5s", duration: "8s", size: "2rem" },
  { left: "35%", delay: "0.8s", duration: "10s", size: "1.2rem" },
  { left: "45%", delay: "3.5s", duration: "7.5s", size: "1.6rem" },
  { left: "55%", delay: "1.8s", duration: "9.5s", size: "1.3rem" },
  { left: "65%", delay: "4.2s", duration: "8.5s", size: "2rem" },
  { left: "72%", delay: "0.3s", duration: "7.8s", size: "1.5rem" },
  { left: "80%", delay: "2.1s", duration: "9.2s", size: "1.7rem" },
  { left: "88%", delay: "5s", duration: "8s", size: "1.4rem" },
  { left: "93%", delay: "1s", duration: "10.5s", size: "1.2rem" },
  { left: "10%", delay: "6s", duration: "7.3s", size: "1.8rem" },
  { left: "50%", delay: "3s", duration: "11s", size: "1.5rem" },
];

const PETAL_CHARS = ["🌸", "🌺", "🌷", "\u273f", "\u2740"];

function FloatingPetals() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {PETAL_CONFIGS.map((p, i) => (
        <span
          // biome-ignore lint/suspicious/noArrayIndexKey: petals are anonymous
          key={i}
          className="petal"
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            fontSize: p.size,
          }}
        >
          {PETAL_CHARS[i % PETAL_CHARS.length]}
        </span>
      ))}
    </div>
  );
}

// ── FloralDoodle ─────────────────────────────────────────────────────────────
function FloralDoodle({
  className = "",
  style = {},
}: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity: 0.18, ...style }}
      aria-hidden="true"
      fill="none"
    >
      <circle cx="40" cy="40" r="5" fill="#E7A7B4" />
      <ellipse cx="40" cy="22" rx="5" ry="10" fill="#F3C7CF" />
      <ellipse cx="40" cy="58" rx="5" ry="10" fill="#F3C7CF" />
      <ellipse cx="22" cy="40" rx="10" ry="5" fill="#CBB8E8" />
      <ellipse cx="58" cy="40" rx="10" ry="5" fill="#CBB8E8" />
      <ellipse
        cx="26"
        cy="26"
        rx="5"
        ry="10"
        fill="#BFD8EA"
        transform="rotate(-45 26 26)"
      />
      <ellipse
        cx="54"
        cy="54"
        rx="5"
        ry="10"
        fill="#BFD8EA"
        transform="rotate(-45 54 54)"
      />
      <ellipse
        cx="54"
        cy="26"
        rx="5"
        ry="10"
        fill="#F1E3CF"
        transform="rotate(45 54 26)"
      />
      <ellipse
        cx="26"
        cy="54"
        rx="5"
        ry="10"
        fill="#F1E3CF"
        transform="rotate(45 26 54)"
      />
      <path d="M40 10 Q45 5 50 10 Q45 15 40 10Z" fill="#B5D8C0" />
      <path d="M70 40 Q75 35 70 30 Q65 35 70 40Z" fill="#B5D8C0" />
    </svg>
  );
}

// ── DiyDoodle ─────────────────────────────────────────────────────────────────
function DiyDoodle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={`pointer-events-none select-none absolute ${className}`}
      aria-hidden="true"
      fill="none"
    >
      {/* Pink flower */}
      <circle cx="20" cy="20" r="4" fill="#FF69B4" opacity="0.7" />
      <ellipse cx="20" cy="10" rx="3" ry="7" fill="#FF69B4" opacity="0.5" />
      <ellipse cx="20" cy="30" rx="3" ry="7" fill="#FF69B4" opacity="0.5" />
      <ellipse cx="10" cy="20" rx="7" ry="3" fill="#FF69B4" opacity="0.5" />
      <ellipse cx="30" cy="20" rx="7" ry="3" fill="#FF69B4" opacity="0.5" />
      {/* Black swirl */}
      <path
        d="M60 30 Q70 20 80 30 Q90 40 80 50 Q70 60 60 50 Q50 40 60 30Z"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      {/* Small dots */}
      <circle cx="100" cy="15" r="2.5" fill="#FF69B4" opacity="0.6" />
      <circle cx="108" cy="25" r="1.5" fill="#1a1a1a" opacity="0.5" />
      <circle cx="95" cy="28" r="2" fill="#FF69B4" opacity="0.4" />
      {/* Star */}
      <path
        d="M50 90 L52 95 L58 95 L53 99 L55 105 L50 101 L45 105 L47 99 L42 95 L48 95Z"
        fill="#1a1a1a"
        opacity="0.4"
      />
      {/* Pink tiny flower bottom-right */}
      <circle cx="100" cy="100" r="3" fill="#FF69B4" opacity="0.6" />
      <ellipse cx="100" cy="91" rx="2.5" ry="6" fill="#FF69B4" opacity="0.4" />
      <ellipse cx="100" cy="109" rx="2.5" ry="6" fill="#FF69B4" opacity="0.4" />
      <ellipse cx="91" cy="100" rx="6" ry="2.5" fill="#FF69B4" opacity="0.4" />
      <ellipse cx="109" cy="100" rx="6" ry="2.5" fill="#FF69B4" opacity="0.4" />
      {/* Dashed line */}
      <path
        d="M5 60 Q30 50 55 60 Q80 70 105 60"
        stroke="#FF69B4"
        strokeWidth="1"
        strokeDasharray="3 3"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar({ onGetStarted }: { onGetStarted: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Skin Types", href: "#skin-types" },
    { label: "The Routine", href: "#about" },
    { label: "Tools", href: "#tools" },
    { label: "Our Team", href: "#team" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-bloom" : ""}`}
      style={{
        backgroundColor: scrolled
          ? "rgba(250,250,250,0.97)"
          : "rgba(250,250,250,0.92)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="flex items-center gap-2"
            data-ocid="nav.link"
          >
            <img
              src="/assets/generated/bloom-logo-black-pink-transparent.dim_600x200.png"
              alt="Bloom"
              className="h-10 w-auto object-contain"
            />
          </a>

          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium transition-opacity hover:opacity-60"
                  style={{ color: "oklch(var(--bloom-plum))" }}
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Button
              onClick={onGetStarted}
              className="hidden md:flex rounded-full text-sm font-semibold px-5"
              style={{
                backgroundColor: "oklch(var(--bloom-cta))",
                color: "white",
              }}
              data-ocid="nav.primary_button"
            >
              Get Started
            </Button>
            <button
              type="button"
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              <span className="text-xl">{menuOpen ? "\u2715" : "\u2630"}</span>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: "rgba(250,250,250,0.97)" }}
          >
            <ul className="flex flex-col px-4 pb-4 gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block text-sm font-medium py-1"
                    style={{ color: "oklch(var(--bloom-plum))" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Button
                  onClick={() => {
                    setMenuOpen(false);
                    onGetStarted();
                  }}
                  className="rounded-full text-sm w-full"
                  style={{
                    backgroundColor: "oklch(var(--bloom-cta))",
                    color: "white",
                  }}
                >
                  Get Started
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function HeroSection({ onExplore }: { onExplore: () => void }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url(/assets/generated/hero-skincare-bg.dim_1920x1080.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{ background: "rgba(243,207,215,0.62)" }}
      />
      <FloatingPetals />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center w-full"
          >
            <p
              className="text-base font-semibold tracking-widest uppercase mb-4"
              style={{ color: "oklch(0.48 0.07 10)" }}
            >
              Welcome to
            </p>
            <h1
              className="font-script font-bold leading-none mb-4"
              style={{
                fontSize: "clamp(3.5rem, 10vw, 6.5rem)",
                color: "oklch(var(--bloom-plum))",
              }}
            >
              <img
                src="/assets/generated/bloom-logo-black-pink-transparent.dim_600x200.png"
                alt="Bloom"
                className="h-24 w-auto object-contain mx-auto drop-shadow-lg"
              />
            </h1>
            <p
              className="text-lg md:text-xl font-medium mb-4"
              style={{ color: "oklch(0.38 0.05 340)" }}
            >
              Your Personal Skincare Routine Guide
            </p>
            <p
              className="text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto"
              style={{ color: "oklch(0.44 0.04 340)" }}
            >
              Discover your unique skin type and follow expertly crafted,
              step-by-step routines that will transform your skin — naturally,
              gently, beautifully.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                onClick={onExplore}
                className="rounded-full px-8 py-3 text-base font-semibold shadow-bloom hover:shadow-bloom-hover transition-all"
                style={{
                  backgroundColor: "oklch(var(--bloom-cta))",
                  color: "white",
                }}
                data-ocid="hero.primary_button"
              >
                Find My Skin Type ✨
              </Button>
              <a href="#about">
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-3 text-base font-semibold border-2"
                  style={{
                    borderColor: "oklch(var(--bloom-cta))",
                    color: "oklch(var(--bloom-cta))",
                  }}
                  data-ocid="hero.secondary_button"
                >
                  Learn More
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        style={{ color: "oklch(0.44 0.04 340)" }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <span className="text-xl">↓</span>
      </motion.div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: "url(/assets/generated/routine-bg.dim_1920x1080.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{ background: "rgba(237,246,251,0.68)" }}
      />
      <FloralDoodle className="absolute top-8 right-8 w-20 h-20 z-10" />
      <FloralDoodle
        className="absolute bottom-8 left-6 w-16 h-16 z-10"
        style={{ opacity: 0.12 }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-5xl mb-6">🌸</div>
          <p
            className="text-sm font-bold tracking-widest uppercase mb-3"
            style={{ color: "oklch(var(--bloom-cta))" }}
          >
            About Bloom
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: "oklch(var(--bloom-plum))" }}
          >
            What is Bloom?
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-10"
            style={{ color: "oklch(0.44 0.02 340)" }}
          >
            Bloom helps you discover your unique skin type and provides expertly
            designed, step-by-step skincare routines tailored just for you.
            Whether you are dealing with dryness, oiliness, sensitivity, or acne
            — Bloom guides you toward healthier, more radiant skin.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                emoji: "🔬",
                title: "Science-Backed",
                desc: "Every routine is built on dermatologist-approved research and best practices.",
              },
              {
                emoji: "🌿",
                title: "Natural Focus",
                desc: "We prioritize gentle, clean ingredients that nurture without harsh side effects.",
              },
              {
                emoji: "💖",
                title: "Personalized",
                desc: "Your skin is unique. Bloom matches routines to your specific skin type and concerns.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bloom-card rounded-3xl p-6"
                style={{
                  background: "white",
                  boxShadow: "0 4px 24px rgba(185,122,134,0.12)",
                }}
              >
                <div className="text-3xl mb-3">{f.emoji}</div>
                <h3
                  className="font-semibold mb-2"
                  style={{ color: "oklch(var(--bloom-plum))" }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.44 0.02 340)" }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Skin Type Modal ───────────────────────────────────────────────────────────
function SkinTypeModal({
  skinType,
  open,
  onClose,
  isLoggedIn,
  onPremiumClick,
}: {
  skinType: SkinTypeData | null;
  open: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  onPremiumClick: () => void;
}) {
  if (!skinType) return null;
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="max-w-2xl max-h-[85vh] overflow-y-auto"
        style={{ borderRadius: "1.5rem" }}
        data-ocid="skin_type.dialog"
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <span className="text-3xl">{skinType.emoji}</span>
            <span
              className="font-script font-bold"
              style={{ color: "oklch(var(--bloom-plum))" }}
            >
              {skinType.name} Skin Routine
            </span>
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: "oklch(var(--bloom-cta))" }}
          >
            Step-by-Step Routine
          </p>
          <div className="space-y-3">
            {skinType.routine.map((s) => (
              <div
                key={s.step}
                className="flex gap-4 p-4 rounded-2xl"
                style={{ background: "rgba(243,199,207,0.2)" }}
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: "oklch(var(--bloom-cta))" }}
                >
                  {s.step}
                </div>
                <div className="flex-1">
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "oklch(var(--bloom-plum))" }}
                  >
                    {s.name}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "oklch(0.44 0.02 340)" }}
                  >
                    {s.description}
                  </p>
                  <p
                    className="text-xs mt-1 font-medium"
                    style={{ color: "oklch(var(--bloom-cta))" }}
                  >
                    📦 {s.product}
                  </p>
                  {s.tip && (
                    <p
                      className="text-xs mt-1 italic"
                      style={{ color: "oklch(0.52 0.04 75)" }}
                    >
                      💡 {s.tip}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "oklch(var(--bloom-cta))" }}
          >
            Pro Tips
          </p>
          <ul className="space-y-2">
            {skinType.tips.map((tip) => (
              <li
                key={tip}
                className="flex gap-2 text-sm"
                style={{ color: "oklch(0.44 0.02 340)" }}
              >
                <span>🌟</span> {tip}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="mt-6 rounded-2xl p-5"
          style={{ background: "linear-gradient(135deg, #F3C7CF, #D7C3E8)" }}
        >
          {isLoggedIn ? (
            <div>
              <p
                className="font-bold mb-3 flex items-center gap-2"
                style={{ color: "oklch(var(--bloom-plum))" }}
              >
                <span>💸</span> Premium Recommendations (Unlocked!)
              </p>
              <ul className="space-y-2">
                {skinType.premiumProducts.map((p) => (
                  <li
                    key={p}
                    className="text-sm flex gap-2"
                    style={{ color: "oklch(0.38 0.05 340)" }}
                  >
                    <span>✨</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="text-center">
              <p
                className="text-sm mb-3 font-medium"
                style={{ color: "oklch(var(--bloom-plum))" }}
              >
                Unlock advanced product recommendations and expert techniques
              </p>
              <Button
                onClick={onPremiumClick}
                className="rounded-full px-6 text-sm font-semibold"
                style={{
                  background: "oklch(var(--bloom-cta))",
                  color: "white",
                }}
                data-ocid="skin_type.primary_button"
              >
                💸 Unlock Premium Recommendations
              </Button>
            </div>
          )}
        </div>

        <Button
          variant="outline"
          onClick={onClose}
          className="mt-4 rounded-full w-full"
          data-ocid="skin_type.close_button"
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
}

// ── Skin Types Section ────────────────────────────────────────────────────────
const skinTypeImageMap: Record<string, string> = {
  Normal: "/assets/generated/skin-girl-normal.dim_400x400.png",
  Oily: "/assets/generated/skin-girl-oily.dim_400x400.png",
  Dry: "/assets/generated/skin-girl-dry.dim_400x400.png",
  Combination: "/assets/generated/skin-girl-combination.dim_400x400.png",
  Sensitive: "/assets/generated/skin-girl-sensitive.dim_400x400.png",
  "Acne-Prone": "/assets/generated/skin-girl-acne-kawaii.dim_400x400.png",
};

function SkinTypesSection({
  onCardClick,
}: { onCardClick: (id: string) => void }) {
  const cardColors = [
    "#E7A7B4",
    "#BFD8EA",
    "#CBB8E8",
    "#F1E3CF",
    "#BFD8EA",
    "#E7A7B4",
  ];
  return (
    <section
      id="skin-types"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage:
          "url(/assets/generated/skintypes-bg.dim_1920x1080.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{ background: "rgba(255,245,247,0.66)" }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-sm font-bold tracking-widest uppercase mb-2"
            style={{ color: "oklch(var(--bloom-cta))" }}
          >
            Discover Yours
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "oklch(var(--bloom-plum))" }}
          >
            Know Your Skin Type
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto"
            style={{ color: "oklch(0.44 0.02 340)" }}
          >
            Click any skin type to explore a complete, personalized routine
            crafted for your needs.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKIN_TYPES.map((st, i) => (
            <motion.div
              key={st.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              data-ocid={`skin_types.item.${i + 1}`}
            >
              <button
                type="button"
                className="bloom-card rounded-3xl p-6 h-full w-full text-left"
                style={{
                  backgroundColor: cardColors[i],
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => onCardClick(st.id)}
              >
                <img
                  src={skinTypeImageMap[st.name] || ""}
                  alt={st.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-pink-300 shadow-lg ring-2 ring-pink-100"
                />
                <div className="text-4xl mb-3">{st.emoji}</div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "oklch(var(--bloom-plum))" }}
                >
                  {st.name} Skin
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.38 0.04 340)" }}
                >
                  {st.description}
                </p>
                <span
                  className="text-sm font-semibold"
                  style={{ color: "oklch(var(--bloom-plum))" }}
                >
                  Explore Routine →
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Skin Quiz ─────────────────────────────────────────────────────────────────
function SkinQuizSection({ onResult }: { onResult: (id: string) => void }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[][]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (types: string[]) => {
    const next = [...answers, types];
    setAnswers(next);
    if (current + 1 < QUIZ_QUESTIONS.length) {
      setCurrent(current + 1);
    } else {
      const tally: Record<string, number> = {};
      for (const t of next.flat()) {
        tally[t] = (tally[t] || 0) + 1;
      }
      const winner = Object.entries(tally).sort((a, b) => b[1] - a[1])[0][0];
      setResult(winner);
    }
  };

  const reset = () => {
    setCurrent(0);
    setAnswers([]);
    setResult(null);
  };
  const q = QUIZ_QUESTIONS[current];
  const resultData = SKIN_TYPES.find((s) => s.id === result);

  return (
    <section
      id="quiz"
      className="py-24"
      style={{
        background: "linear-gradient(180deg, #F8F0FB 0%, #EDF6FB 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="text-sm font-bold tracking-widest uppercase mb-2"
            style={{ color: "oklch(var(--bloom-cta))" }}
          >
            Interactive Quiz
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "oklch(var(--bloom-plum))" }}
          >
            Find Your Skin Type
          </h2>
        </motion.div>
        <div
          className="rounded-3xl p-8"
          style={{
            background: "white",
            boxShadow: "0 8px 40px rgba(185,122,134,0.15)",
          }}
          data-ocid="quiz.card"
        >
          <AnimatePresence mode="wait">
            {result ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{resultData?.emoji}</div>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "oklch(var(--bloom-plum))" }}
                >
                  You have {resultData?.name} Skin!
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{ color: "oklch(0.44 0.02 340)" }}
                >
                  {resultData?.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    onClick={() => result && onResult(result)}
                    className="rounded-full px-6"
                    style={{
                      background: "oklch(var(--bloom-cta))",
                      color: "white",
                    }}
                    data-ocid="quiz.primary_button"
                  >
                    See My Routine ✨
                  </Button>
                  <Button
                    variant="outline"
                    onClick={reset}
                    className="rounded-full px-6"
                    data-ocid="quiz.secondary_button"
                  >
                    Retake Quiz
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-2"
                  style={{ color: "oklch(var(--bloom-cta))" }}
                >
                  Question {current + 1} of {QUIZ_QUESTIONS.length}
                </p>
                <div
                  className="w-full rounded-full h-1.5 mb-6"
                  style={{ background: "rgba(243,199,207,0.4)" }}
                >
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${(current / QUIZ_QUESTIONS.length) * 100}%`,
                      background: "oklch(var(--bloom-cta))",
                    }}
                  />
                </div>
                <h3
                  className="text-lg font-semibold mb-6"
                  style={{ color: "oklch(var(--bloom-plum))" }}
                >
                  {q.question}
                </h3>
                <div className="space-y-3">
                  {q.options.map((opt, i) => (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => handleAnswer(opt.types)}
                      className="w-full text-left p-4 rounded-2xl text-sm font-medium border-2 transition-all hover:opacity-80"
                      style={{
                        borderColor: "oklch(var(--bloom-card-pink))",
                        color: "oklch(var(--bloom-plum))",
                        background: "rgba(243,199,207,0.15)",
                      }}
                      data-ocid={`quiz.radio.${i + 1}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

const toolImageMap: Record<string, string> = {
  "jade-roller": "/assets/generated/tool-jade-roller.dim_300x300.jpg",
  "gua-sha": "/assets/generated/tool-gua-sha.dim_300x300.jpg",
  "silicone-brush": "/assets/generated/tool-silicone-brush.dim_300x300.jpg",
  "mask-brush": "/assets/generated/tool-mask-brush.dim_300x300.jpg",
  "ice-globes": "/assets/generated/tool-ice-globes.dim_300x300.jpg",
  "led-mask": "/assets/generated/tool-led-mask.dim_300x300.jpg",
  "high-freq": "/assets/generated/tool-high-freq-wand.dim_300x300.jpg",
};

// ── Tools Section ─────────────────────────────────────────────────────────────
function ToolsSection({
  isLoggedIn,
  onPremiumClick,
}: { isLoggedIn: boolean; onPremiumClick: () => void }) {
  return (
    <section
      id="tools"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: "url(/assets/generated/tools-bg.dim_1920x1080.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{ background: "rgba(255,245,247,0.65)" }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="text-sm font-bold tracking-widest uppercase mb-2"
            style={{ color: "oklch(var(--bloom-cta))" }}
          >
            Face Care Tools
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "oklch(var(--bloom-plum))" }}
          >
            Skincare Tools & Techniques
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto"
            style={{ color: "oklch(0.44 0.02 340)" }}
          >
            Elevate your routine with these professional-grade tools.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {TOOLS.map((tool, i) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              data-ocid={`tools.item.${i + 1}`}
            >
              <div
                className="bloom-card rounded-3xl p-5 h-full relative overflow-hidden"
                style={{
                  backgroundColor: tool.color,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                {tool.premium && !isLoggedIn && (
                  <button
                    type="button"
                    className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center gap-2 cursor-pointer"
                    style={{
                      background: "rgba(255,255,255,0.78)",
                      backdropFilter: "blur(4px)",
                      border: "none",
                    }}
                    onClick={onPremiumClick}
                    data-ocid={`tools.primary_button.${i + 1}`}
                  >
                    <span className="text-3xl">🔒</span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "oklch(var(--bloom-plum))" }}
                    >
                      Premium Tool
                    </span>
                    <button
                      type="button"
                      className="text-xs rounded-full px-4 py-1.5 font-semibold mt-1"
                      style={{
                        background: "oklch(var(--bloom-cta))",
                        color: "white",
                      }}
                    >
                      Unlock 💸
                    </button>
                  </button>
                )}
                {toolImageMap[tool.id] ? (
                  <img
                    src={toolImageMap[tool.id]}
                    alt={tool.name}
                    className="w-20 h-20 object-cover rounded-2xl mx-auto mb-3 shadow-md"
                  />
                ) : (
                  <div className="text-3xl mb-3">{tool.emoji}</div>
                )}
                <h3
                  className="font-bold text-sm mb-2"
                  style={{ color: "oklch(var(--bloom-plum))" }}
                >
                  {tool.name}
                </h3>
                <p
                  className="text-xs leading-relaxed mb-2"
                  style={{ color: "oklch(0.38 0.04 340)" }}
                >
                  <span className="font-semibold">Usage: </span>
                  {tool.usage}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "oklch(0.38 0.04 340)" }}
                >
                  <span className="font-semibold">Benefits: </span>
                  {tool.benefits}
                </p>
                {tool.premium && (
                  <span
                    className="absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{
                      background: "oklch(var(--bloom-cta))",
                      color: "white",
                    }}
                  >
                    💸 Pro
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Extras Section ────────────────────────────────────────────────────────────
function ExtrasSection() {
  const [quoteIdx, setQuoteIdx] = useState(0);
  return (
    <section
      id="extras"
      className="py-24"
      style={{
        background: "linear-gradient(180deg, #EDF6FB 0%, #F8F0FB 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Seasonal Tips */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <p
              className="text-sm font-bold tracking-widest uppercase mb-2"
              style={{ color: "oklch(var(--bloom-cta))" }}
            >
              Seasonal Care
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ color: "oklch(var(--bloom-plum))" }}
            >
              Seasonal Skincare Tips
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SEASONAL_TIPS.map((tip, i) => (
              <div
                key={tip.season}
                className="bloom-card rounded-3xl p-6"
                style={{
                  backgroundColor: tip.color,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
                data-ocid={`seasonal.item.${i + 1}`}
              >
                <div className="text-3xl mb-3">{tip.emoji}</div>
                <h4
                  className="font-bold mb-2"
                  style={{ color: "oklch(var(--bloom-plum))" }}
                >
                  {tip.season}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "oklch(0.38 0.04 340)" }}
                >
                  {tip.tip}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* DIY Remedies */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <p
              className="text-sm font-bold tracking-widest uppercase mb-2"
              style={{ color: "oklch(var(--bloom-cta))" }}
            >
              Natural Remedies
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ color: "oklch(var(--bloom-plum))" }}
            >
              DIY Face Care Recipes
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DIY_REMEDIES.map((diy, i) => (
              <div
                key={diy.name}
                className="bloom-card rounded-3xl p-6 relative overflow-hidden"
                style={{
                  backgroundColor: diy.color,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
                data-ocid={`diy.item.${i + 1}`}
              >
                <DiyDoodle className="w-28 h-28 top-0 right-0 opacity-[0.15]" />
                <div className="text-3xl mb-3">{diy.emoji}</div>
                <h4
                  className="font-bold mb-1"
                  style={{ color: "oklch(var(--bloom-plum))" }}
                >
                  {diy.name}
                </h4>
                <p
                  className="text-xs mb-2"
                  style={{ color: "oklch(0.44 0.02 340)" }}
                >
                  <span className="font-semibold">Ingredients: </span>
                  {diy.ingredients}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "oklch(0.38 0.04 340)" }}
                >
                  {diy.steps}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quotes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <p
              className="text-sm font-bold tracking-widest uppercase mb-2"
              style={{ color: "oklch(var(--bloom-cta))" }}
            >
              Self-Care
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ color: "oklch(var(--bloom-plum))" }}
            >
              Daily Reminders
            </h2>
          </div>
          <button
            type="button"
            className="rounded-3xl p-10 text-center cursor-pointer bloom-card w-full"
            style={{
              background: "linear-gradient(135deg, #F3C7CF, #D7C3E8)",
              boxShadow: "0 8px 40px rgba(185,122,134,0.2)",
              border: "none",
            }}
            onClick={() => setQuoteIdx((quoteIdx + 1) % QUOTES.length)}
            data-ocid="quotes.card"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={quoteIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <p
                  className="text-xl md:text-2xl font-semibold mb-4 font-script"
                  style={{ color: "oklch(var(--bloom-plum))" }}
                >
                  “{QUOTES[quoteIdx].quote}”
                </p>
                <p
                  className="text-sm font-medium"
                  style={{ color: "oklch(0.52 0.07 10)" }}
                >
                  — {QUOTES[quoteIdx].author}
                </p>
              </motion.div>
            </AnimatePresence>
            <p
              className="text-xs mt-6 opacity-60"
              style={{ color: "oklch(var(--bloom-plum))" }}
            >
              Click to see next quote ✨
            </p>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// ── Team Section ──────────────────────────────────────────────────────────────
function TeamSection() {
  return (
    <section
      id="team"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: "url(/assets/generated/team-bg.dim_1920x1080.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{ background: "rgba(248,240,251,0.67)" }}
      />
      <FloralDoodle className="absolute top-6 left-8 w-16 h-16 z-10" />
      <FloralDoodle className="absolute bottom-6 right-8 w-14 h-14 z-10" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="text-sm font-bold tracking-widest uppercase mb-2"
            style={{ color: "oklch(var(--bloom-cta))" }}
          >
            The People
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "oklch(var(--bloom-plum))" }}
          >
            Meet Our Team
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto"
            style={{ color: "oklch(0.44 0.02 340)" }}
          >
            The passionate minds behind Bloom's mission to make great skincare
            accessible to everyone.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-6">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`team.item.${i + 1}`}
            >
              <div
                className="bloom-card rounded-3xl p-8 text-center w-56"
                style={{
                  background: "white",
                  boxShadow: "0 4px 24px rgba(185,122,134,0.15)",
                }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
                  style={{
                    background: member.gradient,
                    color: "oklch(var(--bloom-plum))",
                  }}
                >
                  {member.initials}
                </div>
                <h4
                  className="font-bold text-sm mb-1"
                  style={{ color: "oklch(var(--bloom-plum))" }}
                >
                  {member.name}
                </h4>
                <p
                  className="text-xs"
                  style={{ color: "oklch(var(--bloom-cta))" }}
                >
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Login Modal ───────────────────────────────────────────────────────────────
function LoginModal({
  open,
  onClose,
  onSuccess,
}: { open: boolean; onClose: () => void; onSuccess: () => void }) {
  const { login, isLoggingIn } = useInternetIdentity();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      await login();
      toast.success("Welcome to Bloom! 🌷");
      onSuccess();
      onClose();
    } catch {
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="max-w-sm"
        style={{ borderRadius: "1.5rem" }}
        data-ocid="login.dialog"
      >
        <DialogHeader>
          <DialogTitle className="text-center">
            <span
              className="font-script text-3xl font-bold block"
              style={{ color: "oklch(var(--bloom-plum))" }}
            >
              Welcome to Bloom 🌷
            </span>
            <span
              className="text-sm font-normal mt-1 block"
              style={{ color: "oklch(0.44 0.02 340)" }}
            >
              Sign in to unlock premium recommendations
            </span>
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="space-y-1.5">
            <Label
              htmlFor="login-email"
              style={{ color: "oklch(var(--bloom-plum))" }}
            >
              Email
            </Label>
            <Input
              id="login-email"
              type="email"
              placeholder="yourname@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl"
              data-ocid="login.input"
            />
          </div>
          <div className="space-y-1.5">
            <Label
              htmlFor="login-password"
              style={{ color: "oklch(var(--bloom-plum))" }}
            >
              Password
            </Label>
            <Input
              id="login-password"
              type="password"
              placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-xl"
              data-ocid="login.input"
            />
          </div>
          <Button
            type="submit"
            disabled={loading || isLoggingIn}
            className="w-full rounded-full font-semibold"
            style={{ background: "oklch(var(--bloom-cta))", color: "white" }}
            data-ocid="login.submit_button"
          >
            {loading || isLoggingIn
              ? "Signing in..."
              : "Sign In with Internet Identity"}
          </Button>
        </form>
        <p
          className="text-center text-xs mt-3"
          style={{ color: "oklch(0.55 0.02 340)" }}
        >
          Secured by Internet Computer • No passwords stored
        </p>
        <Button
          variant="ghost"
          onClick={onClose}
          className="w-full mt-1 rounded-full text-sm"
          data-ocid="login.cancel_button"
        >
          Cancel
        </Button>
      </DialogContent>
    </Dialog>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "Skin Types", href: "#skin-types" },
    { label: "About", href: "#about" },
    { label: "Tools", href: "#tools" },
    { label: "Our Team", href: "#team" },
  ];
  return (
    <footer
      className="py-12"
      style={{ background: "oklch(var(--bloom-footer))" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center w-full">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <img
                src="/assets/generated/bloom-logo-black-pink-transparent.dim_600x200.png"
                alt="Bloom"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs" style={{ color: "oklch(0.44 0.02 340)" }}>
              Your Personal Skincare Routine Guide
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium transition-opacity hover:opacity-60"
                style={{ color: "oklch(0.44 0.02 340)" }}
                data-ocid="footer.link"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div
          className="mt-8 pt-6 border-t text-center"
          style={{ borderColor: "oklch(0.82 0.04 75)" }}
        >
          <p className="text-xs" style={{ color: "oklch(0.55 0.02 340)" }}>
            \u00a9 {year}. Built with \u2764\ufe0f using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [activeSkinType, setActiveSkinType] = useState<string | null>(null);
  const [skinModalOpen, setSkinModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { loginStatus } = useInternetIdentity();

  useEffect(() => {
    if (loginStatus === "success") setIsLoggedIn(true);
  }, [loginStatus]);

  const openSkinType = (id: string) => {
    setActiveSkinType(id);
    setSkinModalOpen(true);
  };
  const openLoginThenSkinType = () => {
    setSkinModalOpen(false);
    setLoginModalOpen(true);
  };
  const activeSkinData =
    SKIN_TYPES.find((s) => s.id === activeSkinType) ?? null;

  return (
    <div className="min-h-screen">
      <Toaster richColors position="top-right" />
      <Navbar
        onGetStarted={() =>
          document
            .getElementById("skin-types")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <main>
        <HeroSection
          onExplore={() =>
            document
              .getElementById("skin-types")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <AboutSection />
        <SkinTypesSection onCardClick={openSkinType} />
        <SkinQuizSection onResult={(id) => openSkinType(id)} />
        <ToolsSection
          isLoggedIn={isLoggedIn}
          onPremiumClick={() => setLoginModalOpen(true)}
        />
        <ExtrasSection />
        <TeamSection />
      </main>
      <Footer />
      <SkinTypeModal
        skinType={activeSkinData}
        open={skinModalOpen}
        onClose={() => setSkinModalOpen(false)}
        isLoggedIn={isLoggedIn}
        onPremiumClick={openLoginThenSkinType}
      />
      <LoginModal
        open={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onSuccess={() => {
          setIsLoggedIn(true);
          if (activeSkinType) setSkinModalOpen(true);
        }}
      />
    </div>
  );
}
