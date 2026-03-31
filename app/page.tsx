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

const keyServiceAreas = [
  {
    title: "Admissions counselling",
    description:
      "Thoughtful guidance on university choices, positioning, timelines, and decision-making.",
  },
  {
    title: "Profile building",
    description:
      "Focused planning to help students shape a stronger, more intentional academic and extracurricular profile.",
  },
  {
    title: "Essays and applications",
    description:
      "Careful support on application strategy, storytelling, drafting, and final execution.",
  },
  {
    title: "Career labs and career exploration",
    description:
      "Structured exposure to industries, roles, and pathways so students can explore with clarity.",
  },
];

const whyEdussentials = [
  "Honest guidance instead of inflated promises.",
  "A boutique, hands-on approach with strong attention to detail.",
  "Academic seriousness paired with warmth and approachability.",
  "Execution-focused support from planning through submission.",
];

export default function Home() {
  return (
    <main className={`${bodyFont.className} min-h-screen bg-[#f6f0e8] text-[#2A2420]`}>
      <section className="relative overflow-hidden bg-[#002147] text-[#f6f0e8]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(210,180,140,0.18),_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(198,93,58,0.16),_transparent_28%)]" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-8 sm:px-10 lg:px-12">
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
                  Expertise. Execution. Excellence.
                </p>
              </div>
            </div>
            <div className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 lg:block">
              Premium Academic Guidance
            </div>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
                Focused Consultancy
              </p>
              <h1
                className={`${displayFont.className} max-w-3xl text-5xl font-semibold leading-[0.94] text-[#f6f0e8] sm:text-6xl lg:text-7xl`}
              >
                Refined, honest guidance for students building their next chapter.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
                Edussentials is a focused consultancy built around honest guidance,
                strong execution, and thoughtful career exploration.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/66">
                We support students through admissions counselling, profile building,
                essays and applications, and career labs that make exploration feel
                grounded, informed, and intentional.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#service-areas"
                  className="inline-flex items-center justify-center rounded-full bg-[#C65D3A] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#b65232]"
                >
                  Explore Services
                </a>
                <a
                  href="#career-labs"
                  className="inline-flex items-center justify-center rounded-full border border-[#d2b48c]/40 bg-transparent px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#f6f0e8] transition-colors duration-200 hover:bg-white/8"
                >
                  View Career Labs
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -left-6 top-12 hidden h-28 w-28 rounded-full border border-[#d2b48c]/25 lg:block" />
              <div className="absolute -right-3 bottom-10 hidden h-36 w-36 rounded-full bg-[#C65D3A]/10 blur-3xl lg:block" />
              <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(246,240,232,0.14),rgba(246,240,232,0.04))] p-3 shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
                <div className="rounded-[1.8rem] border border-[#d2b48c]/18 bg-[#0b2d57] p-8 text-[#f6f0e8]">
                  <div className="relative mx-auto flex h-[18.5rem] w-[18.5rem] items-center justify-center p-2">
                    <Image
                      src={lightLogoPath}
                      alt="Edussentials circular emblem"
                      width={500}
                      height={500}
                      unoptimized
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
                      Boutique. Premium. Execution-Focused.
                    </p>
                    <p className={`${displayFont.className} mt-4 text-3xl font-medium leading-tight text-[#f6f0e8]`}>
                      Designed to feel considered, calm, and deeply attentive.
                    </p>
                    <p className="mt-4 text-base leading-8 text-white/72">
                      Built around care, discretion, and clarity for families who
                      value thoughtful planning as much as final outcomes.
                    </p>
                    <p className={`${displayFont.className} mt-6 text-2xl italic leading-8 text-[#d2b48c]`}>
                      &quot;A more deliberate path to admissions and career clarity.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#002147]/10 bg-[#f6f0e8]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C65D3A]">
              What We Do
            </p>
            <h2
              className={`${displayFont.className} mt-4 text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
            >
              We help students move from possibility to clear, considered action.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#6B6258]">
            <p>
              Edussentials brings together academic planning, application support,
              and career exploration in one focused advisory experience.
            </p>
            <p>
              Our work is built for students who want more than generic advice.
              We believe strong outcomes come from careful thinking, steady guidance,
              and disciplined execution.
            </p>
            <p>
              That means helping each student build a profile with intention, write
              with clarity, apply with confidence, and explore career paths with
              maturity and context.
            </p>
          </div>
        </div>
      </section>

      <section id="service-areas" className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C65D3A]">
              Key Service Areas
            </p>
            <h2
              className={`${displayFont.className} mt-4 text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
            >
              Focused support across the work that matters most.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {keyServiceAreas.map((service) => (
              <article
                key={service.title}
                className="rounded-[1.75rem] border border-[#002147]/10 bg-[#f8f4ee] p-7 shadow-[0_14px_40px_rgba(0,33,71,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#002147] text-sm font-semibold uppercase tracking-[0.12em] text-[#f6f0e8]">
                  EC
                </div>
                <h3 className={`${displayFont.className} mt-5 text-3xl font-medium text-[#002147]`}>
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[#6B6258]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#002147] text-[#f6f0e8]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_1.05fr] lg:px-12 lg:py-24">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
              Why Edussentials
            </p>
            <h2 className={`${displayFont.className} mt-4 text-4xl font-medium leading-tight sm:text-5xl`}>
              Serious about outcomes, without losing warmth or perspective.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/74">
              Students often need guidance that is both rigorous and human. Our
              approach is intentionally measured, attentive, and built around the
              real work of preparing well.
            </p>
          </div>

          <div className="grid gap-4">
            {whyEdussentials.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white/10 bg-white/6 p-6"
              >
                <p className="text-lg leading-8 text-[#f6f0e8]">{item}</p>
              </div>
            ))}
            <div
              id="career-labs"
              className="rounded-[1.5rem] border border-[#d2b48c]/25 bg-[#d2b48c]/10 p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
                Career Labs
              </p>
              <p className="mt-3 text-base leading-8 text-white/78">
                Our career labs are designed to make exploration more concrete.
                Instead of abstract ambition, students get a clearer view of roles,
                industries, and pathways they may want to pursue.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f0e8]">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="rounded-[2.25rem] border border-[#002147]/10 bg-white p-8 shadow-[0_18px_60px_rgba(42,36,32,0.08)] sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C65D3A]">
                  Closing CTA
                </p>
                <h2
                  className={`${displayFont.className} mt-4 max-w-3xl text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
                >
                  Guidance should feel clear, thoughtful, and well executed from the very beginning.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B6258]">
                  If you are looking for a more deliberate admissions and career
                  guidance experience, Edussentials offers a focused partnership
                  built on clarity, care, and execution.
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:items-end">
                <a
                  href="#service-areas"
                  className="inline-flex items-center justify-center rounded-full bg-[#C65D3A] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#b65232]"
                >
                  Explore Services
                </a>
                <a
                  href="#career-labs"
                  className="inline-flex items-center justify-center rounded-full border border-[#002147]/15 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#002147] transition-colors duration-200 hover:bg-[#002147]/5"
                >
                  View Career Labs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
