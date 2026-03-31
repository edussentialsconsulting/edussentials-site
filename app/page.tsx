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
      "University selection, application strategy, and deadline management. We help students and families make informed decisions about where to apply and how to position each application with care and precision.",
  },
  {
    title: "Profile Building",
    description:
      "The right activities, projects, and experiences don't happen by accident. We work with students early to identify meaningful areas of engagement and help them build a profile that reflects genuine interest, not a manufactured checklist.",
  },
  {
    title: "Essays and Applications",
    description:
      "This is where most of the real work happens. We help students find what's worth saying, structure it well, and present it with confidence. Every essay goes through rigorous rounds of feedback. Nothing leaves half-done.",
  },
  {
    title: "Career Labs",
    description:
      "Many students apply without a clear sense of what they're working toward. Our career exploration sessions help them think through interests, industries, and academic paths before making decisions that are hard to reverse.",
  },
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
                Expertise. Execution. Excellence.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
                Edussentials is a boutique admissions consultancy built on knowing the work, doing the work, and getting it right.
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
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="max-w-3xl space-y-6 text-left text-lg leading-8 text-[#6B6258]">
            <p>
              Most admissions support sounds the same. Big claims, vague reassurance, long lists of services that blur together. We started Edussentials because we believed the process deserved more care than that.
            </p>
            <p>
              We work with a small number of students at a time. That&apos;s a deliberate choice. It means we know every application we touch, every essay we review, every profile we help shape. The work is specific, grounded, and built around what each student actually brings to the table rather than what sounds good on a brochure.
            </p>
            <p>
              Our students apply to strong universities around the world. The destination varies. The standard of work does not.
            </p>
          </div>
        </div>
      </section>

      <section id="service-areas" className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C65D3A]">
              What we do
            </p>
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
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-12 lg:py-24">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
              Why families work with us
            </p>
            <div className="mt-6 space-y-6 text-base leading-8 text-white/74">
              <p>
                We are not a large agency. We don&apos;t operate at volume, and we don&apos;t run on templates.
              </p>
              <p>
                What we offer instead is focus. A small team that knows your application inside and out. Advisors who will tell you when something isn&apos;t working rather than letting it slide. A process that prioritises getting it right over getting it done fast.
              </p>
              <p>
                Families come to us because they want substance. They want someone who will sit with the hard questions, push back when needed, and take the work as seriously as the student does.
              </p>
              <p>That&apos;s what Edussentials was built to do.</p>
            </div>
          </div>

          <div
            id="career-labs"
            className="rounded-[2rem] border border-[#d2b48c]/20 bg-[#d2b48c]/10 p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
              Career Labs
            </p>
            <p className={`${displayFont.className} mt-4 text-3xl font-medium leading-tight text-[#f6f0e8]`}>
              Thoughtful exploration before difficult decisions are made.
            </p>
            <p className="mt-5 text-base leading-8 text-white/78">
              Many students apply without a clear sense of what they&apos;re working toward. Our career exploration sessions help them think through interests, industries, and academic paths before making decisions that are hard to reverse.
            </p>
            <div className="mt-8">
              <a
                href="mailto:founder@edussentialsconsulting.com"
                className="inline-flex items-center justify-center rounded-full border border-[#d2b48c]/35 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#f6f0e8] transition-colors duration-200 hover:bg-white/8"
              >
                Book a consultation
              </a>
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
                  Start a conversation
                </p>
                <h2
                  className={`${displayFont.className} mt-4 max-w-3xl text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
                >
                  Start a conversation
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B6258]">
                  If you&apos;re beginning to think about admissions, or if you&apos;re already in the middle of it and something feels off, we&apos;re happy to talk. No pitch, no pressure. Just an honest conversation about where things stand and whether we can help.
                </p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B6258]">
                  Contact
                </p>
                <p className="mt-2 text-base leading-8 text-[#002147]">
                  <a
                    href="mailto:founder@edussentialsconsulting.com"
                    className="underline decoration-[#C65D3A]/60 underline-offset-4 transition-colors duration-200 hover:text-[#C65D3A]"
                  >
                    founder@edussentialsconsulting.com
                  </a>
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:items-end">
                <a
                  href="mailto:founder@edussentialsconsulting.com"
                  className="inline-flex items-center justify-center rounded-full bg-[#C65D3A] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#b65232]"
                >
                  Book a consultation
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
