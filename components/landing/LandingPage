"use client";

import Image from "next/image";
import {
  ArrowRight, Award, BadgeCheck, Building2, CheckCircle2,
  ChevronDown, Circle, Code2, GraduationCap, HeartHandshake, Layers, LifeBuoy,
  Mail, MessageCircle, Phone, PlayCircle, Rocket, Shield, Sparkles, Star, Target,
  TrendingUp, Trophy, Users, Zap,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

/* ---------------- Data ---------------- */

const hiringPartners = [
  "Amazon", "Meta", "PayPal", "Stripe", "Cisco", "Dell", "Samsung",
  "Atlassian", "JPMorgan", "PwC", "EY", "Microsoft", "Google", "Netflix",
];

const programs = [
  { tag: "RECOMMENDED", partner: "IBM & Microsoft", duration: "6 Months + 3 Mo Internship", title: "Master in Artificial Intelligence", track: "Placement Assistance Program", ctc: "₹8 – 24 LPA", bullets: ["1:1 Industry Mentorship", "Joint Technology Credentials"] },
  { tag: "POPULAR", partner: "IBM", duration: "6 Months", title: "Master in Data Science", track: "Placement Assistance Program", ctc: "₹6 – 18 LPA", bullets: ["Real-world Capstone Projects", "Hands-on Analytics Labs"] },
  { tag: "GLOBAL", partner: "Birchwood University", duration: "18 Months", title: "MSc in Data Science", track: "International Career Track", ctc: "₹12 – 35 LPA", bullets: ["EU Credit System Recognised", "Global Academic Pathways"] },
  { tag: "CORE", partner: "EIMT", duration: "36 Months", title: "BSc in Computer Science", track: "Core Software Track", ctc: "₹6 – 15 LPA", bullets: ["Full-Stack Development Focus", "Git & Tech Lab Driven"] },
  { tag: "EXECUTIVE", partner: "Birchwood University", duration: "18 Months", title: "Master of Business Administration", track: "International Career Track", ctc: "₹12 – 26 LPA", bullets: ["Globally Aligned Standards", "Executive Networking Circles"] },
  { tag: "GLOBAL", partner: "EIMT", duration: "18 Months", title: "MBA — Global Management", track: "Global Management Track", ctc: "₹10 – 22 LPA", bullets: ["Internationally Accredited", "Flexible Weekend Live Sessions"] },
];

const journey = [
  { t: "LMS Access & Mentorship", d: "Comprehensive learning materials plus a personal industry-expert mentor from day one. Live sessions every week.", tags: ["24/7 LMS", "Personal Mentor", "Live Sessions"] },
  { t: "Fundamentals & Foundation", d: "Master core concepts through structured curriculum, video lectures and interactive practice modules.", tags: ["Core Concepts", "Video Lectures", "Practice"] },
  { t: "Hands-on Projects", d: "Apply your knowledge on real-world projects using industry-standard tools, Git collaboration and peer code review.", tags: ["Real Projects", "Code Reviews", "Git"] },
  { t: "Research & POC", d: "Dive into cutting-edge research papers, analyse emerging tech, and develop proof-of-concept systems.", tags: ["Research", "Case Studies", "POC"] },
  { t: "Portfolio & Certification", d: "Build an impressive portfolio and earn IBM-recognised certifications that validate production-ready skills.", tags: ["Portfolio", "IBM Certification"] },
  { t: "Internship & Placement", d: "Secure internships and full-time placements from 350+ hiring partners — backed by our written job guarantee.", tags: ["Interview Prep", "Offers"] },
];

const advantages = [
  { icon: Zap, tag: "Live Learning", title: "Expert-Led Live Learning", desc: "Every session is interactive and hands-on, structured to build technical foundations fast — no pre-recorded filler." },
  { icon: HeartHandshake, tag: "Mentorship", title: "Career-Centric Mentorship", desc: "Get paired with engineers and tech leaders who've built what you want to build — and have the connections to get you there." },
  { icon: Code2, tag: "Project Labs", title: "Real-World Projects", desc: "Build what actually gets deployed — real enterprise problems, real code reviews, real CI/CD pipelines." },
  { icon: Trophy, tag: "Placement", title: "End-to-End Placement Support", desc: "Written placement guarantee. Direct recruiter access. Coaching from the people who've been on the other side of the table." },
];

const frameworks = [
  { icon: Layers, label: "Foundation", name: "The Great Pyramid™", desc: "16-level outcome-based mastery — every stage unlocks a globally recognised credential." },
  { icon: Sparkles, label: "Innovation", name: "AI Sandbox™", desc: "A live playground to prototype LLMs, vision and forecasting systems with senior reviews." },
  { icon: Target, label: "Projects", name: "The Project Lab™", desc: "Real enterprise problems sourced from partner companies — reviewed by senior engineers." },
  { icon: Rocket, label: "Placement", name: "Career Engine™", desc: "Direct recruiter pipelines, mock interviews and a written guarantee behind your offer." },
];

const stories = [
  { initials: "AM", name: "Arun M V", role: "Data Scientist · GoKwik", program: "Master in AI · IBM", metric: "250%", metricLabel: "Salary Hike", quote: "Before Codedge I was doing data entry. The live churn-prediction project gave me something concrete to show. Within 7 months I was writing production ML pipelines at GoKwik." },
  { initials: "SP", name: "Shyam Prakash", role: "Computer Scientist · Jobsite UK", program: "MS Cyber Security", metric: "214%", metricLabel: "Salary Hike", quote: "The Great Pyramid framework made the path crystal clear. The live pen-testing lab is what got me hired at Jobsite." },
  { initials: "SB", name: "Sahil Bansal", role: "Data Scientist · Fractal", program: "Master in Data Science", metric: "₹18 LPA", metricLabel: "Package", quote: "We worked on a real demand-forecasting problem from a retail client — not a Kaggle dataset. A senior Fractal engineer reviewed my submission." },
  { initials: "AA", name: "Akshat Arora", role: "Data Scientist · Lenskart", program: "Master in AI · IBM", metric: "7.5 mo", metricLabel: "To Offer", quote: "From no ML background to deploying a recommendation engine Lenskart now uses in production. The IBM certification opened every door." },
];

const comparison = {
  rows: [
    { label: "Training Mode", us: "100% Live Online & Hybrid", them: "Only recorded classes" },
    { label: "Support", us: "24/7 Student Support", them: "Limited support hours" },
    { label: "Placement", us: "Written Placement Guarantee", them: "Limited or no support" },
    { label: "Faculty", us: "Ex-FAANG & Industry Faculty", them: "Academic trainers only" },
    { label: "Projects", us: "Real Production Projects", them: "Simulated, toy datasets" },
  ],
};

const masterclasses = [
  { title: "AI Jobs in 2025", sub: "What Recruiters Are Looking For", tags: ["Beginner", "Career", "Data"], date: "09 Dec 2025" },
  { title: "From ChatGPT to AGI", sub: "How You Can Ride the Next AI Wave", tags: ["AI/ML", "LLM", "Data Science"], date: "18 Dec 2025" },
  { title: "Data Science Roadmap", sub: "From No Experience to First Paycheck in 90 Days", tags: ["Data", "Deep Learning"], date: "27 Dec 2025" },
];

const faqs = [
  { q: "Do I get a guaranteed job after completing the course?", a: "Yes — CodedgeAcademy offers 100% placement assistance and a written job guarantee on select programmes. Our dedicated HR team provides resume building, mock interviews and direct referrals to 350+ hiring partners across India and abroad." },
  { q: "What salary can I expect after completing an AI or Data Science programme?", a: "Average packages range from ₹6 to ₹24 LPA depending on the programme, your prior experience and interview performance. International tracks routinely place above ₹18 LPA." },
  { q: "Can I learn AI or Data Science without any prior coding background?", a: "Absolutely. Our foundation modules bring learners from zero to production-ready. Over 40% of our placed learners came from non-tech backgrounds." },
  { q: "How long will I have access to the course content?", a: "You receive lifetime access to the LMS, all recorded live sessions, updated curriculum releases and mentorship community." },
  { q: "What certificate will I receive after completing the course?", a: "You earn joint certifications with IBM, Microsoft and — depending on the programme — a globally recognised degree from partner universities." },
  { q: "Is EMI available? How does the instalment plan work?", a: "Yes — 0% EMI options are available through our NBFC partners, along with income share and pay-after-placement plans." },
];

/* ---------------- Motion ---------------- */

const EASE = [0.22, 0.61, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

function Reveal({
  children, className, variants = fadeUp, delay = 0,
}: { children: ReactNode; className?: string; variants?: Variants; delay?: number }) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={fadeUp}>{children}</motion.div>;
}

/* ---------------- Primitives ---------------- */

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--indigo-glow)]">
      <span className="h-px w-8 bg-[color:var(--indigo-glow)]/60" />
      {children}
    </span>
  );
}

function SectionHead({
  kicker, title, lede, align = "split",
}: { kicker: string; title: ReactNode; lede?: string; align?: "split" | "center" | "left" }) {
  if (align === "center") {
    return (
      <Reveal className="mx-auto max-w-3xl text-center">
        <Eyebrow>{kicker}</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">{title}</h2>
        {lede && <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">{lede}</p>}
      </Reveal>
    );
  }
  if (align === "left") {
    return (
      <Reveal className="max-w-3xl">
        <Eyebrow>{kicker}</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">{title}</h2>
        {lede && <p className="mt-5 max-w-2xl text-muted-foreground">{lede}</p>}
      </Reveal>
    );
  }
  return (
    <Reveal className="grid items-end gap-8 lg:grid-cols-[1.15fr_1fr]">
      <div>
        <Eyebrow>{kicker}</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">{title}</h2>
      </div>
      {lede && <p className="max-w-md text-muted-foreground lg:justify-self-end lg:text-right">{lede}</p>}
    </Reveal>
  );
}

function LivePulse({ label = "LIVE" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-red-400/30 bg-red-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-red-300">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-400" />
      </span>
      {label}
    </span>
  );
}

function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-[color:var(--ink)] text-white">
            <Code2 className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Codedge<span className="text-[color:var(--indigo-glow)]">.</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#programs" className="story-link hover:text-foreground">Programs</a>
          <a href="#advantage" className="story-link hover:text-foreground">Why Codedge</a>
          <a href="#stories" className="story-link hover:text-foreground">Stories</a>
          <a href="#masterclass" className="story-link hover:text-foreground">Masterclass</a>
          <a href="#faq" className="story-link hover:text-foreground">FAQ</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
        >
          Enroll Now <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="top" className="section-dark relative overflow-hidden">
      <motion.div
        aria-hidden
        className="orb h-[520px] w-[520px] -left-40 -top-40"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.22 275) 0%, transparent 60%)" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="orb h-[420px] w-[420px] right-[-120px] top-[40%]"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.18 300) 0%, transparent 65%)", opacity: 0.35 }}
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 grid-bg opacity-25" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:pb-28 lg:pt-24">
        <motion.div
          className="flex flex-col justify-center"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>The Gold Standard in Tech Careers</Eyebrow>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-4xl font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-[4.5rem]"
          >
            Architect your{" "}
            <span className="text-gradient">elite tech career.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            A career transformation program for engineers aiming at top-tier product companies — IBM & Microsoft certified, backed by a written placement guarantee.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-premium text-sm">
              Apply for Next Cohort <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#programs" className="btn-ghost text-sm">
              <PlayCircle className="h-4 w-4" /> Watch how it works
            </a>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-5 text-xs text-muted-foreground">
            Cohort 8.0 · Next batch starts Jan 20 · Limited to 30 seats · Advisors call back within 2 hours
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
            <div>
              <div className="font-display text-2xl font-semibold">24,000+</div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">Learners placed</div>
            </div>
            <div>
              <div className="font-display text-2xl font-semibold">350+</div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">Hiring partners</div>
            </div>
            <div>
              <div className="flex items-baseline gap-1 font-display text-2xl font-semibold">
                4.5
                <Star className="h-4 w-4 translate-y-[-2px] fill-[color:var(--indigo-glow)] text-[color:var(--indigo-glow)]" />
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">Learner rating</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-elev">
            <motion.div
              className="relative aspect-[4/5] h-full w-full"
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.6, ease: EASE }}
            >
              <Image
                src="/images/hero-learner.jpg"
                alt="Codedge learner placed at a top tech company"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--ink)] via-[color:var(--ink)]/40 to-transparent" />

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: EASE }}
              className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-medium backdrop-blur-xl"
            >
              <Shield className="h-3.5 w-3.5 text-[color:var(--indigo-glow)]" />
              Written Placement Guarantee
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6, ease: EASE }}
              className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-2xl border border-white/12 bg-white/[0.06] p-4 backdrop-blur-xl"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[color:var(--indigo-glow)] to-[color:var(--indigo-deep)] font-display text-sm font-semibold text-white">AM</div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold">Arun M V</div>
                  <div className="text-[11px] text-muted-foreground">Master in AI · IBM</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-display text-xl font-semibold text-[color:var(--indigo-glow)]">250%</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Salary Hike</div>
              </div>
            </motion.div>
          </div>

          {/* Floating live class card */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7, ease: EASE }}
            className="absolute -bottom-6 -left-6 hidden w-64 rounded-2xl border border-white/12 bg-[color:var(--ink)]/85 p-4 shadow-elev backdrop-blur-xl md:block"
          >
            <div className="flex items-center justify-between">
              <LivePulse />
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Now airing</span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <Image src="/images/mentor.jpg" alt="" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold">Transformers, from scratch</div>
                <div className="truncate text-[11px] text-muted-foreground">with Rohit K · ex-Google Brain</div>
              </div>
            </div>
            <div className="mt-3 flex -space-x-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="h-6 w-6 rounded-full border-2 border-[color:var(--ink)] bg-gradient-to-br from-[color:var(--indigo-glow)] to-[color:var(--indigo-deep)]" />
              ))}
              <div className="ml-3 flex items-center text-[11px] text-muted-foreground">+ 218 learners live</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <section className="border-y border-border bg-background py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Our graduates lead at
        </p>
        <div className="marquee-mask relative mt-6 overflow-hidden">
          <div className="marquee flex w-max gap-10 opacity-70">
            {[...hiringPartners, ...hiringPartners].map((p, i) => (
              <div key={i} className="font-display text-xl font-semibold tracking-tight text-foreground/70 transition-colors hover:text-foreground">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Live Cohort banner ---------------- */

function LiveCohort() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
      <Reveal>
        <div className="grid overflow-hidden rounded-3xl border border-border bg-[color:var(--ink)] text-white lg:grid-cols-[1.1fr_1fr]">
          <div className="relative min-h-[320px]">
            <Image src="/images/program-featured.jpg" alt="Live class in session" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--ink)]/40 to-transparent" />
            <div className="absolute left-4 top-4"><LivePulse label="LIVE NOW" /></div>
            <button aria-label="Play class preview" className="absolute inset-0 grid place-items-center">
              <motion.span
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className="grid h-20 w-20 place-items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-xl"
              >
                <PlayCircle className="h-9 w-9" />
              </motion.span>
            </button>
          </div>
          <div className="flex flex-col justify-center gap-6 p-8 lg:p-12">
            <Eyebrow>Inside a Codedge Live Class</Eyebrow>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Not lectures. <span className="text-gradient">A live studio</span> for engineers.
            </h2>
            <p className="text-muted-foreground">
              Every session is 60% mentor + 40% hands-on lab. Learners ship code inside the class — mentors review it live before you leave the call.
            </p>
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {[
                { k: "600+", v: "Live sessions / mo" },
                { k: "1:12", v: "Mentor ratio" },
                { k: "48 hr", v: "Doubt SLA" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-2xl font-semibold text-[color:var(--indigo-glow)]">{s.k}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Accreditations() {
  const items = [
    { icon: Award, t: "EU Credit System", d: "Globally accredited degree pathways with credit transfer support." },
    { icon: BadgeCheck, t: "Joint Certification", d: "IBM, Microsoft and industry-recognised joint credentials." },
    { icon: Shield, t: "NOS Verified", d: "Curriculum verified against National Occupational Standards." },
    { icon: GraduationCap, t: "Tier-1 Faculty", d: "Learning frameworks co-designed with ex-FAANG engineers." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <StaggerGroup className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, t, d }) => (
          <StaggerItem key={t} className="group bg-background p-7 transition-colors hover:bg-surface-2">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-[color:var(--indigo-glow)]/12 text-[color:var(--indigo-glow)]">
              <Icon className="h-5 w-5" />
            </span>
            <div className="mt-5 font-display text-base font-semibold">{t}</div>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}

function Programs() {
  const [featured, ...rest] = programs;
  return (
    <section id="programs" className="section-dark relative border-y border-white/5 px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          kicker="Academic Programs"
          title={<>Advanced <span className="text-gradient">specializations</span></>}
          lede="Courses powered by national skill frameworks and internationally recognised universities."
        />

        <StaggerGroup className="mt-16 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="group relative flex min-h-[520px] flex-col justify-end overflow-hidden rounded-3xl border border-white/10 p-8 sm:p-10"
          >
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.4, ease: EASE }}
            >
              <Image
                src="/images/program-featured.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover opacity-60"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--ink)] via-[color:var(--ink)]/70 to-transparent" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest backdrop-blur">
                {featured.tag} · Featured
              </span>
              <h3 className="mt-6 max-w-xl font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                {featured.title}
              </h3>
              <div className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">with {featured.partner} · {featured.track}</div>
              <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t border-white/15 pt-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Duration</div>
                  <div className="mt-1 font-display text-lg">{featured.duration}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Avg. CTC</div>
                  <div className="mt-1 font-display text-2xl text-[color:var(--indigo-glow)]">{featured.ctc}</div>
                </div>
                <a href="#contact" className="btn-premium text-sm">Know more <ArrowRight className="h-4 w-4" /></a>
              </div>
            </div>
          </motion.article>

          <div className="flex flex-col divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
            {rest.map((p) => (
              <motion.a
                key={p.title}
                variants={fadeUp}
                whileHover={{ x: 6, backgroundColor: "rgba(255,255,255,0.04)" }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                href="#contact"
                className="group flex items-center gap-5 p-5"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest">
                    <span className="text-[color:var(--indigo-glow)]">{p.tag}</span>
                    <span className="text-muted-foreground">· {p.duration}</span>
                  </div>
                  <div className="mt-1.5 truncate font-display text-base font-semibold">{p.title}</div>
                  <div className="mt-0.5 truncate text-xs text-muted-foreground">with {p.partner}</div>
                </div>
                <div className="hidden text-right sm:block">
                  <div className="font-display text-sm font-semibold text-[color:var(--indigo-glow)]">{p.ctc}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">CTC</div>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-[color:var(--indigo-glow)]" />
              </motion.a>
            ))}
          </div>
        </StaggerGroup>
      </div>
    </section>
  );
}

function Advantage() {
  return (
    <section id="advantage" className="px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          kicker="Why Codedge"
          title={<>Every part of it, <span className="text-gradient">built to hire you.</span></>}
          lede="Live learning, industry mentorship, real-world projects and dedicated placement support — engineered end-to-end."
        />
        <StaggerGroup className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
          {advantages.map(({ icon: Icon, tag, title, desc }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-surface-2"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--indigo-glow)]/12 text-[color:var(--indigo-glow)] transition-transform group-hover:rotate-6 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{tag}</span>
              </div>
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------------- Journey (edtech vertical roadmap) ---------------- */

function Journey() {
  return (
    <section className="section-dark relative overflow-hidden border-y border-white/5 px-4 py-24 sm:px-6 lg:py-32">
      <div className="orb h-[400px] w-[400px] right-[-100px] top-40" style={{ background: "radial-gradient(circle, oklch(0.55 0.22 275) 0%, transparent 60%)" }} aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <SectionHead
          kicker="The Learning Path"
          title={<>From day one to <span className="text-gradient">your offer letter.</span></>}
          lede="A structured six-chapter roadmap — with mentors, milestones and a written placement guarantee at the end."
          align="center"
        />

        <div className="relative mt-20">
          {/* central spine */}
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-white/15 to-transparent" />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, ease: EASE }}
              style={{ transformOrigin: "top" }}
              className="absolute inset-0 bg-gradient-to-b from-[color:var(--indigo-glow)] via-[color:var(--indigo-glow)]/60 to-transparent"
            />
          </div>

          <ol className="space-y-8 md:space-y-16">
            {journey.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <motion.li
                  key={s.t}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  {/* node */}
                  <div aria-hidden className="pointer-events-none absolute left-1/2 top-6 hidden -translate-x-1/2 md:block">
                    <div className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-[color:var(--ink)] shadow-[0_0_0_6px_color-mix(in_oklab,var(--indigo-glow)_15%,transparent)]">
                      <span className="font-display text-xs font-semibold text-[color:var(--indigo-glow)]">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                  </div>

                  <div className={right ? "md:col-start-2" : ""}>
                    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-[color:var(--indigo-glow)]/40 hover:bg-white/[0.05]">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Chapter {String(i + 1).padStart(2, "0")}</span>
                        <Circle className="h-3 w-3 fill-[color:var(--indigo-glow)] text-[color:var(--indigo-glow)]" />
                      </div>
                      <h3 className="mt-3 font-display text-xl font-semibold sm:text-2xl">{s.t}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {s.tags.map((t) => (
                          <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Support() {
  const items = [
    { icon: LifeBuoy, tag: "Learner Support", t: "Always-on support", d: "Chat, email or call — a real person picks up, day or night." },
    { icon: HeartHandshake, tag: "Mentorship", t: "A mentor who's done the job", d: "Paired 1:1 with someone who's shipped the work you're learning to do." },
    { icon: MessageCircle, tag: "Doubt Solving", t: "Live help when you're stuck", d: "Daily Q&A and open office hours — bring the question, no matter how small." },
    { icon: Shield, tag: "Placement", t: "A plan, signed and guaranteed", d: "Built around your background and goals — with a written guarantee." },
  ];
  return (
    <section className="px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          kicker="Support"
          title={<>Help arrives <span className="text-gradient">before you ask.</span></>}
        />
        <StaggerGroup className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, tag, t, d }) => (
            <motion.div
              key={t}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group bg-background p-7 transition-colors hover:bg-surface-2"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--indigo-glow)]/12 text-[color:var(--indigo-glow)] transition-transform group-hover:scale-110 group-hover:rotate-6">
                <Icon className="h-5 w-5" />
              </span>
              <div className="mt-5 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{tag}</div>
              <h3 className="mt-1 font-display text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function Frameworks() {
  return (
    <section className="section-dark relative overflow-hidden border-y border-white/5 px-4 py-24 sm:px-6 lg:py-32">
      <div className="orb h-[400px] w-[400px] -left-20 top-20" style={{ background: "radial-gradient(circle, oklch(0.55 0.22 275) 0%, transparent 60%)" }} aria-hidden />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <Eyebrow>Proprietary Systems</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Four frameworks. <span className="text-gradient">One outcome.</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Built by IITians, refined across 24,000+ learners — baked into every programme from day one.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { k: "24K+", v: "Learners", icon: GraduationCap },
                { k: "350+", v: "Hiring Partners", icon: Building2 },
                { k: "Signed", v: "Job Guarantee", icon: Shield },
                { k: "3", v: "Global Offices", icon: Trophy },
              ].map(({ k, v, icon: Icon }) => (
                <div key={v} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-[color:var(--indigo-glow)]/15 text-[color:var(--indigo-glow)]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-display text-base font-semibold leading-none">{k}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{v}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <StaggerGroup>
            <ol>
              {frameworks.map(({ icon: Icon, label, name, desc }, i) => (
                <motion.li
                  key={name}
                  variants={fadeUp}
                  whileHover={{ x: 8 }}
                  className="group flex gap-6 border-b border-white/10 py-8 last:border-b-0"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-[color:var(--indigo-glow)] transition-all group-hover:border-[color:var(--indigo-glow)]/60 group-hover:bg-[color:var(--indigo-glow)]/10">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{label}</div>
                      <span className="font-display text-xs text-muted-foreground tabular-nums">0{i + 1} / 04</span>
                    </div>
                    <h3 className="mt-1 font-display text-xl font-semibold sm:text-2xl">{name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stories (with cohort photo header) ---------------- */

function Stories() {
  return (
    <section id="stories" className="px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <SectionHead
            align="left"
            kicker="Learner Outcomes"
            title={<>The role shifts <span className="text-gradient">behind the numbers.</span></>}
            lede="24,000+ engineers hired at product companies. Here are four of them."
          />
          <Reveal className="relative h-56 overflow-hidden rounded-3xl border border-border">
            <Image src="/images/cohort.jpg" alt="Codedge cohort collaborating" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-3">
              <div className="flex -space-x-2">
                {stories.map((s) => (
                  <div key={s.name} className="grid h-8 w-8 place-items-center rounded-full border-2 border-background bg-gradient-to-br from-[color:var(--indigo-glow)] to-[color:var(--indigo-deep)] font-display text-[10px] font-semibold text-white">{s.initials}</div>
                ))}
              </div>
              <div className="text-xs font-medium">Cohort 7.0 · 96% placed</div>
            </div>
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-2">
          {stories.map((s) => (
            <motion.article
              key={s.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 24 }}
              className="group relative flex flex-col gap-6 rounded-3xl border border-border bg-surface p-8 transition-colors hover:bg-surface-2"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[color:var(--indigo-glow)] to-[color:var(--indigo-deep)] font-display text-sm font-semibold text-white">
                    {s.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-display text-base font-semibold">{s.name}</div>
                    <div className="truncate text-xs text-muted-foreground">{s.role}</div>
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <div className="flex items-baseline gap-1 font-display text-2xl font-semibold text-[color:var(--indigo-glow)]">
                    <TrendingUp className="h-4 w-4" />
                    {s.metric}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.metricLabel}</div>
                </div>
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground/80">
                &ldquo;{s.quote}&rdquo;
              </blockquote>
              <div className="mt-auto flex items-center gap-2 border-t border-border pt-4 text-xs text-muted-foreground">
                <BadgeCheck className="h-4 w-4 text-[color:var(--indigo-glow)]" /> {s.program}
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function Compare() {
  return (
    <section className="section-dark border-y border-white/5 px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHead
          align="center"
          kicker="The Investment"
          title={<>Why this is <span className="text-gradient">not a bootcamp.</span></>}
          lede="Same promise everywhere. Very different follow-through."
        />

        <Reveal className="mt-16 overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-white/10 bg-white/[0.03]">
            <div className="p-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">Feature</div>
            <div className="border-l border-white/10 p-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--indigo-glow)]">Codedge</div>
            <div className="border-l border-white/10 p-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">Generic Bootcamps</div>
          </div>
          {comparison.rows.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
              className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-white/5 last:border-b-0"
            >
              <div className="p-4 text-sm text-muted-foreground">{r.label}</div>
              <div className="flex items-center gap-2 border-l border-white/10 p-4 text-sm font-medium">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[color:var(--indigo-glow)]" />
                {r.us}
              </div>
              <div className="border-l border-white/10 p-4 text-sm text-muted-foreground line-through decoration-muted-foreground/40">{r.them}</div>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Masterclass() {
  return (
    <section id="masterclass" className="px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          kicker="Live & Free"
          title={<>Attend a free <span className="text-gradient">masterclass.</span></>}
          lede="Live sessions with industry experts to launch or accelerate your tech career."
        />
        <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-3">
          {masterclasses.map((m) => (
            <motion.article
              key={m.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-3xl border border-border bg-surface p-7 transition-colors hover:bg-surface-2"
            >
              <div className="flex items-center justify-between">
                <LivePulse />
                <span className="text-xs text-muted-foreground">{m.date} · 1 hr</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.sub}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {m.tags.map((t) => (
                  <span key={t} className="rounded-md bg-muted px-2 py-1 text-[11px] text-muted-foreground">{t}</span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 border-t border-border pt-4">
                <Image src="/images/mentor.jpg" alt="" width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
                <div className="flex-1 text-xs text-muted-foreground">Hosted by Codedge Faculty</div>
                <a href="#contact" className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--indigo-glow)]">
                  Reserve <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <Reveal className="grid overflow-hidden rounded-3xl border border-border bg-surface lg:grid-cols-2">
        <div className="relative p-8 lg:p-12">
          <Eyebrow>Placement-First Guidance</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
            Let&apos;s build your <span className="text-gradient">future together.</span>
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Discuss your goals, doubts and career direction with our advisors — free, no commitment.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--indigo-glow)]/12 text-[color:var(--indigo-glow)]">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Drop us a mail</div>
                <div className="font-medium">info@codedgeacademy.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--indigo-glow)]/12 text-[color:var(--indigo-glow)]">
                <Phone className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Call us</div>
                <div className="font-medium">+91 98765 43210</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--indigo-glow)]/12 text-[color:var(--indigo-glow)]">
                <Users className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Cohort 8.0</div>
                <div className="font-medium">30 seats · Starts Jan 20</div>
              </div>
            </div>
          </div>
        </div>

        <form className="border-t border-border bg-surface-2/60 p-8 lg:border-l lg:border-t-0 lg:p-12" onSubmit={(e) => e.preventDefault()}>
          <div className="text-sm font-semibold">Book a Free Consultation</div>
          <p className="mt-1 text-xs text-muted-foreground">Advisors available now.</p>

          <div className="mt-6 grid gap-4">
            <input placeholder="Full name" className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-[color:var(--indigo-glow)]" />
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <select className="rounded-xl border border-border bg-background px-3 py-3 text-sm outline-none focus:border-[color:var(--indigo-glow)]">
                <option>+91</option><option>+1</option><option>+44</option><option>+61</option><option>+971</option>
              </select>
              <input placeholder="Phone number" className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-[color:var(--indigo-glow)]" />
            </div>
            <select className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--indigo-glow)]">
              <option>Select course</option>
              <option>Master&apos;s in AI</option>
              <option>Master&apos;s in Data Science</option>
              <option>MBA</option>
              <option>BSc Computer Science</option>
            </select>
            <label className="flex items-start gap-2 text-xs text-muted-foreground">
              <input type="checkbox" className="mt-0.5" defaultChecked />
              I agree to Codedge Academy&apos;s Terms and Privacy Policy.
            </label>
            <button className="btn-premium mt-2 justify-center">
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </Reveal>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-t border-border bg-surface-2/40 px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHead
          align="center"
          kicker="Frequently Asked"
          title={<>Everything you might <span className="text-gradient">want to know.</span></>}
        />

        <Reveal className="mt-14 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-surface-2"
                >
                  <span className="font-display text-base font-medium sm:text-lg">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: EASE }}>
                    <ChevronDown className={`h-5 w-5 shrink-0 ${isOpen ? "text-[color:var(--indigo-glow)]" : "text-muted-foreground"}`} />
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-border px-6 pb-6 pt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
                </motion.div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section-dark relative overflow-hidden px-4 py-24 sm:px-6 lg:py-32">
      <motion.div
        aria-hidden
        className="orb h-[500px] w-[500px] left-1/2 -top-40 -translate-x-1/2"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.22 275) 0%, transparent 60%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <Eyebrow>Cohort 8.0 · Now Open</Eyebrow>
        <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Ready for the <span className="text-gradient">leap?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          Join the top 1% of engineers globally. Applications for our premium cohort are now open — limited to 30 seats.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#contact" className="btn-premium text-sm">Start your application <ArrowRight className="h-4 w-4" /></a>
          <a href="#programs" className="btn-ghost text-sm">Download brochure</a>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[color:var(--ink)] text-white">
              <Code2 className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-semibold">Codedge<span className="text-[color:var(--indigo-glow)]">.</span></span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Placement-first tech education — live programs in AI, Data Science and Emerging Technology.</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Programs</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Master in AI</li><li>Master in Data Science</li><li>MBA</li><li>BSc Computer Science</li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Company</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>About</li><li>Reviews</li><li>Blog</li><li>Career</li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>info@codedgeacademy.com</li><li>+91 98765 43210</li><li>India · UK</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} Codedge Academy. All rights reserved.
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <LiveCohort />
        <Accreditations />
        <Programs />
        <Advantage />
        <Journey />
        <Support />
        <Frameworks />
        <Stories />
        <Compare />
        <Masterclass />
        <Contact />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
