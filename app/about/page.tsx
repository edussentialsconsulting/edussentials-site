import Image from "next/image";
import { Cormorant_Garamond, Libre_Franklin } from "next/font/google";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const bodyFont = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const lightLogoPath = "/Edulogo-Light.png";

const pillars = [
  {
    title: "What Edussentials is",
    description:
      "Edussentials is a focused consultancy supporting students across admissions counselling, profile building, essays and applications, and career exploration.",
  },
  {
    title: "The thinking behind it",
    description:
      "The work is built on a simple idea: important decisions deserve more care, more clarity, and more discipline than broad, hurried advice can offer.",
  },
  {
    title: "What matters most",
    description:
      "We value honest guidance, thoughtful planning, and strong execution. That means saying what is useful, not merely what is reassuring.",
  },
];

const distinctions = [
  "Boutique support allows for closer attention to detail, stronger continuity, and more considered decision-making.",
  "A volume-based model often moves quickly across students. Edussentials is designed to move carefully through the work that shapes real outcomes.",
  "Execution is treated as seriously as strategy, because good plans only matter when they are carried through well.",
];

export default function AboutPage() {
  return (
    <main className={`${bodyFont.className} min-h-screen bg-[#f6f0e8] text-[#2A2420]`}>
      <section className="relative overflow-hidden bg-[#002147] text-[#f6f0e8]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(210,180,140,0.18),_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(198,93,58,0.14),_transparent_28%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 lg:px-12">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d2b48c]/25 bg-[#f6f0e8]/10 p-2">
                <Image
                  src={lightLogoPath}
                  alt="Edussentials Consulting logo"
                  width={500}
                  height={500}
                  unoptimized
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
                  Edussentials Consulting
                </p>
                <p className={`${displayFont.className} mt-1 text-lg font-medium italic text-white/75`}>
                  About
                </p>
              </div>
            </div>
            <div className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 lg:block">
              Honest Guidance. Strong Execution.
            </div>
          </div>

          <div className="grid gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-24">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
                About Edussentials
              </p>
              <h1
                className={`${displayFont.className} max-w-4xl text-5xl font-semibold leading-[0.95] text-[#f6f0e8] sm:text-6xl lg:text-7xl`}
              >
                Built for students who need careful thinking, not hurried advice.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
                Edussentials was created as a more deliberate kind of consultancy:
                one that takes the work seriously, stays honest about choices, and
                treats execution as essential.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/66">
                The intention is not to make the process louder or more theatrical.
                It is to make it clearer, steadier, and better carried through.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
                Positioning
              </p>
              <p className={`${displayFont.className} mt-5 text-3xl font-medium leading-tight text-[#f6f0e8]`}>
                A boutique model for thoughtful admissions and career guidance.
              </p>
              <p className="mt-5 text-base leading-8 text-white/72">
                We work from the belief that students benefit from guidance that is
                measured, candid, and attentive to detail rather than broad and
                formulaic.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#002147]/10 bg-[#f6f0e8]">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C65D3A]">
              Core Ideas
            </p>
            <h2
              className={`${displayFont.className} mt-4 text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
            >
              The page is simple because the work itself should be clear.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[1.75rem] border border-[#002147]/10 bg-white p-7 shadow-[0_14px_40px_rgba(0,33,71,0.06)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C65D3A]">
                  {pillar.title}
                </p>
                <p className="mt-4 text-base leading-8 text-[#6B6258]">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C65D3A]">
              Honest Guidance
            </p>
            <h2
              className={`${displayFont.className} mt-4 text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
            >
              Trust is built through candour, not performance.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#6B6258]">
            <p>
              Honest guidance means being careful with ambition. It means helping
              students think well, prepare responsibly, and make decisions with a
              fuller view of what the work requires.
            </p>
            <p>
              Strong execution means carrying that thinking into action: shaping the
              profile, refining the writing, managing the application process, and
              maintaining standards all the way through.
            </p>
            <p>
              The point is not just to advise. It is to help students proceed with
              seriousness and clarity.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#002147] text-[#f6f0e8]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-24">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
              Boutique Difference
            </p>
            <h2 className={`${displayFont.className} mt-4 text-4xl font-medium leading-tight sm:text-5xl`}>
              Why a smaller, more deliberate model matters.
            </h2>
          </div>

          <div className="grid gap-4">
            {distinctions.map((point) => (
              <div
                key={point}
                className="rounded-[1.5rem] border border-white/10 bg-white/6 p-6"
              >
                <p className="text-lg leading-8 text-[#f6f0e8]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
