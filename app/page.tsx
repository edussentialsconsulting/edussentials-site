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

type ServiceIconKey = "compass" | "growth" | "writing" | "explore";

const keyServiceAreas: Array<{
  title: string;
  description: string;
  icon: ServiceIconKey;
}> = [
  {
    title: "Admissions counselling",
    description:
      "University selection, application strategy, and deadline management. We help students and families make informed decisions about where to apply and how to position each application with care and precision.",
    icon: "compass",
  },
  {
    title: "Profile Building",
    description:
      "The right activities, projects, and experiences don't happen by accident. We work with students early to identify meaningful areas of engagement and help them develop a profile that reads as credible and considered.",
    icon: "growth",
  },
  {
    title: "Essays and Applications",
    description:
      "This is where most of the real work happens. We help students find what's worth saying, structure it well, and present it with confidence. Every essay goes through rigorous rounds of feedback. Nothing leaves half-done.",
    icon: "writing",
  },
  {
    title: "Career Labs",
    description:
      "Choosing a university is easier when you know what you're working toward. Our structured exploration sessions help students connect their interests to academic fields and industries before the application begins.",
    icon: "explore",
  },
];

const serviceIcons = {
  compass: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5.5" />
      <path d="M12 6.5L13.7 12.2L12 13.5L10.3 12.2L12 6.5Z" />
      <path d="M12 12l4-1.5" />
      <path d="M12 12l-3.5 3.5" />
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17v-4h3v4" />
      <path d="M11 17v-6h3v6" />
      <path d="M15 17v-8h3v8" />
    </svg>
  ),
  writing: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 5h8l3 3v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
      <path d="M10 9h5" />
      <path d="M10 13h4" />
      <path d="M10 17h3" />
    </svg>
  ),
  explore: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="4.5" />
      <path d="M13.4 13.4L17 17" />
      <path d="M8 10h4" />
      <path d="M10 8v4" />
    </svg>
  ),
};

export default function Home() {
  return (
    <main className={`${bodyFont.className} min-h-screen bg-[#f6f0e8] text-[#2A2420]`}>
      <section className="relative overflow-hidden bg-[#002147] text-[#f6f0e8]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(210,180,140,0.18),_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(198,93,58,0.16),_transparent_28%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 lg:px-12 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div className="max-w-3xl">
              <h1
                className={`${displayFont.className} max-w-3xl text-4xl font-semibold leading-[0.94] text-[#f6f0e8] sm:text-5xl lg:text-6xl xl:text-7xl`}
              >
                Expertise. Execution. Excellence.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
                Edussentials is a boutique admissions consultancy built on knowing the work, doing the work, and getting it right.
              </p>
              <div className="mt-8">
                <a
                  href="#service-areas"
                  className="inline-flex items-center justify-center rounded-full bg-[#C65D3A] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#b65232] sm:px-7 sm:py-4"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -left-6 top-12 hidden h-28 w-28 rounded-full border border-[#d2b48c]/25 lg:block" />
              <div className="absolute -right-3 bottom-10 hidden h-36 w-36 rounded-full bg-[#C65D3A]/10 blur-3xl lg:block" />
              <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(246,240,232,0.14),rgba(246,240,232,0.04))] p-3 shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
                <div className="rounded-[1.8rem] border border-[#d2b48c]/18 bg-[#0b2d57] p-8">
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
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#002147] text-[#f6f0e8]">
                  {serviceIcons[service.icon]}
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
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
              Why families work with us
            </p>
            <div className="mt-6 space-y-6 text-base leading-8 text-white/74">
              <p>
                We are not a large agency. We don&apos;t operate at volume, and we don&apos;t run on templates.
              </p>
              <p>
                What we offer instead is focus. A small team that knows your application inside and out. A process that prioritises getting it right over getting it done fast. And a level of involvement that most larger firms simply cannot sustain.
              </p>
              <p>
                Families come to us because they want substance. They want someone who will sit with the hard questions, push back when needed, and take the work as seriously as the student does.
              </p>
              <p>That&apos;s what Edussentials was built to do.</p>
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
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B6258]">
                  If you&apos;re beginning to think about admissions, or if you&apos;re already in the middle of it and something feels off, we&apos;re happy to talk. No pitch, no pressure. Just an honest conversation about where things stand and whether we can help.
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
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdN_Jao6i_T3LMrkW2-r6XYsAuL7PxdWbrt3OJVX4agcLlbYg/viewform?usp=header"
                  className="inline-flex items-center justify-center rounded-full bg-[#C65D3A] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#b65232]"
                >
                  Book a consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
