import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Play, X, Menu, Scissors, Palette, Clapperboard, Sparkles, Film, Layers, Users, SlidersHorizontal,
  Mail, Phone, MapPin, Instagram, Youtube, Linkedin, Video, ArrowRight,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import music from "@/assets/music.jpg";
import commercial from "@/assets/commercial.jpg";
import crew from "@/assets/crew.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VEJASRA FILMS — Videoproduktion & Post-Produktion" },
      { name: "description", content: "Full-Service Videoproduktion: Schnitt, Color Grading, Sound Design, Kamera & Ton aus einer Hand." },
      { property: "og:title", content: "VEJASRA FILMS — Cinematic Visuals & Stories" },
      { property: "og:description", content: "Schnitt, Color Grading, Sound Design, Kamera & Ton aus einer Hand." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["Referenzen", "#portfolio"], ["Leistungen", "#services"], ["Ablauf", "#ablauf"], ["Über uns", "#about"], ["Kontakt", "#contact"],
];

const stats = [
  { icon: Film, t: "4K / 8K", s: "Cinema Workflow" },
  { icon: Layers, t: "Schnitt & Dreh", s: "Alles aus einer Hand" },
  { icon: SlidersHorizontal, t: "Color Grading", s: "DaVinci Resolve Studio" },
  { icon: Users, t: "Österreich & DACH", s: "Vor Ort & Remote" },
];

const services = [
  { icon: Scissors, t: "Schnitt & Editing", d: "Dynamisches Pacing, klares Storytelling und Cuts für Web, Social Media & Kino." },
  { icon: Palette, t: "Color Grading", d: "Kino-Look, präzises Tone Matching und professionelle DaVinci-Resolve-Workflows." },
  { icon: Clapperboard, t: "Dreh & Produktion", d: "Kamera, Licht, Ton und Regie vor Ort – kompakt, eingespielt und termintreu." },
  { icon: Sparkles, t: "Sound & Finishing", d: "Sound Design, sauberes Mixing, Motion Graphics und High-Speed-Rendering." },
];

const steps = [
  ["01", "Briefing & Konzept", "Kurzes Erstgespräch zu Ziel, Stil und Zeitplan – unverbindlich und auf den Punkt."],
  ["02", "Dreh & Post-Produktion", "Produktion vor Ort oder direkt Schnitt, Color Grading und Sound Design aus eurem Rohmaterial."],
  ["03", "Feinschliff & Lieferung", "Gemeinsame Korrekturschleife und Export in allen benötigten Formaten für Web, Social Media & Kino."],
];

const cats = ["Alle", "Imagefilme", "Musikvideos", "Commercials"];
const works = [
  { title: "Above the Clouds", cat: "Imagefilme", svc: "Full Production", img: hero },
  { title: "Neon Nights", cat: "Musikvideos", svc: "Schnitt & Color Grading", img: music },
  { title: "Midnight Drive", cat: "Commercials", svc: "Dreh, Schnitt & Grading", img: commercial },
  { title: "Behind the Frame", cat: "Imagefilme", svc: "Full Production", img: crew },
  { title: "Ridge", cat: "Imagefilme", svc: "Color Grading", img: hero },
  { title: "Velvet Smoke", cat: "Musikvideos", svc: "Schnitt & Sound Design", img: music },
];

function Index() {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState<string | null>(null);
  const [filter, setFilter] = useState("Alle");
  const [split, setSplit] = useState(50);
  const [sent, setSent] = useState(false);
  const shown = filter === "Alle" ? works : works.filter((w) => w.cat === filter);

  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <a href="#home" className="font-display text-lg font-extrabold tracking-[0.25em]">
            VEJASRA<span className="text-primary"> FILMS</span>
          </a>
          <nav className="hidden gap-8 md:flex">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="text-sm text-muted-foreground transition-colors hover:text-primary">{l}</a>
            ))}
          </nav>
          <a href="#contact" className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover hover:glow md:inline-block">
            Projekt anfragen
          </a>
          <button className="relative z-50 md:hidden" onClick={() => setOpen(!open)} aria-label="Menü">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="fixed inset-x-0 bottom-0 top-16 z-40 flex h-[calc(100dvh-4rem)] flex-col gap-2 overflow-y-auto bg-background px-6 pb-10 pt-8 md:hidden">
            {nav.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="border-b border-border py-4 font-display text-2xl font-bold text-foreground transition hover:text-primary">{l}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-8 rounded-full bg-primary px-6 py-4 text-center text-lg font-semibold text-primary-foreground hover:bg-primary-hover">Projekt anfragen</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative px-5 pb-20 pt-28 md:pt-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs sm:tracking-[0.4em]">Videoproduktion & Post-Produktion</p>
          <h1 className="font-extrabold uppercase leading-[0.95] tracking-tight [font-size:clamp(2rem,8vw,4.5rem)]">
            <span className="block">Bilder, die bleiben.</span>
            <span className="block text-primary">Stories, die wirken.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Videoproduktion, Schnitt, Color Grading & Sound Design aus einer Hand – für Unternehmen, Marken und Artists im DACH-Raum.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <button onClick={() => setModal("Showreel 2026")} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-foreground/30 sm:w-auto px-6 py-3 font-semibold transition hover:border-primary hover:text-primary">
              <Play className="h-4 w-4" /> Showreel ansehen
            </button>
            <a href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary-hover hover:glow sm:w-auto">
              Projekt starten <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <button onClick={() => setModal("Showreel 2026")} className="group relative mt-10 block aspect-video w-full overflow-hidden rounded-3xl border border-border glow">
            <img src={hero} alt="Showreel Vorschau" width={1920} height={1088} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-fade" />
            <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground transition group-hover:scale-110 md:h-24 md:w-24">
              <Play className="ml-1 h-8 w-8 fill-current" />
            </span>
            <span className="absolute bottom-5 left-6 text-left text-sm uppercase tracking-[0.3em] text-foreground/80">Showreel 2026 · 2:14</span>
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card/50 px-5 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-8">
          {stats.map(({ icon: I, t, s }) => (
            <div key={s} className="flex min-w-0 items-center gap-3 md:gap-4">
              <I className="h-6 w-6 shrink-0 text-primary md:h-8 md:w-8" />
              <div className="min-w-0">
                <div className="truncate font-display text-sm font-bold sm:text-base md:text-xl">{t}</div>
                <div className="truncate text-xs text-muted-foreground md:text-sm">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-20 px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle kicker="Leistungen" title="Unsere Expertise" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: I, t, d }) => (
              <div key={t} className="group rounded-2xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/50">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <I className="h-6 w-6" />
                </div>
                <h3 className="mb-3 whitespace-nowrap text-lg font-bold">{t}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section id="ablauf" className="scroll-mt-20 px-5 pb-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle kicker="Ablauf" title="In 3 Schritten zum fertigen Film" />
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map(([n, t, d]) => (
              <div key={n} className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-4 font-display text-3xl font-extrabold text-primary">{n}</div>
                <h3 className="mb-2 text-lg font-bold">{t}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="scroll-mt-20 bg-card/40 px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle kicker="Referenzen" title="Ausgewählte Arbeiten" />
          <div className="mb-10 flex flex-wrap gap-2">
            {cats.map((c) => (
              <button key={c} onClick={() => setFilter(c)}
                className={`rounded-full border px-4 py-2 text-sm transition ${filter === c ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary hover:text-primary"}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((w) => (
              <button key={w.title} onClick={() => setModal(w.title)} className="group text-left">
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-border">
                  <img src={w.img} alt={w.title} loading="lazy" width={1280} height={720} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-overlay/30 transition group-hover:bg-overlay/10" />
                  <span className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-overlay/60 text-foreground backdrop-blur transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  </span>
                  <span className="absolute left-3 top-3 rounded-full bg-overlay/70 px-3 py-1 text-xs backdrop-blur">{w.cat}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold transition group-hover:text-primary">{w.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{w.svc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle kicker="Color Grading" title="Vorher / Nachher Showcase" />
          <p className="-mt-8 mb-8 text-muted-foreground">Ziehe den Regler, um rohes LOG-Material mit unserem finalen Color Grading zu vergleichen.</p>
          <div className="relative aspect-video select-none overflow-hidden rounded-3xl border border-border">
            <img src={commercial} alt="Nachher" loading="lazy" width={1280} height={720} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}>
              <img src={commercial} alt="Vorher" loading="lazy" width={1280} height={720} className="h-full w-full object-cover [filter:saturate(0.15)_contrast(0.7)_brightness(1.15)]" />
            </div>
            <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-primary" style={{ left: `${split}%` }}>
              <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <SlidersHorizontal className="h-4 w-4" />
              </span>
            </div>
            <span className="pointer-events-none absolute left-2 top-2 rounded-full bg-overlay/70 px-2 py-0.5 text-[0.6rem] uppercase tracking-wider sm:left-4 sm:top-4 sm:px-3 sm:py-1 sm:text-xs sm:tracking-widest">Vorher · Log</span>
            <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-primary px-2 py-0.5 text-[0.6rem] uppercase tracking-wider text-primary-foreground sm:right-4 sm:top-4 sm:px-3 sm:py-1 sm:text-xs sm:tracking-widest">Nachher · Graded</span>
            <input type="range" min={0} max={100} value={split} onChange={(e) => setSplit(+e.target.value)} aria-label="Vergleich"
              className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 bg-card/40 px-5 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <img src={crew} alt="Unser Team am Set" loading="lazy" width={1280} height={720} className="aspect-[4/3] w-full rounded-3xl border border-border object-cover" />
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-primary">Über uns</p>
            <h2 className="mb-6 text-3xl font-extrabold md:text-5xl">Hinter der Kamera & am Schnittplatz</h2>
            <p className="mb-4 text-muted-foreground">
              Wir verbinden kreatives Handwerk am Set mit präziser Post-Produktion. Direkt, unkompliziert und ohne Agentur-Wasserkopf – vom ersten Konzept bis zum finalen Master.
            </p>
            <p className="mb-8 text-muted-foreground">
              Präzises Cinema-Equipment, durchdachte High-End-Workflows und eine kompromisslose Hingabe an gutes Storytelling machen den Unterschied.
            </p>
            <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
              {[["Cinema", "Kameratechnik"], ["DaVinci", "Resolve Studio"], ["DACH-weit", "Vor Ort & Remote"]].map(([a, b]) => (
                <div key={a}><div className="font-display text-xl font-bold text-primary">{a}</div><div className="text-xs text-muted-foreground">{b}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-primary">Kontakt</p>
            <h2 className="mb-6 text-3xl font-extrabold md:text-5xl">Lass uns dein Projekt umsetzen.</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /> hello@vejasrafilms.de</li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /> +49 30 1234 5678</li>
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /> Melk, Österreich · DACH-weit</li>
            </ul>
            <Socials className="mt-8" />
          </div>
          <form onSubmit={submit} className="grid gap-4 rounded-3xl border border-border bg-card p-6 sm:grid-cols-2 md:p-8 lg:col-span-3">
            {sent ? (
              <div className="py-16 text-center sm:col-span-2">
                <h3 className="mb-2 text-2xl font-bold text-primary">Danke!</h3>
                <p className="text-muted-foreground">Wir melden uns innerhalb von 24 Stunden bei dir.</p>
              </div>
            ) : (
              <>
                <Field label="Name"><input required className={inputCls} /></Field>
                <Field label="E-Mail"><input required type="email" className={inputCls} /></Field>
                <Field label="Projektart">
                  <select className={inputCls}>
                    {["Imagefilm", "Commercial", "Schnitt/Grading", "Full Production"].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </Field>
                <Field label="Budget">
                  <select className={inputCls}>
                    {["< 2.500 €", "2.500 – 5.000 €", "5.000 – 15.000 €", "> 15.000 €"].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </Field>
                <div className="sm:col-span-2"><Field label="Nachricht"><textarea required rows={5} className={inputCls} /></Field></div>
                <button className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary-hover hover:glow sm:col-span-2">Anfrage senden</button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-sm text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} VEJASRA FILMS</span>
          <div className="flex gap-6"><a href="#" className="hover:text-primary">Impressum</a><a href="#" className="hover:text-primary">Datenschutz</a></div>
          <Socials />
        </div>
      </footer>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay/90 p-4 backdrop-blur-sm animate-in fade-in" onClick={() => setModal(null)}>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setModal(null)} className="absolute -top-12 right-0 text-foreground hover:text-primary" aria-label="Schließen"><X className="h-8 w-8" /></button>
            <div className="flex aspect-video flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card">
              <Video className="h-12 w-12 text-primary" />
              <p className="font-display text-xl font-bold">{modal}</p>
              <p className="text-sm text-muted-foreground">Video-Embed (Vimeo / YouTube) wird hier geladen.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const inputCls = "w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-sm text-muted-foreground">{label}</span>{children}</label>;
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-primary">{kicker}</p>
      <h2 className="text-3xl font-extrabold md:text-5xl">{title}</h2>
    </div>
  );
}

function Socials({ className = "" }: { className?: string }) {
  const s = [[Instagram, "Instagram"], [Video, "Vimeo"], [Youtube, "YouTube"], [Linkedin, "LinkedIn"]] as const;
  return (
    <div className={`flex gap-3 ${className}`}>
      {s.map(([I, l]) => (
        <a key={l} href="#" aria-label={l} className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition hover:border-primary hover:text-primary"><I className="h-4 w-4" /></a>
      ))}
    </div>
  );
}
